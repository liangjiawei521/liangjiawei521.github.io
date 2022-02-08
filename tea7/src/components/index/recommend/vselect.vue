<template>
  <!-- 专题优选 -->
 
  
  <div class="v-select">
    <h2>专题优选</h2>
      <swiper >
    <swiper-slide>
      <img src="http://img.tea7.com/0149491_0.jpeg?x-oss-process=image/resize,w_720">
    </swiper-slide>
    <swiper-slide><img src="http://img.tea7.com/0013098_0.jpeg?x-oss-process=image/resize,w_720"></swiper-slide>
    <swiper-slide><img src="http://img.tea7.com/0013101_0.jpeg?x-oss-process=image/resize,w_720"></swiper-slide>
  </swiper>
  
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
 swiperOptions: {
        loop: true,
        speed: 2000,
          slidesPerView : 2, 
         freeMode: {
      enabled: true,
    },
        autoplay: {
          delay: 3000,
    //    freeMode:true,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        }
 },
    components: {
      swiper,
      swiperSlide,
    },

  };
</script>

<style lang="scss" scoped>
.v-select{
  background:#fff;
   h2{
     font-size: 0.4rem;
     text-align: center;
     padding:0.4rem 0;
   }
}
.swiper-slide{
      width:7rem;
      height:3rem;
    
      overflow: hidden;
      margin-bottom: 0.4rem;
    img{
       margin-left:0.25rem;
      width:7rem;
      height:3rem;
    }
}
</style>