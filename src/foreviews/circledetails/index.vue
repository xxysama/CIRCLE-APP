<template>
  <el-row :gutter="24">
    <el-container>
        <el-main>
          <div class="circle_info" :v-model="circleInfo">
            <div class="circle-img">
                <img style="width: 80px; height: 80px" :src='circleInfo.circleImg' >
            </div>
            <div style="float:left;margin-right:20px">
                <h2>{{circleInfo.circleName}}</h2>
            </div>
            <div style="padding-top:20px;margin-bottom:45px">
                <el-popconfirm  @onConfirm="confirmApply(cid)"
                  placement="top-start"
                  confirmButtonText='好的'
                  cancelButtonText='不用了'
                  icon="el-icon-info"
                  iconColor="red"
                  title="确认申请加入"
                >
                  <el-button size="medium" type="success" slot="reference">加入圈子</el-button>
                </el-popconfirm>
            </div>
            <div class="circle-board">
                <p>创建于: {{circleInfo.createdTime}}</p>
                <div class="circle-intro" style="white-space: pre-wrap;">
                  {{circleInfo.circleBoard}}
                </div>
            </div>
          </div>

            <div class="circle-topics">
              <div class="topic-tab">
                  <h3>最近讨论
                    <el-button type="primary" size="medium" icon="el-icon-plus" style="float:right;margin-right:100px">发帖</el-button>
                  </h3>
              </div>
              <el-table
                @row-click = "openTopic"
                :data="tableData"
                style="width: 95%">
                <el-table-column
                  prop="topicTitle"
                  label="讨论"
                  width="300">
                </el-table-column>
                <el-table-column
                  prop="authorName"
                  label="作者"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="replyCount"
                  label="回应"
                  width="">
                </el-table-column>
                <el-table-column
                  prop="updateTime"
                  label="最后回应"
                  width="">
                </el-table-column>
              </el-table>
              <div class="topic-pagination">
                <el-pagination
                  background
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page.sync="currentPage"
                  :page-size="12"
                  layout="total, prev, pager, next, jumper"
                  :total= total>
                </el-pagination>
              </div>
            </div>

        </el-main>
        <el-aside width="25%">
            <div class="movie-aside">
            <h3>圈子标签</h3>
            <div class="movie-tag-container">
            <el-tag><a class="tag-link" href="#">标签一</a></el-tag>
            <el-tag type="success"><a class="tag-link" href="#">标签二</a></el-tag>
            <el-tag type="info"><a class="tag-link" href="#">标签三</a></el-tag>
            <el-tag type="warning"><a class="tag-link" href="#">标签四</a></el-tag>
            <el-tag type="danger"><a class="tag-link" href="#">标签五</a></el-tag>
            <el-tag type=""><a class="tag-link" href="#">标签六</a></el-tag>
            <el-tag type="success"><a class="tag-link" href="#">标签七</a></el-tag>
            <el-tag type="info"><a class="tag-link" href="#">标签八</a></el-tag>
            </div>

            <h3>友情圈子</h3>
            <div v-for="item in 10" :key="item">
                <el-link :underline='false'>{{item}}</el-link>
                <el-divider></el-divider>
            </div>

            </div>
        </el-aside>
    </el-container>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      cid: '',
      circleInfo: '',
      tableData: [],
      currentPage: 1,
      total: 0
    }
  },
  components: {
  },

  methods: {

    loadCircleInfo () {
      var _this = this
      this.$axios.get('circle/' + this.cid)
        .then(response => {
          console.log(response.data)
          _this.circleInfo = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    confirmApply (circleId) {
      var _this = this
      this.$axios.put('circle/member/apply', {
        circleId: circleId,
        memberId: this.$store.state.user.userId
      })
        .then(response => {
          console.log(response.data)
          if (response.data.code === '200') {
            this.$notify({
              title: '成功',
              message: response.data.msg,
              type: 'success'
            })
            // 跳转小组
            _this.openCircle(circleId)
          }

          // 提交失败
          if (response.data.code === '501') {
            this.$notify.error({
              title: '错误',
              message: response.data.data
            })
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    openTopic (row) {
      alert(row.reply)
    },

    // 加载话题
    loadTopicByPage () {
      var cid = this.cid
      var page = this.currentPage
      var _this = this
      this.$axios.get('circle/topic/' + cid + '/' + page)
        .then(response => {
          _this.tableData = response.data.records
          _this.total = response.data.total
          _this.currentPage = response.data.current
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    // 处理页码大小
    handleSizeChange () {

    },

    // 当前页变动时候触发
    handleCurrentChange () {
      if (this.menuactive === '0') {
        // this.loadBookByPage(this.currentPage)
      } else {
        // this.loadTagBookByPage(this.menuactive, this.currentPage)
      }
    }
  },

  mounted () {
    this.cid = this.$route.params.cid
    this.loadCircleInfo()
    // this.loadTopicByPage()
  }
}
</script>

<style>
  .bottom {
    margin-top: 8px;
    line-height: 12px;
  }
  .img{
    width: 100%;
  }
  .button {
    padding: 0;
    float: left;
  }

  .el-container {
    margin-left: 5%
  }
  .el-card{
    margin-top: 20px
  }
  .el-tag{
    margin-top: 10px;
    margin-left: 10px;
    text-decoration: none;
  }
  .el-aside{
    margin-top: 40px;
  }
  .tag-link{
    text-decoration: none;
    color: gray
  }
</style>

<style lang="scss" scoped>
    .circle-img {
        float: left;
        margin-right: 10px;
    }
    .circle-board {
        margin-right: 20px;
        padding: 10px 20px;
        background: #fff4e8;
        border-radius: 5px;
        position: relative;
        height: auto;
    }

    .topic-tab{
      margin: 30px 0 ;
    }

    .topic-pagination {
      margin-top: 20px;
      margin-left: 25%;
    }
</style>
