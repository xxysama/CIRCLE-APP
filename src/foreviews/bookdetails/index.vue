<template>
  <el-row :gutter="24">
    <el-container>
        <el-main>
            <div>
            <h2>图书名称</h2>
            </div>
            <div class="book-info-container">
                <div class="book-img">
                    <el-image style="width: 135px; height: 200px" ></el-image>
                </div>
                <div class="book-info">
                    <p>作者:</p>
                    <p>原作名:</p>
                    <p>出版年</p>
                    <p>页数</p>
                    <p>定价</p>
                    <p>ISBN</p>
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
                <p>这本乔布斯唯一授权的官方传记，在2011年上半年由美国出版商西蒙舒斯特对外发布出版消息以来，备受全球媒体和业界瞩目，这本书的全球出版日期最终确定为2011年11月21日，简体中文版也将同步上市。

两年多的时间，与乔布斯40多次的面对面倾谈，以及与乔布斯一百多个家庭成员、 朋友、竞争对手、同事的不受限的采访，造就了这本独家传记。

尽管乔布斯给予本书的采访和创作全面的配合，但他对内容从不干涉，也不要求出版前阅读全文的权利。对于任何资源和关联的人，他都不设限，甚至鼓励他所熟知的人袒露出自己的心声。

“我已经做了很多并不值得自豪的事情，比如23岁时就让我的女友怀了孕，以及我对这件事的处理方式”，他说， “对我而言，没有什么不可以对外袒露的。”

谈及和他共过事的人以及竞争对手，他直言不讳，甚至尖酸刻薄。他的激情、精力、欲望、完美主义、艺术修养、残暴还有对掌控权的迷恋塑造出的商业哲学一览无余。

同样，他的朋友、敌人，还有同事得以为我们提供了一个前所未有的毫无掩饰的视角。

他是一位极具创造力的企业家，他有如过山车般精彩的人生和犀利激越的性格，充满追求完美和誓不罢休的激情，他创造出个人电脑、动画电影、音乐、手机、平板电脑以及数字出版等6大产业的颠覆性变革。

乔布斯的个性经常让周围的人愤怒和绝望，但其所创造出的产品也与这种个性息息相关，全然不可分割的，正如苹果的硬件和软件一样。

他的故事既具有启发意义，又有警示意义，充满了关于创新、个性、领导力以及价值观的教益。</p>
            </div>
        <div class="author-info-container">
            <h3 style="color:#007722">作者简介</h3>
            <el-divider></el-divider>
            <div class="author-info">
                <p>
                    作者：沃尔特·艾萨克森历任美国有线电视新闻网（CNN）董事长和《时代周刊》总编，他的作品包括畅销书《爱因斯坦传》，《本杰明·富兰克林传》以及《基辛格传》
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
    showComments () {
      this.commentsShow = !this.commentsShow
    }
  },

  mounted () {
    this.bid = this.$route.params.bid
    console.log('当前书籍' + this.bid)
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
