<template>
 <div>
    <el-col :span="4" v-for="book in bookList" :key="book.bookName">
      <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{book.bookName}}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>{{book.author}}</span> /
          <span>{{book.publishTime}}</span> /
          <span>{{book.publisher}}</span>
        </p>
        <p slot="content" style="width: 300px" class="abstract">{{book.bookIntroduction}}</p>
        <el-card class="book-card" :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(book)">
          <img :src='book.imgSrc' class="img-book">
          <div class="book-bottom">
            <el-link :underline="false" href="#">{{book.bookName | ellipsis}}</el-link>
            <div class="book-author">
              {{ book.author }}
            </div>
          </div>
        </el-card>
      </el-tooltip>
     </el-col>
 </div>
</template>

<script>
export default {
  data () {
    return {
      bookList: []
    }
  },
  components: {
  },
  methods: {

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
    }
  },

  mounted () {
    this.loadBookList()
  }
}
</script>

<style>

</style>
