<template>
  <!-- 爆款推荐 -->
  <div class="popular">
    <h2 class="tit">爆款推荐</h2>
    <div class="bk_list" v-for="(item, index) in imgList" :key="index">
      <div class="bk_item">
        <div class="status bk">{{ item.title }}</div>
        <div class="cnt">
          <div class="name">
            <h3>{{ item.tit }}</h3>
            <div class="txt">{{ item.txt }}</div>
          </div>
          <div class="price">{{ item.price }}</div>
        </div>
        <div class="pic">
          <img :src="item.pic" />
        </div>
      </div>
    </div>
    <div class="m_pic">
      <div class="m_img">
        <img
          src="http://img.tea7.com/0010445_0.jpeg?x-oss-process=image/resize,w_300"
        />
        <div class="name">建阳红色芝麻毫建芝麻茶</div>
        <span>￥399</span>
      </div>
      <div class="seemore">
        <div>MORE</div>
        <div>查看更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("http://localhost:3000/imgList").then((res) => {
        this.imgList = res.data;
        console.log(res);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.popular {
  background: #ffffff;
  margin-top: 0.2rem;
  .tit {
    text-align: center;
    padding: 0.2rem 0;
    font-size: 0.4rem;
    color: #333333;
  }
}
.bk_item {
  margin-top: 0.2rem;
  position: relative;
}
.bk_list .status {
  position: absolute;
  left: 0.4rem;
  top: 0;
  color: #fff;
  border-radius: 0 0 8px 8px;
  padding: 5px;
  background: #d4c0a7;
}
.bk_list .cnt {
  position: absolute;
  right: 0;
  box-sizing: border-box;
  width: 50%;
  padding: 1rem 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  justify-content: center;
  .name {
    text-align: right;
    h3 {
      color: #666;
      margin: 0.1rem 0;
    }
  }
  .price {
    margin-top: 10%;
    color: #b0352f;
    height: 0.5rem;
    text-align: right;
    font-size: 0.4rem;
  }
}
.pic {
  margin: 0 0.15rem;
  width: 7.2rem;
  height: 2.88rem;
  border-radius: 0.1rem;
  overflow: hidden;
  border-radius: 0.2rem;
  img {
    width: 7.2rem;
    height: 2.88rem;
  }
}
.m_pic {
  display: flex;
  justify-content: start;
  align-items: flex-start;
  width: 7.2rem;
  height: 3.74rem;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  .m_img {
    width: 2.62rem;
    img {
      width: 2.62rem;
      height: 2.62rem;
    }
    span{
        float: right;
        color:#b0352f;
    }
  }

  .name {
    padding: 8px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #333;
  }
  .seemore {
    background: #f3f3f3;
    position: relative;
    width: 2.42rem;
    height: 2.42rem;
    margin: 5px;
    border: 1px solid #e4e4e4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
      display: block;
      text-align: center;
      width: 50%;
      // font-size: 0.32rem;
    }
    div:first-child {
      border-bottom: 1px solid #cccccc;
      color: #999999;
      padding-bottom: 0.1rem;
      margin-bottom: 0.1rem;
    }
  }
}
</style>