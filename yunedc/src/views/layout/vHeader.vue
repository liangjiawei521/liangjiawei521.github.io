<template>
  <div class="v-header">
    <p @click="toggle">
      <i class="el-icon-s-unfold" v-if="collapse"></i>
      <i class="el-icon-s-fold" v-else></i>
    </p>
    <!-- 面包屑 -->
    <h1>面包屑</h1>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in breadcrumbList" :key="item">{{
        item
      }}</el-breadcrumb-item>
    </el-breadcrumb>
    <hr>
    <!-- tab标签页 -->
    <v-tabs />
    <el-button @click="quit" type="primary">退出登录</el-button>
  </div>
  
</template>

<script>
import vTabs from "./vTabs.vue";
export default {
  components: { vTabs },
  data() {
    return {
      collapse: true,
      breadcrumbList: [],
    };
  },
  methods: {
    toggle() {
      this.collapse = !this.collapse;
      this.$emit("toggle");
    },
  quit(){
      sessionStorage.removeItem("token");
      // 重载即刷新，此时从路由守卫走，因为没有token,进入login
      window.location.reload();
}
  },
  watch: {
    $route: {
      handler(to, from) {
        // ['学生管理','班级管理',"三级内容"]
        if (to.fullPath == "/home/dashboard") {
          this.breadcrumbList = [];
          return;
        }
        if (to.matched[0].meta.title) {
          this.breadcrumbList = this.$route.matched.map(
            (record) => record.meta.title
          );
        } else {
          this.breadcrumbList = this.$route.matched.slice(1).map((record) => {
            return record.meta.title;
          });
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.v-header{
  position:relative;
}
i {
  font-size: 50px;
}
.el-breadcrumb ::v-deep .el-breadcrumb__separator {
  color: #000 !important;
}
.el-button{
  position:absolute;
  top:30px;
  right:30px;
}
</style>