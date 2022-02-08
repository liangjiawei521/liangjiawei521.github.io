<template>
  <div class="index-header">
      <div class="left">
        <img src="@/assets/images/logo.jpg">
      </div>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜您喜欢的</span>
      </div>
      <div class="right">
        <i class="iconfont icon-erji"></i>
      </div>
      
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.index-header{
  z-index: 10;
  display: flex;
  justify-content: space-between;
  background-color:#b0352f;
  align-items:center;
  width:7.5rem;
  height:0.88rem;
  position: fixed;
  top:0;
  left:0;
  // border:1px solid red;
  .left{
    img{
      width:1.7rem;
      height:0.88rem;
    } 
    }
    .search{
      display: flex;
      align-items: center;
      width:4.9rem;
      height:0.6rem;
      border-radius: 0.3rem;
      background:#fff;
      border:0;
      .iconfont{
        padding:0.2rem;
      }
   
  }
  .right{
     .iconfont{
       font-size:24px;
       color:#fff;
       font-weight: border;
       margin-right:0.1rem;
     }
  }
}
</style>