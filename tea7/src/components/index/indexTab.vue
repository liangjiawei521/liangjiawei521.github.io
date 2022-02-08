<template>
  <div class="index-tab">
 

      <div class="nav" >
      <ul class="swiper-wrapper" >
        <router-link tag="li" to="/index/recommend">推荐</router-link>
        <router-link tag="li" to="/index/jjm">金骏眉</router-link>
        <router-link tag="li" to="/index/dhp">大红袍</router-link>
        <router-link tag="li" to="/index/tgy">铁观音</router-link>
        <router-link tag="li" to="/index/lc">绿茶</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" >
.index-tab{
    z-index:10;
    background: #fff;
    position: fixed;
    top:0.88rem;
    left:0;
    width:7.5rem;
    height:0.88rem;
    // border:1px solid black;
    ul {
        display:flex ;
        justify-content:space-between;
        align-items: center;
        height:0.88rem;
        li{
            padding:0.22rem;
        }

    }
}
.swiper-wrapper .router-link-active {
  color: #B0352f;
  border-color: #B0352f;
  border-bottom: 2px solid #B0352f;
}
</style>