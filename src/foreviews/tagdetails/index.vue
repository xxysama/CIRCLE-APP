<template>
 <div style="height:500px">
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <el-menu
        class="categories"
        default-active="0"
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
        <el-button size="small" type="primary" icon="el-icon-search" @click="searchClick">搜索</el-button>
      </div>
    </el-main>
  </el-container>
 </div>
</template>

<script>
export default {
  data () {
    return {
      keywords: ''
    }
  },
  components: {
  },
  methods: {
    // 搜索书籍
    searchClick () {
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
</style>
