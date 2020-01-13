<template>
  <el-row :gutter="24">
  <el-container>
  <el-main>
    <div>
      <h2>发个动态</h2>
    </div>
    <el-card class="dynamic-card">
      <div slot="header" class="clearfix">
        <el-input
          type="textarea"
          placeholder="分享生活点滴..."
          v-model="dynamicText"
          maxlength="200"
          show-word-limit
        >
        </el-input>
      </div>
      <div class="send-picture">
        <el-upload
          class=""
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          :auto-upload="false"
          list-type="picture-card">
          <i class="el-icon-plus"></i>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="60%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <div class="dynamic-bottom">
          <el-button>发布</el-button>
      </div>
    </el-card>

    <h3>好友动态</h3>
    <el-divider></el-divider>

    <div class="dynamic" v-for="i in 4" :key="i">
      <div class="dynamic-hd">
        <span><el-avatar shape="square" :size="60" :src="dyAvatar"></el-avatar></span>
      </div>
      <div class="dynamic-bd">
        <el-link :underline="false" style="font-size:20px">用户名称</el-link>
        <div class="dynamic-meta">

        </div>
        <div class="dynamic-content">
          创作这部作品的契机，在于一次相谈甚欢的约稿。可等到头脑冷静下来，我心里叫苦不迭。这只怕是我见过最简洁的选题了，没有类型，没有梗概，没有构想，没有时间节点……有的只是“徐霞客”三个字，以及几个关于他...
        </div>
        <div class="dy-picture-container">
           <img class="dy-picture" v-for="fl in fileList" :key="fl.name" style="width: 100px; height: 100px" :src="fl.url">
        </div>
      </div>
      <div class="dynamic-footer">
        <time class="time">1月13日</time>
        <el-badge :value="66" :max="99" class="comments-item" type="primary">
          <el-button type="text" size="small" @click="showComments">评论</el-button>
        </el-badge>
        <el-badge :value="200" :max="99" class="thumb-up-item">
          <el-button type="text" size="small">点赞</el-button>
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
  </el-main>
  <el-aside width="25%">
    <div class="dynamic-aside">
    <h3>热门标签</h3>
    <div class="dynamic-tag-container">
      <el-tag><a class="tag-link" href="#">标签一</a></el-tag>
      <el-tag type="success"><a class="tag-link" href="#">标签二</a></el-tag>
      <el-tag type="info"><a class="tag-link" href="#">标签三</a></el-tag>
      <el-tag type="warning"><a class="tag-link" href="#">标签四</a></el-tag>
      <el-tag type="danger"><a class="tag-link" href="#">标签五</a></el-tag>
      <el-tag type=""><a class="tag-link" href="#">标签六</a></el-tag>
      <el-tag type="success"><a class="tag-link" href="#">标签七</a></el-tag>
      <el-tag type="info"><a class="tag-link" href="#">标签八</a></el-tag>
    </div>
    <h3>本周热门</h3>
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
      dynamicText: '',
      dyAvatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: [
        { name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        { name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }],
      commentsShow: false

    }
  },
  components: {

  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    showComments () {
      this.commentsShow = !this.commentsShow
    }
  }

}
</script>

<style>
  .dynamic-bottom{
    float: right;
    margin: 8px auto
  }
  .dynamic-card{
    margin-bottom: 60px
  }

  .el-container {
    margin-left: 5%
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

  .dynamic-hot-review{
    margin-left: 6%;
    margin-right: 25%
  }
  .dynamic-hd {
    float: left;
    width: 100px;
  }
  .dynamic-bd {
    padding-left: 100px;
  }
  .dynamic-bd .dynamic-meta {
    color: #666;
    padding: 8px 0;
  }
  .dynamic-bd .dynamic-content {
    line-height: 20px;
    padding: 5px 0;
  }
  .dynamic-user{
  float: left;
  margin-right: 10px
  }
  .dynamic--divider{
  margin: 50px 0;
  }

  /*aside 侧边 样式*/
  .dynamic-aside{
    margin-left: 70px;
    margin-right: 40px;
  }
  .dynamic-tag-container{
    margin-bottom: 50px;
  }

</style>

<style scoped>
  .dy-picture {
    margin-top: 20px;
    margin-right: 15px;
    border-radius: 5px
  }
  .dynamic-footer{
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
