<template>
  <el-row :gutter="24">
    <el-container>
        <el-main>
            <div class="circle-img">
                <img style="width: 80px; height: 80px" >
            </div>
            <div style="float:left;margin-right:20px">
                <h2>圈子标题</h2>
            </div>
            <div style="padding-top:20px;margin-bottom:45px">
                <el-button size="medium" type="success">加入圈子</el-button>
            </div>
            <div class="circle-board">
                <p>创建于:</p>
                <div class="circle-intro">
                        《看电影》杂志现在的阅读者、曾经的阅读者、将来的阅读者......
                <br>
                <br>不管怎样，毕竟《看电影》带给我们许多回忆
                <br>
                <br>《看电影》3期正刊+1期午夜场，正刊每十天一期。我们将以更为频密、细致的电影内容，回馈影迷、业界的需求。期待您，一如既往的支持。
                <br>
                <br>《看电影 午夜场》小组<a href="https://www.douban.com/link2/?url=http%3A%2F%2Fwww.douban.com%2Fgroup%2Fwuyechang%2F">http://www.douban.co<wbr>m/group/wuyechang/</a>
                <br>
                <br>《环球首映》小组<a href="https://www.douban.com/link2/?url=http%3A%2F%2Fwww.douban.com%2Fgroup%2Fhqsy%2F">http://www.douban.co<wbr>m/group/hqsy/</a>
                <br>
                <br>《香港电影》小组<a href="https://www.douban.com/link2/?url=http%3A%2F%2Fwww.douban.com%2Fgroup%2F194261%2F">http://www.douban.co<wbr>m/group/194261/</a>
                <br>
                <br>《看电影》新浪微博 <a href="https://www.douban.com/link2/?url=http%3A%2F%2Ft.sina.com.cn%2Fmovieview" target="_blank" rel="nofollow">http://t.sina.com.cn<wbr>/movieview</a>
                <br>
                <br>百度贴吧——看电影杂志吧
                <br><a href="https://www.douban.com/link2/?url=http%3A%2F%2Ftieba.baidu.com%2Ff%3Fkw%3D%25BF%25B4%25B5%25E7%25D3%25B0%25D4%25D3%25D6%25BE" target="_blank" rel="nofollow">http://tieba.baidu.c<wbr>om/f?kw=%BF%B4%B5%E7<wbr>%D3%B0%D4%D3%D6%BE</a>
                <br>
                <br>豆瓣《看电影》杂志档案馆<a href="https://www.douban.com/link2/?url=http%3A%2F%2Fwww.douban.com%2Fsubject%2F1818673%2F">http://www.douban.co<wbr>m/subject/1818673/</a>
                <br>
                <br>时光网《看电影》杂志读者小组<a href="https://www.douban.com/link2/?url=http%3A%2F%2Fwww.mtime.com%2Fgroup%2Fmovieview%2F&amp;link2key=6c9b7c0099" target="_blank" rel="nofollow">http://www.mtime.com<wbr>/group/movieview/</a>
                <br>
                <br>《看电影》出版方大嘴传媒官方论坛 <a href="https://www.douban.com/link2/?url=http%3A%2F%2Fwww.dazui.com&amp;link2key=6c9b7c0099" target="_blank" rel="nofollow">www.dazui.com</a>
                </div>
            </div>

            <div class="circle-topics">
              <div class="topic-tab">
                  <h3>最近讨论</h3>
              </div>
              <el-table
                @row-click = "openTopic"
                :data="tableData"
                style="width: 95%">
                <el-table-column
                  prop="disscuss"
                  label="讨论"
                  width="300">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="作者"
                  width="200">
                </el-table-column>
                <el-table-column
                  prop="reply"
                  label="回应"
                  width="">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="最后回应"
                  width="">
                </el-table-column>
              </el-table>
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
      tableData: [{
        disscuss: '测试讨论',
        date: '2016-05-02',
        name: '王小虎',
        reply: '111'
      }, {
        disscuss: '测试讨论',
        date: '2016-05-04',
        name: '王小虎',
        reply: '222'
      }, {
        disscuss: '测试讨论',
        date: '2016-05-01',
        name: '王小虎',
        reply: '333'
      }, {
        disscuss: '测试讨论',
        date: '2016-05-03',
        name: '王小虎',
        reply: '444'
      }]
    }
  },
  components: {
  },

  methods: {
    openTopic (row) {
      alert(row.reply)
    }
  },

  mounted () {
    this.cid = this.$route.params.cid
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
</style>
