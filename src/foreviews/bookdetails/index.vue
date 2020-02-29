<template>
  <el-row :gutter="24">
    <el-container>
        <el-main>
            <div>
              <h2>图书名称</h2>
            </div>
            <div class="book-info-container" :v-model="bookItem">
                <div class="book-img">
                    <img :src='bookItem.imgSrc' style="width: 135px; height: 200px" >
                </div>
                <div class="book-info">
                    <p>作者：{{bookItem.author}}</p>
                    <p>原作名：{{bookItem.bookName}}</p>
                    <p>出版商：{{bookItem.publisher}}</p>
                    <p>出版年：{{bookItem.publishTime}}</p>
                    <!-- <p>页数：</p> -->
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
                <div class="my-rate">
                  <h5>我的评分：</h5>
                  <span @click="dialogWriteComment = true">
                    <el-rate
                      v-model="myRate"
                      show-text>
                    </el-rate>
                  </span>
                </div>
            </div>

            <div class="book-opertation">
              <span><el-link :underline = "false" icon="el-icon-edit" @click="dialogWriteComment = true">写书评</el-link></span>
              <span style="margin-left:50px;margin-right:50px"><el-link :underline = "false" icon="el-icon-star-on">加入收藏夹</el-link></span>
              <span><el-link :underline = "false" icon="el-icon-share">分享</el-link></span>
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
            <el-col :span="4" v-for="(item,i) in randBookList" :key="i">
                <el-card :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(item)">
                    <img :src='item.imgSrc' style="height: 200px;width: 135px;">
                    <div style="padding: 8px;">
                    <el-link :underline="false" href="#">{{item.bookName}}</el-link>
                    </div>
                </el-card>
            </el-col>
        </div>

        <div class="book-comments">
            <h3 style="color:#007722">短评</h3>
            <el-divider></el-divider>
            <div class="book-comments" v-for="(comment, i) in commentsList" :key="i">
            <div class="book-comments-hd">
                <span><el-avatar shape="square" :size="60" :src="dyAvatar"></el-avatar></span>
            </div>
            <div class="book-comments-bd">
                <el-link :underline="false" style="font-size:20px">{{comment.userName}}</el-link>
                <div class="book-comments-meta">

                </div>
                <div class="book-comments-content">
                   <p style="text-indent:25px;">
                     {{comment.content}}
                  </p>
                </div>
            </div>
            <div class="book-comments-footer">
                <time class="time">{{comment.commentsTime}}</time>
                <el-badge :value="comment.replyCount" :max="99" class="comments-item" type="primary">
                <el-button type="text" size="small" @click="showComments">评论</el-button>
                </el-badge>
                <el-badge :value="comment.likeNum" :max="999" class="thumb-up-item">
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

        <!--短评弹窗 -->
        <el-dialog :close-on-click-modal= false :close-on-press-escape= false title="写短评" :visible.sync="dialogWriteComment">
          <div style="margin-top:-30px">
            <h2 :v-model="bookItem">{{bookItem.bookName}}</h2>
          </div>
          <div style="margin-bottom:20px">
            <el-rate
              v-model="myRate"
              show-text>
            </el-rate>
          </div>
          <h3>简评</h3>
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            maxlength="200"
            placeholder="请输入内容"
            v-model="commentText"
            show-word-limit>
          </el-input>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="submitComment">保 存</el-button>
          </div>
        </el-dialog>

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
  inject: ['routerRefresh'], // 在子组件中注入在父组件中出创建的属性
  data () {
    return {
      bid: '',
      bookItem: '',
      randBookList: [],
      bookRate: 3.7,
      dyAvatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      commentsShow: false,
      myRate: null,
      dialogWriteComment: false,
      commentText: '',
      commentsList: ''

    }
  },
  components: {
  },

  methods: {
    openbook (item) {
      this.$router.push({ path: '/books/' + item.bookId })
      this.routerRefresh()
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

    getRandBookds (bid) {
      var _this = this
      this.$axios.get('book/rand5/' + this.bid)
        .then(response => {
          console.log(response.data)
          _this.randBookList = response.data
          console.log('测试获取' + _this.bookItem)
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    // 提交短评
    submitComment () {
      var _this = this
      this.$axios.post('comments/submit/book', {
        topicId: _this.bookItem.bookId,
        fromUid: _this.$store.state.user.userId,
        content: _this.commentText
      })
        .then(response => {
          console.log(response.data)
          if (response.data.code === '200') {
            this.$notify({
              title: '成功',
              message: response.data.msg,
              type: 'success'
            })
            _this.dialogWriteComment = false
          }

          // 提交失败
          if (response.data.code === '501') {
            this.$notify.error({
              title: '错误',
              message: response.data.msg
            })
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    // 加载评论
    loadComments (bid) {
      var _this = this
      this.$axios.get('comments/book/' + bid)
        .then(response => {
          console.log(response.data)
          _this.commentsList = response.data
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
    this.getRandBookds(this.bid)
    this.loadComments(this.bid)
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
        height: 250px;
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

    .book-opertation{
        margin-left: 65%;
        height: 40px;
        padding-top: 10px;
    }

    .my-rate{
        float: right;
        width: 150px;
        margin-right: 8%;
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
