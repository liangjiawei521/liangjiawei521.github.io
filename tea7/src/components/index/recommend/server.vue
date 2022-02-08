<template>
  <div class="server">
    <ul class="m-nav">
        <a>
      <li>
        <img src="http://imgcon.tea7.com/6363743876200428263577206.png" />
        <span>自饮茶</span>
      </li>
        </a>
      <li>
          <img src="http://imgcon.tea7.com/6363743876164490164235224.png">
      <span>茶具</span>
      </li>
      <li>
          <img src="http://imgcon.tea7.com/6363743876136364412448843.png">
      <span>自饮茶</span>
      </li>
      <li>
          <img src="http://imgcon.tea7.com/6363743876147303652949610.png">
      <span>领福利</span>
      </li>
      <li>
          <img src="http://imgcon.tea7.com/6366085324327706652770939.png">
      <span>官方验证</span>
      </li>
    </ul>
    <div class="headline">
        <div class="caption">
            <img src="http://imgcon.tea7.com/6363726507138286614601463.png">
        </div>
        <div class="content">
             <div class="wrapper">
    <swiper ref="mySwiper" v-bind:options="swiperOptions" >
      <swiper-slide>
          重要公告:|真伪客服验证功能上线
      </swiper-slide>
      <swiper-slide>
      岩茶为什么不提春茶概念？
      </swiper-slide>
    </swiper>
  </div>
        </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  data() {
    return {
      cellsData: [],
      swiperOptions: {
        direction: "vertical",
        height:20,
        loop: true,
        speed: 1000,
        autoplay: {
        //   delay: 3000,

          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
      },
    };
  },
components: {
    swiper,
    swiperSlide,
  }
};
</script>

<style lang="scss" scoped>
.server{
   background: #fff;
}
.m-nav{
  
    display: flex;
    justify-content:space-around;
    align-items: center;
    padding:.3rem;
    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        // padding:0.1rem;
        img{
            width:0.75rem;
            height:0.75rem;
           
            margin:0.2rem .1rem;
        }
    }
}
.headline{
 
    display: flex;
    align-items: center;
  width:7.5rem;
  height:0.75rem;
  // padding:0.3rem;
  border-top: 1px solid #f3f3f3;
 
  
    img{
 width:1.5rem;
    height:0.36rem;
    margin:0 0.3rem
    }
   
}
.swiper-container{
  height:0.36rem;
}
::v-deep .swiper{
     overflow: hidden;
    width:0.36rem;
}
</style>