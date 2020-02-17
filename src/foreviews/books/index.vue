<template>
  <el-row :gutter="24">
  <el-container>
  <el-main>
    <div>
      <h2>图书资讯</h2>
    </div>
    <el-divider ></el-divider>
    <el-carousel class="books-carousel" indicator-position="outside" :interval= 5000 >
      <el-carousel-item class="books-carousel-item"  v-for="(item,i) in bookCarouselList" :key="i">
        <div class="books-carousel-hd">
          <img :src='item.illustration' style="width: 115px; height: 172px" >
        </div>
        <div class="books-carousel-bd">
          <p style="font-size:20px">{{item.title}}</p>
          <div class="books-carousel-meta">
            <div class="books-carousel-user">
                <p>{{item.author}}</p>
            </div>
            <div class="books-carousel-content">
              <p>{{item.content}}</p>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <h3>热门书籍</h3>
    <el-divider></el-divider>
    <el-col :span="4" v-for="(item,i) in homeBookList" :key="i">
      <el-card :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(item)">
        <img :src='item.imgSrc' class="img-book">
        <div class="book-bottom">
          <el-link :underline="false" href="#">{{item.bookName | ellipsis}}</el-link>
          <div class="book-author">
            {{ item.author }}
          </div>
        </div>
    </el-card>
  </el-col>
  </el-main>
  <el-aside width="25%">
    <div class="book-aside">
    <h3>热门标签</h3>
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
    <h3>一周热读</h3>
    <div v-for="item in 10" :key="item">
        <el-link :underline='false'>{{item}}</el-link>
        <el-divider></el-divider>
    </div>

    </div>
  </el-aside>
</el-container>
  <div class="books-hot-review">
    <el-divider></el-divider>
        <div class="books-review-title">
            <h3 class="books-most-review-title">最受欢迎书评
              <el-link class="books-view-title-link" :underline="false">更多热门书评
                <i class="el-icon-d-arrow-right"></i></el-link></h3>
        </div>
  <div class="books-review" v-for="i in 4" :key="i">
    <div class="books-review-hd">
      <el-link :underline="false"><img :src="url" style="width: 100%; height: 100%" ></el-link>
    </div>
    <div class="books-review-bd">
      <el-link :underline="false" style="font-size:20px">书籍名称</el-link>
      <div class="books-review-meta">
        <div class="books-review-user" style="float:left">
        <el-link :underline="false">测试用户</el-link>
        评价
        <el-link :underline="false">测试书籍</el-link></div>
        <el-rate v-model="valueRate" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
      </div>
      <div class="books-review-content">
        创作这部作品的契机，在于一次相谈甚欢的约稿。可等到头脑冷静下来，我心里叫苦不迭。这只怕是我见过最简洁的选题了，没有类型，没有梗概，没有构想，没有时间节点……有的只是“徐霞客”三个字，以及几个关于他...
        <el-link :underline="false">(全文)</el-link>
      </div>
    </div>
    <el-divider class="books-review-divider"></el-divider>
   </div>
  </div>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      url: require('../../assets/books/baiyexing.jpg'),
      valueRate: 2.7,
      homeBookList: [
      ],
      bookCarouselList: [
      ]
    }
  },
  components: {

  },
  methods: {
    // 书籍咨询信息
    getBookCarousel () {
      var _this = this
      this.$axios.get('carousel/book')
        .then(response => {
          console.log(response.data)
          console.log('测试获取' + _this.homeBookList.length)
          _this.bookCarouselList = response.data
          console.log('测试获取' + _this.homeBookList)
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    // 展示最新书籍信息
    getHomeBooks () {
      var _this = this
      this.$axios.get('book/list/latest')
        .then(response => {
          console.log(response.data)
          console.log('测试获取' + _this.homeBookList.length)
          _this.homeBookList = response.data
          console.log('测试获取' + _this.homeBookList)
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    openbook (item) {
      console.log('跳转前传 ' + item.bookid)
      this.$router.push({ path: '/books/' + item.bookId })
    }
  },

  mounted () {
    this.getBookCarousel()
    this.getHomeBooks()
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

<style scoped>
  .img-book{
    width: 115px;
    height: 172px;
  }

  .book-author {
    margin-top: 8px;
    line-height: 10px;
    font-size: 13px;
  }

  .book-bottom {
    padding-left: 8px;
    padding-top: 0px;
    padding-bottom: 10px;
  }

 /*轮播图样式*/
   .books-carousel-hd{
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 50px;
    float: right;
  }
  .books-carousel-bd{
    margin-left: 50px;
    margin-right: 50px;
    margin-top: 50px;
  }

  .books-carousel-item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
  }

  .books-carousel-item:nth-child(2n) {
    border: solid 1px #ddd;
    border-radius: 2px;
  }

  .books-carousel-item:nth-child(2n+1) {
    border: solid 1px #ddd;
    border-radius: 2px;
  }
  .books-hot-review{
    margin-left: 6%;
    margin-right: 25%
  }
  .books-review-hd {
    float: left;
    width: 100px;
  }
  .books-review-bd {
    padding-left: 120px;
  }
  .books-review-bd .books-review-meta {
    color: #666;
    padding: 8px 0;
  }
  .books-review-bd .books-review-content {
    line-height: 20px;
    padding: 5px 0;
  }
  .books-review-user{
  float: left;
  margin-right: 10px
  }
  .books-review-divider{
  margin: 50px 0;
  }
  .books-most-review-title{
  margin: 50px 0;
  }
  .books-view-title-link{
  margin-left: 20px
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
