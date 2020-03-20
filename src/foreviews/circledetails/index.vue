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
      cid: ''
    }
  },
  components: {
  },

  methods: {

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
        height: 100px;
    }
</style>
