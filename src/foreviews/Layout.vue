<template>
 <div>
<el-container>
  <el-header>
    <el-row :gutter="20">
      <el-menu
        :default-active="path"
        router
        mode="horizontal"
        background-color="white"
        text-color="#222"
        active-text-color="red"
        style="min-width: 1300px">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
        </el-menu-item>
          <span class="title-span" style="">Taking an abundant view, well grounded</span>
        <el-input
          placeholder="快速搜索..."
          prefix-icon="el-icon-search"
          size="medium"
          style="width: 300px;position:absolute;margin-top: 12px;right: 18%"
          v-model="keywords">
        </el-input>
        <el-dropdown style="position:absolute;margin-top: 12px;right: 4%" @command="avatarHandleCommand">
          <span @click="showLoginDialog" >
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="homepage">个人主页</el-dropdown-item>
            <el-dropdown-item command="favorites">收藏列表</el-dropdown-item>
            <el-dropdown-item command="account">账号管理</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-menu>
    </el-row>
  </el-header>

   <el-main>
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

  .fade-rv-enter-active, .fade-rv-leave-active {
  transition: opacity .5s;
}
  .fade-rv-enter, .fade-rv-leave-to  {
  opacity: 0;
}

</style>
<style scoped>
  .row-bg {
    padding: 10px 0;
    background-color: #0a3ca1;
  }
  .el-row {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
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
  .title-span{
    position: absolute;
    padding-top: 20px;
    right: 43%;
    font-size: 20px;
    font-weight: bold
  }
</style>

<script>

export default {
  data () {
    return {
      navList: [
        { name: '/books', navItem: '读书' },
        { name: '/movies', navItem: '观影' },
        { name: '/circle', navItem: '圈子' },
        { name: '/dynamic', navItem: '动态' } ],
      keywords: '',
      path: '',
      activeName: 'books',
      SearchInput: '',
      logo: require('../assets/logo.png')
    }
  },

  components: {

  },

  methods: {

    logout () {
      var _this = this
      this.$axios.get('/logout')
        .then(response => {
          if (response.data.code === '403') {
            _this.$store.commit('logout')
            _this.$router.replace('/toLogin')
            this.$notify({
              title: '成功',
              message: response.data.msg,
              type: 'success'
            })
          }
        })
        .catch(function (error) {
          console.log(error)
        })
      this.$router.push({ path: '/' + 'books' })
    },

    avatarHandleCommand (command) {
      if (command === 'logout') {
        var _this = this
        this.$axios.get('/logout')
          .then(response => {
            if (response.data.code === '403') {
              _this.$store.commit('logout')
              _this.$router.replace('/toLogin')
              this.$notify({
                title: '成功',
                message: response.data.msg,
                type: 'success'
              })
            }
          })
          .catch(function (error) {
            console.log(error)
          })
        this.$router.push({ path: '/' + 'books' })
      } else {
        this.$router.push({ path: '/' + command })
      }
    },

    showLoginDialog () {
      // this.loginVisible = true
      this.$router.push({ path: '/' + 'toLogin' })
    }

  },

  mounted () {
    // 获得第一级路由，以设置导航栏高亮
    var x = this.$route.path.indexOf('/', 1)
    if (x !== -1) {
      this.path = this.$route.path.substring(0, x)
    } else {
      this.path = this.$route.path
    }
  }
}
</script>
