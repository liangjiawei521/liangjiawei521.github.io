<template>
  <div class="rcommend">
    <!-- 轮播图 -->
    <vswiper />
    <!-- 服务 -->
    <server />
    <!-- 小七推荐 -->
    <div class="m-tuijian">
      <h2>小七推荐</h2>
      <img
        src="http://img.tea7.com/0160209_0.png?x-oss-process=image/resize,w_720"
      />
      <img
        src="http://img.tea7.com/0149845_0.png?x-oss-process=image/resize,w_720"
      />
    </div>
 <!-- 今日特价 -->
 <tejia></tejia>
 <!-- 专题优选 -->
 <vselect/>
 <!-- 爆款推荐 -->
 <popular/>
 <!-- 茶文化 -->
    <div class="m-culture">
      <h2>茶文化</h2>
      <a>
      <div class="cnt">
      <h1>好文精选</h1>
      <span>原创好文都在这</span>
      </div>
      <img
        src="http://imgcon.tea7.com/6363728602845403744544786.jpg"
      />
      </a>
      <a>
      <div class="cnt">
      <!-- <h1>茶叶百科</h1>
      <span>让您喝得更专业</span> -->
      </div>
      <img
        src="http://imgcon.tea7.com/6363728602893842921158290.jpg"
      />
      </a>
    </div>
    <!--猜你喜欢 -->
    <you-like/>
    <!-- 底部 -->
    <index-footer/>
  </div>
</template>

<script>
import vfooter from "../common/vfooter.vue";
import IndexFooter from './recommend/indexFooter.vue';
import Popular from './recommend/popular.vue';
import Server from "./recommend/server.vue";
import Tejia from './recommend/tejia.vue';
import Vselect from './recommend/vselect.vue';
import Vswiper from "./recommend/vswiper.vue";
import YouLike from './youLike.vue';

export default {
  components: { vfooter, Vswiper, Server, Tejia, Vselect, Popular, YouLike, IndexFooter },
};
</script>

<style lang="scss" scoped>
.rcommend {
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  //  bottom:1.6rem;
  overflow-x: hidden;
  overflow-y: auto;
 
  width:7.5rem;
}
.m-tuijian ,.m-culture{
  background: #fff;
  margin-top: 10px;
  width: 7.5rem;
  height: 3.2rem;
  padding-bottom: 0.1rem;
  position: relative;
  h2 {
    font-size: 18px;
    text-align: center;
    padding: 0.2rem;
    margin: 0.2rem;
  }
  img {
    width: 3.6rem;
    height: 2rem;
    margin-left: 0.1rem;
  }
}
.m-culture a .cnt{
position: absolute;
    width:100%;
    height: 1rem;
    left: 0;
    top: 0;
     padding: 1.3rem 0 0 0.3rem;
    box-sizing: border-box;
  h1{
    font-size: 0.4rem;
    color: #333333;
    font-weight: bold;
    display: block;
    padding-bottom: 0.1rem;
  }
  span{
    color: #999999;
    display: block;
  }
}
</style>