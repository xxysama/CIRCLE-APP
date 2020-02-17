<template>
  <el-row :gutter="24">
    <el-container>
        <el-main>
            <div>
            <h2>图书名称</h2>
            </div>
            <div class="book-info-container" :v-model="bookItem">
                <div class="book-img">
                    <el-image :src="bookItem.imgSrc" style="width: 135px; height: 200px" ></el-image>
                </div>
                <div class="book-info">
                    <p>作者：{{bookItem.author}}</p>
                    <p>原作名：{{bookItem.bookName}}</p>
                    <p>出版商：{{bookItem.publishe}}</p>
                    <p>出版年：{{bookItem.publishTime}}</p>
                    <p>页数：</p>
                    <p>ISBN：{{bookItem.isbn}}</p>
                </div>
                <div class="book-rate">
                    <p>圈友评分</p>
                    <h1>8.5</h1>
                    <el-rate
                        v-model="bookRate"
                        disabled
                        text-color="#ff9900"
                        >
                    </el-rate>
                    <div v-for="i in 5" :key="i">
                        <div class="book-rate-star">{{i}}星</div>
                        <el-progress class="book-rate-progress" color="#ffd596" :text-inside="true" :stroke-width="14" :percentage="60.5"></el-progress>
                    </div>
                </div>
            </div>
            <h3 style="color:#007722">内容简介</h3>
            <el-divider></el-divider>
            <div class="book-content">
                <p style="text-indent:25px;">
                    {{bookItem.bookIntroduction}}
                </p>
            </div>
        <div class="author-info-container">
            <h3 style="color:#007722">作者简介</h3>
            <el-divider></el-divider>
            <div class="author-info">
                <p style="text-indent:25px;">
                    {{bookItem.authorIntroduction}}
                </p>
            </div>
        </div>

        <div class="same-author-books">
            <h3 style="color:#007722">同作者书籍</h3>
            <el-divider></el-divider>
            <el-col :span="4" v-for="item in 5" :key="item">
                <el-card :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(item)">
                    <img src='../../assets/books/baiyexing.jpg' class="img">
                    <div style="padding: 8px;">
                    <el-link :underline="false" href="#">{{item}}</el-link>
                    </div>
                </el-card>
            </el-col>
        </div>

        <div class="book-comments">
            <h3 style="color:#007722">短评</h3>
            <el-divider></el-divider>
            <div class="book-comments" v-for="i in 4" :key="i">
            <div class="book-comments-hd">
                <span><el-avatar shape="square" :size="60" :src="dyAvatar"></el-avatar></span>
            </div>
            <div class="book-comments-bd">
                <el-link :underline="false" style="font-size:20px">用户名称</el-link>
                <div class="book-comments-meta">

                </div>
                <div class="book-comments-content">
                创作这部作品的契机，在于一次相谈甚欢的约稿。可等到头脑冷静下来，我心里叫苦不迭。这只怕是我见过最简洁的选题了，没有类型，没有梗概，没有构想，没有时间节点……有的只是“徐霞客”三个字，以及几个关于他...
                </div>
            </div>
            <div class="book-comments-footer">
                <time class="time">1月13日</time>
                <el-badge :value="66" :max="99" class="comments-item" type="primary">
                <el-button type="text" size="small" @click="showComments">评论</el-button>
                </el-badge>
                <el-badge :value="200" :max="9999" class="thumb-up-item">
                <el-button type="text" size="small">有用</el-button>
                </el-badge>
            </div>
            <div>
                <div class="comments-details" v-if="commentsShow">
                    <li v-for="i in 5" :key="i">{{i}}</li>
                    <el-input placeholder="请输入内容" class="input-with-select">
                    <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </div>
            </div>
            <el-divider class="dynamic-divider"></el-divider>
            </div>
            <el-link :underline="false"><i class="el-icon-arrow-right"></i>更多短评</el-link>
        </div>
        </el-main>
        <el-aside width="25%">
            <div class="book-aside">
            <h3>本书标签</h3>
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

            <h3>相关推荐</h3>
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
      bid: '',
      bookItem: '',
      bookRate: 3.7,
      dyAvatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      commentsShow: false

    }
  },
  components: {
  },

  methods: {
    openbook (bid) {
      console.log(bid)
    },

    getBookDetail (bid) {
      var _this = this
      this.$axios.get('book/' + this.bid)
        .then(response => {
          console.log(response.data)
          _this.bookItem = response.data
          console.log('测试获取' + _this.bookItem)
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    showComments () {
      this.commentsShow = !this.commentsShow
    }
  },

  mounted () {
    // 获取书籍信息
    this.bid = this.$route.params.bid
    console.log('当前书籍' + this.bid)
    this.getBookDetail(this.bid)
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
    .book-aside{
    margin-left: 70px;
    margin-right: 40px;
  }
   .book-tag-container{
    margin-bottom: 50px;
  }
    .book-img{
        float: left;
        margin-right: 10px
    }
    .book-info-container{
        clear: both;
        height: 300px;
    }
    .book-info{
        float: left;
        width: 30%;
        font-size: 13px;
        margin-right: 10px
    }
    .book-rate{
        width: 20%;
        float: left;
        font-size: 13px;
    }
    .book-rate-progress{
        margin: 4px 0;
    }
    .book-rate-star{
        margin-right: 5px;
        float: left;
    }
    .book-rate /deep/ .el-progress-bar{
        width: 80%
    }
    .book-content{
        margin-bottom: 40px
    }
    .same-author-books /deep/ .el-divider--horizontal{
        margin-bottom:  0
    }
    .same-author-books{
        height: 300px;
        margin-bottom: 40px
    }
    .book-comments-hd {
        float: left;
        width: 100px;
    }
    .book-comments-bd {
        padding-left: 100px;
    }
    .book-comments-bd .book-comments-meta {
        color: #666;
        padding: 8px 0;
    }
    .book-comments-bd .book-comments-content {
        line-height: 20px;
        padding: 5px 0;
    }
    .book-comments-user{
    float: left;
    margin-right: 10px
    }
    .book-comments--divider{
    margin: 50px 0;
    }
    .book-comments-footer{
        margin-top: 40px;
        margin-left: 100px
    }
    .comments-item{
        margin: 0 40px
    }
    .comments-details{
        margin-left: 100px
    }
</style>
