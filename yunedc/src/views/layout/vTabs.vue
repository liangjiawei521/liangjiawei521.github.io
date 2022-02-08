<template>
  <div class="v-tabs">
      <el-button type="primary" v-for="(item,index) in tabsList" :key="item.path">
          <span class="del" @click="del(index)">x</span>
         <router-link :to="item.path"> {{item.title}}</router-link></el-button>
  </div>
</template>

<script>
export default {
   computed:{
       tabsList(){
           return this.$store.state.tabsList
       }
   },
   methods:{
       del(index){
           this.$store.commit("delTabItem",index)
       }
   }
}
</script>

<style lang="scss" scoped>
.el-button {
    border:1px solid #000;
    position:relative;
    .del{
     position:absolute;
     right:0;
     top:0;
    }
}
</style>