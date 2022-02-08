<template>
  <div class="customer">
    <div class="header">
     <div class="bd">
      <router-link tag="div" to="/index/recommend">
        <i class="iconfont icon-back"></i>
      </router-link>
      <div class="search">
      </div>
      <i class="iconfont icon-shouye"></i>
    </div>
    <div class="nologo">
      <a>登录/注册</a>
    </div>
    </div>
    <!-- 个人中心 -->
    <div class="mytea_item">
      <h1>个人中心</h1>
      <ul>
        <li>
          <a>
          <i class="iconfont icon-pintuan"> </i>
            <span>
              我的拼团
            </span>
         
          </a>
        </li>
        <li>
          <a>
          <i class="iconfont icon-taojinbi"> </i>
            <span>
              我的币茶
            </span>       
          </a>
        </li>
        <li>
          <a>
          <i class="iconfont icon-shoucang"> </i>
            <span>
              我的收藏
            </span>
         
          </a>
        </li>
        <li>
          <a>
          <i class="iconfont icon-dizhi"> </i>
            <span>
              地址管理
            </span>
         
          </a>
        </li>
      </ul>
     </div>
     <!-- 优惠福利 -->
        <div class="mytea_item">
      <h1>优惠福利</h1>
      <ul>
        <li>
          <a>
          <i class="iconfont icon-youhuijuan"> </i>
            <span>
              优惠卷
            </span>
          </a>
        </li>
        <li>
          <a>
          <i class="iconfont icon-jinbi"> </i>
            <span>
              茶币商城
            </span>  
          </a>
        </li>
      </ul>
     </div>
       <!-- 专属福利 -->
        <div class="mytea_item">
      <h1>专属福利</h1>
      <ul>
        <li>
          <a>
          <i class="iconfont icon-erji"> </i>
            <span>
              我的客服
            </span>
          </a>
        </li>
        <li>
          <a>
          <i class="iconfont icon-gongkaiyijianxiang"> </i>
            <span>
              意见箱
            </span>  
          </a>
        </li>
        <li>
          <a>
          <i class="iconfont icon-woyaojiaru"> </i>
            <span>
              加入茶师
            </span>  
          </a>
        </li>
      </ul>
     </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header{
   background:url("http://m.tea7.com/Themes/Mobile/images/IntegralShop/cbtopbg.jpg");
}
.bd {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.88rem;
  line-height: 0.88rem;
  color: #fff;
  .iconfont {
    font-size: 0.48rem;
  }
}
.search {
  display: flex;
  align-items: center;
  border-radius: 30px;
  box-sizing: border-box;
  width: 80%;
  height: 0.6rem;
  border: 0;
}
.nologo{
  height:2.24rem;
  display: flex;
   justify-content:center;
   align-items: center;
    box-sizing: border-box;
  a{
    display: block;
    background: rgba(255, 181, 0, 0.9);
    width:2rem;
    height:0.6rem;
    line-height: 0.6rem;
    text-align: center;
    color: #fff;
    border-radius: 5px;

  }
}
.mytea_item{
  margin-bottom:0.2rem ;
  background: #fff;
  h1{
    height: 44px;
    line-height: 44px;
    padding: 0 12px;
    position: relative;
    color: #9e9e9e;
  }  
}
 .mytea_item ul li
   {
    border-top: 1px solid #e3e5e9;
 
 a {
   display: flex;
   align-items: center;
   .iconfont{
   height: 100%;
    display: table-cell;
    padding-right: 10px;
    line-height: 44px;
    vertical-align: top;
    color:#ff7e45;
    font-size: 0.4rem;
    padding-left: 0.2rem;
  }
 span{
    position: relative;
    vertical-align: middle;
    padding-right: 10px;
    -webkit-box-flex: 1;
    flex: 1;
    display: block;
 }
 }
   }

  .mytea_item ul li a  span::before{
    content: "";
    position: absolute;
    right: 0.32rem;
    top: 50%;
    width: 0.2rem;
    height: 0.2rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotateZ(135deg);
    }
</style>