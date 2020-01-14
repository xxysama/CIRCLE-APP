<template>
  <el-row :gutter="24">
  <el-container>
  <el-main>
    <div>
      <h2>热门圈子</h2>
      <el-col :span="8" v-for="item in 3" :key="item">
        <el-card class="hot-circle-card" :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(item)">
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
              <el-button type="text">申请加入</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>
    <el-divider ></el-divider>

    <div class="classify-circles-container">
      <el-tag
        effect="dark">
        文化
      </el-tag>
    </div>
    <div>
    <el-col :span="4" v-for="item in 6" :key="item">
      <el-card  class="classify-circle-crad" :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(item)">
        <img src='' class="img">
        <div style="padding: 8px;">
          <el-link :underline="false" href="#">{{item}}</el-link>
          <div class="bottom clearfix">
            <el-button type="text" class="button">作者</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    </div>

    <div>
      <el-tag
      type="success"
        effect="dark">
        行摄
      </el-tag>
    </div>
    <div>
    <el-col :span="4" v-for="item in 6" :key="item">
      <el-card class="classify-circle-crad" :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(item)">
        <img src='' class="img">
        <div style="padding: 8px;">
          <el-link :underline="false" href="#">{{item}}</el-link>
          <div class="bottom clearfix">
            <el-button type="text" class="button">作者</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    </div>

    <div class="classify-circles-container">
      <el-tag
        type="warning"
        effect="dark">
        娱乐
      </el-tag>
    </div>
    <div>
    <el-col :span="4" v-for="item in 6" :key="item">
      <el-card  class="classify-circle-crad" :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(item)">
        <img src='' class="img">
        <div style="padding: 8px;">
          <el-link :underline="false" href="#">{{item}}</el-link>
          <div class="bottom clearfix">
            <el-button type="text" class="button">作者</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    </div>

    <div class="classify-circles-container">
      <el-tag
        type="danger"
        effect="dark">
        时尚
      </el-tag>
    </div>
    <div>
    <el-col :span="4" v-for="item in 6" :key="item">
      <el-card  class="classify-circle-crad" :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(item)">
        <img src='' class="img">
        <div style="padding: 8px;">
          <el-link :underline="false" href="#">{{item}}</el-link>
          <div class="bottom clearfix">
            <el-button type="text" class="button">作者</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
    </div>

    <div class="classify-circles-container">
      <el-tag
        type="info"
        effect="dark">
        科技
      </el-tag>
    </div>
    <div>
    <el-col :span="4" v-for="item in 6" :key="item">
      <el-card  class="classify-circle-crad" :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(item)">
        <img src='' class="img">
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
</style>
