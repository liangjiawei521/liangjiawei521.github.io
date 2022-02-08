<template>
  <div>
  <set-top/>
  <index-tab/>
<!-- 二级路由出口 -->

<div class="box">
  <transition :name="transitionName">
  <router-view></router-view>
  </transition>
</div>

  <vfooter/>
  </div>
</template>

<script>
import vfooter from '../components/common/vfooter.vue'
import IndexTab from '../components/index/indexTab.vue'
import SetTop from '../components/index/setTop.vue'
export default {
  data(){
    return{
      transitionName:''
    }
  },
  components: { vfooter, SetTop, IndexTab },
   watch:{
     $route:{
       handler(to,from){
         let arr= ['/recommend','/jjm','/dhp','/lc']
         console.log(to,from)
         if(arr.indexOf(to.fullPath)>arr.indexOf(from.fullPath)){
         this.transitionName='toLeft'        
         }else{
           this.transitionName='toRight'
       }
       }
     }
   }
}
</script>

<style lang="scss" scoped>
.box{
  position: absolute;
  left:0;
  right:0;
  top:1.76rem;
 bottom: 1.6rem;
  overflow-x: hidden;
  overflow-y: auto;
}
.toLeft-enter{
  transform: translate(100%,0);
}
.toLeft-enter-active,
.toLeft-leave-active{
  transition: all 1s;
}
.toLeft-leave-to{
  transform: translate(-100%,0);
}

.toRight-enter{
  transform: translate(-100%,0);
}
.toRight-enter-active,
.toRight-leave-active{
  transition: all 1s;
}
.toRight-leave-to{
  transform: translate(100%,0);
}
</style>