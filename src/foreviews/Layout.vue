<template>
 <div>
<el-container>
  <el-header>
  <el-row :gutter="20">
    <el-col :span="8">
        <!-- <el-image class="logo-img" :src="logo"></el-image> -->
        <img src="../assets/logo.png" class="logo-img">
    </el-col>
    <el-col :span="8">
      <el-tabs v-model="activeName" stretch @tab-click="navHandleClick">
        <el-tab-pane label="读书" name="books"></el-tab-pane>
        <el-tab-pane label="电影" name="movies"></el-tab-pane>
        <el-tab-pane label="圈子" name="circle"></el-tab-pane>
        <el-tab-pane label="动态" name="dynamic"></el-tab-pane>
      </el-tabs>
    </el-col>
     <el-col :span="8">
       <div class="header-right">
          <el-dropdown @command="avatarHandleCommand">
            <span class="el-dropdown-link"  @click="showLoginDialog" >
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="sign-in">个人主页</el-dropdown-item>
              <el-dropdown-item command="register">账号管理</el-dropdown-item>
              <el-dropdown-item command="register">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
       </div>
     </el-col>
    </el-row>
  </el-header>

   <el-main>
      <login-form :loginVisible.sync="loginVisible"></login-form>
      <transition name="fade-rv" mode="out-in">
          <router-view></router-view>
      </transition>
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
  .header-right {
    margin-left: 70%;
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
  .fade-rv-enter-active, .fade-rv-leave-active {
  transition: opacity .5s;
}
  .fade-rv-enter, .fade-rv-leave-to  {
  opacity: 0;
}
  .logo-img {
    margin-top: -10px;
    width: 70%;
  }
</style>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  data () {
    return {
      activeName: 'books',
      SearchInput: '',
      logo: require('../assets/logo.png'),
      loginVisible: false,
      registerVisible: false
    }
  },

  components: {
    LoginForm
  },

  methods: {
    navHandleClick (tab, event) {
      console.log(tab.name)
      this.$router.push({ path: '/' + tab.name })
    },

    avatarHandleCommand (command) {

    },

    showLoginDialog () {
      this.loginVisible = true
    }

  },

  mounted () {

  }
}
</script>
