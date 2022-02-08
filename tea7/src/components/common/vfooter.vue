<template>
 <div class="footer">
    <router-link tag="p" to="/index">
      <div>
           <i class="iconfont icon-shouye icon1"></i>
      <i class="iconfont icon-shouye-shouye icon2"></i>
        <div>首页</div>
      </div>
    </router-link>
    <router-link tag="p" to="/category">
 <i class="iconfont icon-icon icon1"></i>
      <i class="iconfont icon-fenlei icon2"></i>
      <div>分类</div></router-link
    >
    <router-link tag="p" to="/teamaster">
     <i class="iconfont icon-chaye icon1"></i>
      <i class="iconfont icon-chaye1 icon2"></i>
      <div>大师茶</div></router-link
    >
    <router-link tag="p" to="/cart">
      <i class="iconfont icon-gouwuche icon1"></i>
      <i class="iconfont icon-shouye1 icon2"></i>
      <div>购物车</div></router-link
    >
    <router-link tag="p" to="/customer">
      <i class="iconfont icon-wode1 icon1"></i>
      <i class="iconfont icon-wode icon2"></i>
      <div>我的</div></router-link
    >
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-around;
  position: fixed;
  width: 7.5rem;
  height: 1.04rem;
  background-color: #fff;
  box-shadow: 1px 1px 5px #aaa;
  // border:1px solid #aaa;
  left: 0;
  bottom: 0;
  font-size: 0.28rem;
  color: #999;
  .iconfont{
      font-size: 0.48rem;
  }
  .icon1 {
    display: block;
  }
  .icon2 {
    display: none;
  }
}
.router-link-active {
  color: #b0352f;
  .icon1 {
    display: none;
  }
  .icon2 {
    display: inline-block;
  }
}
.footer p {
  display: block;
  height: 1.04rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>