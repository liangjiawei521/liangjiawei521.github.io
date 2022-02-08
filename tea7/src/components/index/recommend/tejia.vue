<template>
  <!-- 今日特价 -->
  <div class="m-tejia">
    <h2 class="floortitle"><i class="iconfont icon-naozhong"></i>今日特价</h2>
    <div class="tj-bd">
      <div class="time">
        <div class="tit">距开始:</div>
        <div class="timebox">
          <span class="hours-show">01</span>
        </div>
        <div class="timebox">
          <span class="minute-show">01</span>
        </div>
        <div class="timebox">
          <span class="second-show">01</span>
        </div>
      </div>
      <div class="tj-product">
        <img
          src="http://img.tea7.com/0003481_0.jpeg?x-oss-process=image/resize,w_300"
        />
        <div class="tj-product-bd">
          <h2>2015年武夷茶铁罐装</h2>
          <div class="price">
            <del>¥118</del>
            <span>¥49.0</span>
          </div>
          <div class="tj-b">
            <span>100%待抢</span>
            <div class="jtbtn">即将开始</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.m-tejia {
  margin-top: 0.3rem;
}
.tj-bd {
  background: #fff;
  border: 1px solid #f3f3f3;
  margin: 0 0.3rem 0.2rem;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  height: 3rem;
  .time {
    padding-bottom: 0.2rem 0;
  }
}
.floortitle {
  font-size: 0.4rem;
  text-align: center;
  padding: 0.2rem 0;
  .iconfont {
    font-size: 18px;
    color: #b0352f;
  }
}
.tj-bd .time {
  display: flex;
  justify-content: left;
  align-items: center;
  .timebox {
    display: inline-block;
    height: 0.6rem;
    line-height: 0.6rem;
    background: #333333;
    border-radius: 5px;
    text-align: center;
    font-size: 0.36rem;
    padding: 0 5px;
    margin: 0.1rem;
    color: #fff;
  }
}
.tj-product {
  display: flex;
  justify-content: space-around;
  img {
    width: 1.86rem;
    height: 1.86rem;
  }
  .tj-product-bd {
    text-align: right;
    box-sizing: border-box;
    -webkit-box-pack: center;
    -webkit-flex-direction: column;
    flex-direction: column;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    h2 {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.36rem;
    }
    .price {
      del {
        color: #999999;
        font-size: 0.34rem;
      }
      span {
        color: #b0352f;
        font-size: 0.36rem;
      }
    }
    .tj-b {
      span {
        color: #999999;
        height: 0.8rem;
        line-height: 0.8rem;
        margin-right: 10px;
        font-size: 0.35rem;
      }
      .jtbtn {
        float: right;
        background: #ffde00;
        border-radius: 5px;
        height: 0.8rem;
        line-height: 0.8rem;
        overflow: hidden;
        padding: 0 10px;
      }
    }
  }
}
</style>