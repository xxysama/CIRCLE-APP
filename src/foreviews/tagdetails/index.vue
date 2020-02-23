<template>
 <div style="height:800px">
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <el-menu
        class="categories"
        :default-active="menuactive"
        @select="handleSelect"
        active-text-color="red">
        <el-menu-item index="0">
          <i class="el-icon-menu"></i>
          <span slot="title">全部</span>
        </el-menu-item>
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">文学</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">流行</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">文化</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-menu"></i>
          <span slot="title">生活</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-menu"></i>
          <span slot="title">经管</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-menu"></i>
          <span slot="title">科技</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <div class="search-input">
        <el-input
          @keyup.enter.native="searchClick"
          placeholder="通过书名或作者搜索..."
          prefix-icon="el-icon-search"
          size="small"
          style="width: 400px;margin-right: 10px"
          v-model="keywords">
        </el-input>
        <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick" >搜索</el-button>
      </div>

      <div class="book-container">
        <div class="book-item" v-for="book in bookList" :key="book.bookName">
          <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
            <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{book.bookName}}</p>
            <p slot="content" style="font-size: 13px;margin-bottom: 6px">
              <span>{{book.author}}</span>
              <span>{{book.publishTime}}</span>
              <span>{{book.publisher}}</span>
            </p>
            <p slot="content" style="width: 300px" class="abstract">{{book.bookIntroduction}}</p>
            <el-card class="tag-book-card" :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(book)">
              <img :src='book.imgSrc' class="tag-img-book">
              <div class="tag-book-bottom">
                <el-link :underline="false" href="#">{{book.bookName | ellipsis}}</el-link>
                <div class="tag-book-author">
                  {{ book.author }}
                </div>
              </div>
          </el-card>
          </el-tooltip>
        </div>
      </div>
      <div class="book-pagination">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage3"
          :page-size="12"
          layout="prev, pager, next, jumper"
          :total="100">
        </el-pagination>
      </div>
    </el-main>
  </el-container>
 </div>
</template>

<script>

export default {
  inject: ['routerRefresh'], // 在子组件中注入在父组件中出创建的属性
  data () {
    return {
      keywords: '',
      menuactive: '0',
      bookList: []
    }
  },
  components: {
  },
  methods: {
    // 侧边栏菜单点击
    handleSelect () {
      alert(this.menuactive)
    },

    // 初始加载书籍
    loadBookList () {
      var _this = this
      this.$axios.get('book/list/latest')
        .then(response => {
          console.log(response.data)
          _this.bookList = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    // 跳转书籍详情页

    openbook (item) {
      this.$router.push({ path: '/books/' + item.id })
    },
    // 搜索书籍
    searchClick () {
      // const loading = this.$loading({
      //   lock: true,
      //   text: 'Loading',
      //   spinner: 'el-icon-loading',
      //   background: 'rgba(0, 0, 0, 0.7)'
      // })
      // setTimeout(() => {
      //   loading.close()
      // }, 2000)
      console.log(this.keywords)
      if (this.keywords !== '') {
        var _this = this
        this.$axios.get('book/search/' + this.keywords)
          .then(response => {
            console.log(response.data)
            _this.bookList = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },

    // 处理页码大小
    handleSizeChange () {

    },

    // 当前页变动时候触发
    handleCurrentChange () {

    }
  },
  mounted () {
    this.menuactive = this.$route.params.tid
    this.loadBookList()
  },

  filters: {
    // 书名超过字数 省略
    ellipsis (value) {
      if (!value) return ''
      if (!value) return ''
      if (value.length > 8) {
        return value.slice(0, 8) + '...'
      }
      return value
    }
  }
}
</script>

<style>
  .el-container {
    margin-left: 5%
  }
</style>

<style scoped>
  .categories {
    position: absolute;
    margin-left: 50%;
    left: -600px;
    top: 130px;
    width: 150px;
  }

  .search-input {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center
  }
  .book-container {
    margin-top: 30px
  }

  .book-item {
    width:140px;
    float:left;
    margin-right:25px;
    margin-bottom: 20px;
  }

  .tag-book-card {
    cursor: pointer;
    background-color: #fcfcfc
  }

  .tag-img-book{
    padding-left: 10px;
    padding-top: 5px;
    width: 115px;
    height: 172px;
  }

  .tag-book-author {
    margin-top: 8px;
    line-height: 10px;
    font-size: 13px;
  }

  .tag-book-bottom {
    padding-left: 8px;
    padding-top: 0px;
    padding-bottom: 10px;
  }

  .book-pagination {
    position: absolute;
    margin-top: 600px;
    margin-left: 10%;
  }
</style>
