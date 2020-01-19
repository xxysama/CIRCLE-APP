<template>
  <el-row :gutter="24">
    <el-container>
        <el-main>
            <div>
            <h2>图书名称</h2>
            </div>
            <div class="book-content-container">
                <div class="book-img">
                    <el-image style="width: 135px; height: 200px" ></el-image>
                </div>
                <div class="book-content">
                    <p>作者:</p>
                    <p>原作名:</p>
                    <p>出版年</p>
                    <p>页数</p>
                    <p>定价</p>
                    <p>ISBN</p>
                </div>
                <div class="book-rate">
                    <p>圈友评分</p>
                    <h1>8.5</h1>
                    <el-rate
                        v-model="bookRate"
                        disabled
                        text-color="#ff9900"
                        >
                    </el-rate>
                    <div v-for="i in 5" :key="i">
                        <div class="book-rate-star">{{i}}星</div>
                        <el-progress class="book-rate-progress" color="#ffd596" :text-inside="true" :stroke-width="14" :percentage="60.5"></el-progress>
                    </div>
                </div>
            </div>
            <h3>热门书籍</h3>
            <el-divider></el-divider>
        </el-main>
        <el-aside width="25%">
            <div class="book-aside">
            <h3>本书标签</h3>
            <div class="book-tag-container">
            <el-tag><a class="tag-link" href="#">标签一</a></el-tag>
            <el-tag type="success"><a class="tag-link" href="#">标签二</a></el-tag>
            <el-tag type="info"><a class="tag-link" href="#">标签三</a></el-tag>
            <el-tag type="warning"><a class="tag-link" href="#">标签四</a></el-tag>
            <el-tag type="danger"><a class="tag-link" href="#">标签五</a></el-tag>
            <el-tag type=""><a class="tag-link" href="#">标签六</a></el-tag>
            <el-tag type="success"><a class="tag-link" href="#">标签七</a></el-tag>
            <el-tag type="info"><a class="tag-link" href="#">标签八</a></el-tag>
            </div>
            <h3>相关推荐</h3>
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
      bid: '',
      bookRate: 3.7
    }
  },
  components: {
  },

  methods: {

  },

  mounted () {
    this.bid = this.$route.params.bid
    console.log('当前书籍' + this.bid)
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
    /*aside 侧边 样式*/
  .book-aside{
    margin-left: 70px;
    margin-right: 40px;
  }
  .book-tag-container{
    margin-bottom: 50px;
  }
</style>

<style lang="scss" scoped>
    .book-img{
        float: left;
        margin-right: 10px
    }
    .book-content-container{
        clear: both;
        height: 300px;
    }
    .book-content{
        float: left;
        width: 30%;
        font-size: 13px;
        margin-right: 10px
    }
    .book-rate{
        width: 20%;
        float: left;
        font-size: 13px;
    }
    .book-rate-progress{
        margin: 4px 0;
    }
    .book-rate-star{
        margin-right: 5px;
        float: left;
    }
    .book-rate /deep/ .el-progress-bar{
        width: 80%
    }
</style>
