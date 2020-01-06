<template>
  <el-row :gutter="24">
  <el-container>
  <el-main>
    <div>
      <h2>正在热映</h2>
    </div>
    <el-divider ></el-divider>
    <el-carousel class="movies-carousel" :interval="4000" type="card" height="200px">
      <el-carousel-item  class="movies-carousel-item" v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div>
      <h3>最近热门电影</h3>
      <!-- <div>
        <el-button type="text">雨纷纷</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text">旧故里</el-button>
        <el-divider direction="vertical"></el-divider>
        <el-button type="text">草木深</el-button>
      </div> -->
        <el-tabs v-model="activeLatestM" @tab-click="shiftClick">
          <el-tab-pane  label="热门" name="hot"></el-tab-pane>
          <el-tab-pane  label="最新" name="latest"></el-tab-pane>
          <el-tab-pane  label="高分" name="h-score"></el-tab-pane>
          <el-tab-pane  label="华语" name="chinese"></el-tab-pane>
          <el-tab-pane  label="欧美" name="western"></el-tab-pane>
          <el-tab-pane  label="韩国" name="korea"></el-tab-pane>
          <el-tab-pane  label="日本" name="japan"></el-tab-pane>
        </el-tabs>
    </div>
    <div>
    <el-col :span="4" v-for="item in 8" :key="item">
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
    </div>
  </el-main>
  <el-aside width="25%">
    <div class="rank-list-week">
      <h3>一周口碑榜</h3>
      <div v-for="item in 10" :key="item">
        <el-link :underline='false'>{{item}}</el-link>
        <el-divider></el-divider>
      </div>
    </div>
  </el-aside>
</el-container>
  <div class="movies-hot-review">
    <el-divider></el-divider>
        <div class="review-title">
            <h3 class="most-view-title">最受欢迎影评
              <el-link class="view-title-link" :underline="false">更多热门影评
                <i class="el-icon-d-arrow-right"></i></el-link></h3>
        </div>
  <div class="review" v-for="i in 4" :key="i">
    <div class="review-hd">
      <el-link><el-image :src="url" :underline="false"></el-image></el-link>
    </div>
    <div class="review-bd">
      <el-link :underline="false" style="font-size:20px">电影标题</el-link>
      <div class="review-meta">
        <div class="review-user" style="float:left">
        <el-link :underline="false">测试用户</el-link>
        评价
        <el-link :underline="false">测试电影</el-link></div>
        <el-rate v-model="valueRate" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
      </div>
      <div class="review-content">
        歌好听，舞好看，场景切换流畅，镜头所展示出这些舞蹈也非常有冲击力，突然唱歌也一点都不觉得尴尬，电影院音响效果也好，最后出字幕也没着急亮灯，观众不多，也都没着急走，观影体验很棒！P.T.巴纳姆在当时的社.
        <el-link :underline="false">(全文)</el-link>
      </div>
    </div>
    <el-divider class="review-divider"></el-divider>
  </div>
  </div>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      activeLatestM: 'hot',
      url: require('../../assets/books/baiyexing.jpg'),
      valueRate: 3.7
    }
  },
  components: {

  },
  methods: {
    openbook (bid) {
      console.log(bid)
    },
    shiftClick (tab, event) {
      console.log(tab.name)
    }
  }

}
</script>

<style lang="less">
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
  .movies-carousel-item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    text-align: center;
    margin: 0;
  }

  .movies-carousel-item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .movies-carousel-item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  /*一周排行样式*/
  .rank-list-week{
    margin-left: 70px;
    margin-right: 40px;
  }
    .el-tabs__item {
     font-size: 15px;
  }
  /*影评*/
  .movies-hot-review{
    margin-left: 6%;
    margin-right: 25%
  }
  .review-hd {
    float: left;
    width: 100px;
}
.review-bd {
    padding-left: 120px;
}
.review-bd .review-meta {
    color: #666;
    padding: 8px 0;
}
.review-bd .review-content {
    line-height: 20px;
    padding: 5px 0;
}
.review-user{
  float: left;
  margin-right: 10px
}
.review-divider{
  margin: 50px 0;
}
.most-view-title{
  margin: 50px 0;
}
.view-title-link{
  margin-left: 20px
}
</style>
