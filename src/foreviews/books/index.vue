<template>
  <el-row :gutter="24">
  <el-container>
  <el-main>
    <el-carousel class="books-carousel" indicator-position="outside">
      <el-carousel-item class="books-carousel-item" v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-col :span="4" v-for="item in 10" :key="item">
      <el-card :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(item)">
        <img src='../../assets/books/baiyexing.jpg' class="img">
        <div style="padding: 8px;">
          <el-link :underline="false" href="#">{{item}}</el-link>
          <div class="bottom clearfix">
            <el-button type="text" class="button">作者</el-button>
          </div>
        </div>
    </el-card>
  </el-col>
  </el-main>
  <el-aside width="25%">
    <div>
      <el-tag><a class="tag-link" href="#">标签一</a></el-tag>
      <el-tag type="success"><a class="tag-link" href="#">标签二</a></el-tag>
      <el-tag type="info"><a class="tag-link" href="#">标签三</a></el-tag>
      <el-tag type="warning"><a class="tag-link" href="#">标签四</a></el-tag>
      <el-tag type="danger"><a class="tag-link" href="#">标签五</a></el-tag>
    </div>
  </el-aside>
</el-container>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      url: require('../../assets/books/baiyexing.jpg')
    }
  },
  components: {

  },
  methods: {
    openbook (bid) {
      console.log(bid)
    }
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
  /*轮播图样式*/
  .books-carousel-item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center
  }

  .books-carousel-item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .books-carousel-item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
