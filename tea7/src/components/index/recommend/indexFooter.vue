<template>
  <div class="m-footer">
    <div class="m-footertxt">到底啦，您还可以看看这里</div>
    <div class="m-footerbtn">
      <span>更多茶叶</span>
      <span>更多茶具</span>
    </div>
    <div class="m-footertxt">Copyright 2016,茶七网 TEA7.com</div>
    <div class="m-footertxt">服务时间：08:30-21:00 客服热线：400-993-513</div>
    <div class="m-footertxt">备案号<span>闽ICP备14011677号-2</span></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.m-footer {
  padding: 18px 0 0;
  font-size: 0.22rem;
  .m-footertxt{
    text-align: center;
    color: #999;
    margin-top:0.28rem;
    span{
        color:#000;
    }
}
.m-footerbtn{
    display: flex;
    justify-content: center;
    align-items: center;
    span{
    padding: 5px 15px;
    background: #fff;
    border: 1px solid #cccccc;
    border-radius: 50px;
    margin: 15px 0.6rem;
    }
}
  
}
</style>