<template>
 <div>
<el-container>
  <el-header>
  <el-row :gutter="20">
    <el-col :span="8">
        <el-image></el-image>
    </el-col>
    <el-col :span="8">
      <el-tabs v-model="activeName" stretch @tab-click="handleClick">
        <el-tab-pane label="读书" name="books"></el-tab-pane>
        <el-tab-pane label="电影" name="movies"></el-tab-pane>
        <el-tab-pane label="圈子" name="circle"></el-tab-pane>
        <el-tab-pane label="动态" name="dynamic"></el-tab-pane>
      </el-tabs>
    </el-col>
     <el-col :span="8">
       <div class="header-left">
        <el-button type="primary">登录</el-button>
        <el-button type="danger">加入圈子</el-button>
       </div>
     </el-col>
    </el-row>
  </el-header>

   <el-main>
     <router-view/>
   </el-main>

   <el-footer>
     <div class="footer-head">
        <el-link :underline="false" href="/books">CIRCLE</el-link>
        <el-link :underline="false" class="link-blog" href="x2yu.cn">BLOG</el-link>
        <el-link :underline="false" href="https://github.com/xxysama">GITHUB</el-link>
     </div>
      <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
     <div class="footer-main">
        <p class="el-p">I work with J<span
                style="color: rgb(255, 120, 71);">&amp;</span><span
                style="color: rgb(255, 94, 99);">4</span><span
                style="color: rgb(255, 94, 99);">U</span><span
                style="color: rgb(191, 60, 175);">+</span><span style="color: rgb(226, 183, 47);">`</span>
        </p>
        <p class="el-p">Powered by <el-link :underline="false" href="x2yu.cn">X2yu</el-link></p>
        <p class="el-p">© 2019 <el-link :underline="false" href="x2yu.cn">CIRCLE.CN</el-link></p>
     </div>
   </el-footer>
  </el-container>
 </div>
</template>

<style>
  .el-row {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-tabs__item {
    font-size: 19px ! important;
  }
  .header-left {
    margin-left: 50%;
  }
  .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
    margin-right: 5%
  }
  .link-blog{
    margin-right:10%;
    margin-left:10%
  }
  .el-p{
    display: inline;
    margin-left: 5%;
    margin-right: 5%
  }
</style>

<script>
export default {
  data () {
    return {
      activeName: 'books',
      SearchInput: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab.name)
      this.$router.push({ path: '/' + tab.name })
    }
  }
}
</script>
