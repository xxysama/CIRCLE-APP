<template>
  <el-row :gutter="24">
    <el-container>
        <el-main>
            <div>
              <h2>电影名称</h2>
            </div>
            <div class="movie-info-container">
                <div class="movie-img">
                    <el-image style="width: 135px; height: 200px" ></el-image>
                </div>
                <div class="movie-info">
                    <p>导演:</p>
                    <p>编剧:</p>
                    <p>主演</p>
                    <p>类型</p>
                    <p>语言</p>
                    <p>上映时间</p>
                    <p>时长</p>
                </div>
                <div class="movie-rate">
                    <p>圈友评分</p>
                    <h1>8.5</h1>
                    <el-rate
                        v-model="movieRate"
                        disabled
                        text-color="#ff9900"
                        >
                    </el-rate>
                    <div v-for="i in 5" :key="i">
                        <div class="movie-rate-star">{{i}}星</div>
                        <el-progress class="movie-rate-progress" color="#ffd596" :text-inside="true" :stroke-width="14" :percentage="60.5"></el-progress>
                    </div>
                </div>
            </div>
            <h3 style="color:#007722">剧情简介</h3>
            <el-divider></el-divider>
            <div class="movie-content">
                <p>一位未来的工薪阶层父亲反复梦到被未知力量摧毁。当他的噩梦开始影响自己与家人的关系时，他便很快意识到，外星人的无情攻击开始摧毁地球，而这些噩梦也许是骇人现实的关键线索。随着入侵者一波又一波的凌厉攻击，他必须寻找保护家人的力量，并弄清自己的真实身份。</p>
            </div>

            <div class="same-author-movies">
                <h3 style="color:#007722">演员列表</h3>
                <el-divider></el-divider>
                <el-col :span="4" v-for="item in 5" :key="item">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(item)">
                        <img src='../../assets/books/baiyexing.jpg' class="img">
                        <div style="padding: 8px;">
                          <el-link :underline="false" href="#">{{item}}</el-link>
                          饰xxx
                        </div>
                    </el-card>
                </el-col>
            </div>

            <div class="stage-photos-container">
                <h3 style="color:#007722">剧照</h3>
                <el-divider></el-divider>
                <el-col :span="4" v-for="item in 5" :key="item">
                <img
                  style="width: 100px; height: 100px"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  >
                </el-col>
            </div>

        <div class="movie-comments">
            <h3 style="color:#007722">短评</h3>
            <el-divider></el-divider>
            <div class="movie-comments" v-for="i in 4" :key="i">
            <div class="movie-comments-hd">
                <span><el-avatar shape="square" :size="60" :src="dyAvatar"></el-avatar></span>
            </div>
            <div class="movie-comments-bd">
                <el-link :underline="false" style="font-size:20px">用户名称</el-link>
                <div class="movie-comments-meta">

                </div>
                <div class="movie-comments-content">
                创作这部作品的契机，在于一次相谈甚欢的约稿。可等到头脑冷静下来，我心里叫苦不迭。这只怕是我见过最简洁的选题了，没有类型，没有梗概，没有构想，没有时间节点……有的只是“徐霞客”三个字，以及几个关于他...
                </div>
            </div>
            <div class="movie-comments-footer">
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
            <div class="movie-aside">
            <h3>电影标签</h3>
            <div class="movie-tag-container">
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
      movieRate: 3.7,
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
    .movie-aside{
    margin-left: 70px;
    margin-right: 40px;
  }
   .movie-tag-container{
    margin-bottom: 50px;
  }
    .movie-img{
        float: left;
        margin-right: 10px
    }
    .movie-info-container{
        clear: both;
        height: 300px;
    }
    .movie-info{
        float: left;
        width: 30%;
        font-size: 13px;
        margin-right: 10px
    }
    .movie-rate{
        width: 20%;
        float: left;
        font-size: 13px;
    }
    .movie-rate-progress{
        margin: 4px 0;
    }
    .movie-rate-star{
        margin-right: 5px;
        float: left;
    }
    .movie-rate /deep/ .el-progress-bar{
        width: 80%
    }
    .movie-content{
        margin-bottom: 40px
    }
    .same-author-movies /deep/ .el-divider--horizontal{
        margin-bottom:  0
    }
    .same-author-movies{
        height: 300px;
        margin-bottom: 40px
    }
    .movie-comments-hd {
        float: left;
        width: 100px;
    }
    .movie-comments-bd {
        padding-left: 100px;
    }
    .movie-comments-bd .movie-comments-meta {
        color: #666;
        padding: 8px 0;
    }
    .movie-comments-bd .movie-comments-content {
        line-height: 20px;
        padding: 5px 0;
    }
    .movie-comments-user{
    float: left;
    margin-right: 10px
    }
    .movie-comments--divider{
    margin: 50px 0;
    }
    .movie-comments-footer{
        margin-top: 40px;
        margin-left: 100px
    }
    .comments-item{
        margin: 0 40px
    }
    .comments-details{
        margin-left: 100px
    }
    .stage-photos-container{
      height: 200px;
    }
</style>
