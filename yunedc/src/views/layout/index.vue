<template>
<div class="layout">
  <el-container>
    <!-- 侧边栏 -->
    <el-aside>
      <nav-menu :collapse="collapse"/>
    </el-aside>
    <!-- 右侧内容 -->
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <v-header @toggle="toggle"/>
      </el-header>
      <!-- 主体内容 -->
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
  </div>
</template>

<script>
import NavMenu from "./navMenu";
import VHeader from "./vHeader";
export default {
  components: { NavMenu, VHeader },
  created(){
    // console.log('layout');
  },
  data(){
    return {
      collapse: false
    }
  },
  methods: {
    toggle(){
      this.collapse = !this.collapse
    }
  }
};
</script>

<style lang="scss" scoped>

.layout {
  height:100%
}
.el-container {
  height: 100%;
  margin-bottom: 40px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  height:150px !important;
}

.el-aside {
  background-color:  rgb(84, 92, 100);
  color: #333;
  width:auto !important;
  &.active{
    width:200px !important;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  position:relative;
}
</style>

