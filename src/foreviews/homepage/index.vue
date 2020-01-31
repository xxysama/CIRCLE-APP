<template>
  <el-row :gutter="24">
    <el-container>
        <el-main>
            <div class="homepage-head">
              <h2>电影名称</h2>
            </div>
            <h3 style="color:#007722">剧情简介</h3>
            <el-divider></el-divider>
            <div class="homepage-content">
                <p>一位未来的工薪阶层父亲反复梦到被未知力量摧毁。当他的噩梦开始影响自己与家人的关系时，他便很快意识到，外星人的无情攻击开始摧毁地球，而这些噩梦也许是骇人现实的关键线索。随着入侵者一波又一波的凌厉攻击，他必须寻找保护家人的力量，并弄清自己的真实身份。</p>
            </div>

            <div class="homepage-seen-movies">
                <h3 style="color:#007722">我看</h3>
                <el-divider></el-divider>
                <el-col :span="4" v-for="item in 5" :key="item">
                    <el-card :body-style="{ padding: '0px' }" shadow="hover" @click.native="openbook(item)">
                        <img src='../../assets/books/baiyexing.jpg' class="img">
                    </el-card>
                </el-col>
            </div>

        <div class="homepage-comments">
            <h3 style="color:#007722">留言板</h3>
            <div class="homepage-comments-input">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4}"
                placeholder="请输入内容"
                v-model="textarea">
              </el-input>
              <el-button>留言</el-button>
            </div>

            <el-divider></el-divider>
            <div class="homepage-comments" v-for="i in 4" :key="i">
            <div class="homepage-comments-hd">
                <span><el-avatar shape="square" :size="60" :src="dyAvatar"></el-avatar></span>
            </div>
            <div class="homepage-comments-bd">
                <el-link :underline="false" style="font-size:20px">用户名称</el-link>
                <div>
                <time class="time">1月13日</time>
                </div>
                <!-- <div class="homepage-comments-meta">
                </div> -->
                <div class="homepage-comments-content">
                    好久不见，近来可好。
                </div>
            </div>
            <div class="homepage-comments-footer">
                  <el-link :underline="false">回访Ta</el-link>
            </div>
            <el-divider class="dynamic-divider"></el-divider>
            </div>
            <el-link :underline="false"><i class="el-icon-arrow-right"></i>更多留言</el-link>
        </div>
        </el-main>
        <el-aside width="25%">
            <div class="homepage-aside">

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
      textarea: ''
    }
  },
  components: {
  },

  methods: {

  },

  mounted () {

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
    .homepage-aside{
    margin-left: 70px;
    margin-right: 40px;
  }

    .homepage-content{
        margin-bottom: 40px
    }
    .homepage-seen-movies /deep/ .el-divider--horizontal{
        margin-bottom:  0
    }
    .homepage-seen-movies{
        height: 300px;
        margin-bottom: 40px
    }
    .homepage-comments-hd {
        float: left;
        width: 100px;
    }
    .homepage-comments-bd {
        padding-left: 100px;
    }
    .homepage-comments-content {
        margin-top: 8px;
    }
    .homepage-comments-bd .homepage-comments-meta {
        color: #666;
        padding: 8px 0;
    }
    .homepage-comments-bd .homepage-comments-content {
        line-height: 20px;
        padding: 5px 0;
    }
    .homepage-comments-user{
    float: left;
    margin-right: 10px
    }
    .homepage-comments--divider{
    margin: 50px 0;
    }
    .homepage-comments-footer{
        margin-left: 100px
    }
    .comments-item{
        margin: 0 40px
    }
    .comments-details{
        margin-left: 100px
    }
</style>
