<template>
  <el-row :gutter="24">
  <el-container>
  <el-main>
    <div>
      <h2>热门圈子</h2>
      <el-col :span="8" v-for="item in 3" :key="item">
        <el-card class="hot-circle-card" :body-style="{ padding: '0px' }" shadow="hover" @click.native="openCircle(item)">
          <div class="hot-circle-container">
            <div class="hot-circle-pic">
                <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="width: 100px; height: 100px" >
            </div>
            <div class="hot-circle-details">
                <h3>小组名称</h3>
                <div>
                  化简为奢，书中自有颜如玉
                </div>
                <div>
                  成员
                </div>
            </div>
            <div class="hot-circle-op">
              <el-popconfirm @onConfirm="confirmApply(item)"
                placement="top-start"
                confirmButtonText='好的'
                cancelButtonText='不用了'
                icon="el-icon-info"
                iconColor="red"
                title="确认申请加入"
              >
                <el-button type="text" slot="reference">申请加入</el-button>
              </el-popconfirm>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
    <el-divider ></el-divider>

    <div v-for="data in circleDataList" :key="data.categoryId">
      <div class="classify-circles-container">
        <el-tag class="classify-tag"
          :type="data.categoryType"
          effect="dark">
          {{data.categoryName}}
        </el-tag>
        <el-link :underline="false">更多<i class="el-icon-d-arrow-right"></i></el-link>
      </div>
      <div>
        <el-col :span="6" v-for="info in data.circleSimpleInfoDtos" :key="info.id">
          <el-card  class="classify-circle-crad" :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(info.id)">
            <div>
              <img src='' class="img" style="width: 46px; height: 46px">
              <span class="classify-circle-title">{{info.circleName}}</span>
            </div>
            <div style="padding: 8px;">
              <span :underline="false" href="#">{{info.memberNumber}}成员</span>
                <div class="hot-circle-op">
                  <el-button type="text">申请</el-button>
                </div>
            </div>
          </el-card>
        </el-col>
      </div>
    </div>

  </el-main>
  <el-aside width="25%">
    <div class="rank-list-week">
      <h3>随机小组</h3>
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
      activeLatestM: 'hot',
      circleDataList: []
    }
  },
  components: {

  },
  methods: {
    openCircle (cid) {
      this.$router.push({ path: '/circle/' + cid })
    },
    shiftClick (tab, event) {
      console.log(tab.name)
    },

    // 初始化展示圈子信息
    initCircleinfo () {
      var _this = this
      this.$axios.get('circle/init')
        .then(response => {
          console.log(response.data)
          _this.circleDataList = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    confirmApply (circle) {
      alert(circle)
    }
  },

  mounted () {
    // 初始化小组基本信息
    this.initCircleinfo()
  }

}
</script>

<style>
  .bottom {
    margin-top: 8px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: left;
  }
  .img{
    width: 100%;
  }
  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
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
  /*一周排行样式*/
  .rank-list-week{
    margin-left: 70px;
    margin-right: 40px;
  }
    .el-tabs__item {
     font-size: 15px;
  }
</style>
<style scoped>
  .hot-circle-pic{
    float: left;
  }
  .hot-circle-op{
    float: right;
    margin-right:10px ;
  }
  .hot-circle-details{
    margin-left: 120px;
    padding-right: 10px
  }
  .hot-circle-card{
    margin-bottom: 40px
  }
  .classify-circle-crad{
    margin-bottom: 40px

  }
  .classify-circle-title{
      margin-left: 10px;
  }
  .classify-tag{
    margin-right: 10px
  }
</style>
