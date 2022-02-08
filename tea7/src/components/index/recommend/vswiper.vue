<template>
  <div class="wrapper">
    <swiper ref="mySwiper" v-bind:options="swiperOptions" v-if="imgData.length>0">
      <swiper-slide v-for="(item, index) in imgData" v-bind:key="index">
          <img :src="item">
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
      <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
data() {
    
    return {
        imgData:[],
      swiperOptions: {
        loop: true,
        speed: 2000,
        autoplay: {
          delay: 3000,

          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("http://localhost:3000/imgData").then((res) => {
        this.imgData = res.data;
        console.log(res);
      });
    },
  },
  components: {
    swiper,
    swiperSlide,
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
        // background: #f00;
        width:7.5rem;
   }
.swiper-slide {
    width:7.5rem;
    height: 3.7rem;
     img{
         width:7.5rem;
        height: 3.7rem; 
        }
   }
</style>