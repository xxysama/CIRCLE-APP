<template>
  <el-row :gutter="24">
    <el-container>
        <el-main>
          <el-col :span="6" :offset="1">
          <el-tag type="success"
            effect="dark">
            书籍
          </el-tag>
            <div class="infinite-list-wrapper" style="overflow:auto">
              <ul
                class="list"
                v-infinite-scroll="load"
                infinite-scroll-disabled="disabled">
                <li v-for="i in count" class="list-item" :key="i">{{ i }}</li>
              </ul>
              <p v-if="loading" align="center">加载中...</p>
              <p v-if="noMore" align="center">没有更多了</p>
            </div>
          </el-col>
          <el-col :span="6" :offset="1">
            <el-tag class="classify-tag"
              effect="dark">
              电影
            </el-tag>
            <div class="infinite-list-wrapper" style="overflow:auto">
              <ul
                class="list"
                v-infinite-scroll="load"
                infinite-scroll-disabled="disabled">
                <li v-for="i in count" class="list-item" :key="i">{{ i }}</li>
              </ul>
              <p v-if="loading" align="center">加载中...</p>
              <p v-if="noMore" align="center">没有更多了</p>
            </div>
          </el-col>
          <el-col :span="6" :offset="1">
          <el-tag type="warning" effect="dark">
            圈子
          </el-tag>
            <div class="infinite-list-wrapper" style="overflow:auto">
              <ul
                class="list"
                v-infinite-scroll="load"
                infinite-scroll-disabled="disabled">
                <li v-for="i in count" class="list-item" :key="i">{{ i }}</li>
              </ul>
              <p v-if="loading" align="center">加载中...</p>
              <p v-if="noMore" align="center">没有更多了</p>
            </div>
          </el-col>
        </el-main>
    </el-container>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      count: 10,
      loading: false
    }
  },
  computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  components: {
  },

  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
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

  .el-container {
    margin-left: 5%
  }

</style>

<style lang="scss" scoped>
    .list .list-item {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      background: #e8f3fe;
      margin: 10px;
      color: #7dbcfc;
  }
</style>
