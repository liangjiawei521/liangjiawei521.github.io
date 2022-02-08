<template>
  <div class="classify">
    <div class="bd">
      <router-link tag="div" to="/index/recommend">
        <i class="iconfont icon-back"></i>
      </router-link>
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜您喜欢的……</span>
      </div>
      <i class="iconfont icon-shouye"></i>
    </div>
    <div class="main">
      <!--左侧导航 -->
      <div class="left" ref="left">
        <ul>
          <li
            v-for="(item, index) in teaData"
            :key="index"
            :class="activeIndex === index ? 'active' : ''"
            @click="toggle(index)"
          >
            {{ item.title }}
          </li>
        </ul>
      </div>
      <!--右侧列表 -->
      <div class="right" ref="right">
        <ul>
            <img
          src="http://imgcon.tea7.com/6362744331464104716372233.jpg@720w_90q"
        />
          <li v-for="(item, index) in teaData" :key="index" ref="foodItem">
            <h1>{{ item.title }}</h1>
            <ul>
              <li v-for="(goods, index) in item.goodsList" :key="index">
                <img :src="goods.pic" />
                <p>{{ goods.name }}</p>
                <!-- <p>价格：{{ goods.price }}</p> -->
              </li>
            </ul>
          </li>
        </ul> 
        
      </div>
        <div class="blank"></div> 
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      teaData: [],
      activeIndex: 0,
    };
  },
  created() {
    this.getData();
  },
  mounted() {
    //因为foodData初始化时为空数组，而请求的数据有延迟，所以mounted中请求不到数据。
    console.log(this.$refs.left.innerHTML);
  },
  methods: {
    //滚动的回调
    onScroll(pos) {
      //  获取滚动的高度
      let scrollTop = Math.abs(pos.y);
      let curIndex = -1;
      let len = this.listHeight.length;
      for (let i = 0; i < len - 1; i++) {
        if (
          scrollTop + 100 >= this.listHeight[i] &&
          scrollTop <= this.listHeight[i + 1]
        ) {
          curIndex = i;
        }
      }
      if (curIndex === -1) {
        curIndex = len - 1;
      }
      this.activeIndex = curIndex;
      console.log(curIndex);
    },
    getData() {
      this.$axios
        .get("http://localhost:3000/good")
        .then((res) => {
          this.teaData = res.data;
          //  一般在请求数据后，需要获取dom的时候使用。
          this.$nextTick(() => {
            this.left = new BScroll(this.$refs.left, {
              click: true,
            });
            this.right = new BScroll(this.$refs.right, {
              probeType: 2,
            });
            //获取listHeight
            this.listHeight = this.$refs.foodItem.map((item) => item.offsetTop);
            this.right.on("scroll", this.onScroll);
            console.log(this.listHeight);
          });
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 切换索引
    toggle(index) {
      console.log(index);
      this.activeIndex = index;
      this.right.scrollToElement(this.$refs.foodItem[index], 500);
      this.right.off("scroll", this.onScroll);
      setTimeout(() => {
        this.right.on("scroll", this.onScroll);
      }, 501);
    },
  },
};
</script>

<style lang="scss" scoped>
.bd {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #b0352f;
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
  // padding: 5px;
  font-size: 14px;
  padding-left: 0.3rem;
  background: 10px center no-repeat #fff;
  background-size: 15px 15px;
  color: #000;
  .iconfont {
    font-size: 0.32rem;
  }
}
.main {
  display: flex;
  position: absolute;
  left: 0;
  top: 0.88rem;
  right: 0;
  bottom: 1.04rem;
  background-color:#fff;
  .left {
    width: 1.84rem;
    border-right: 1px solid #efefef;
    // background-color: aqua;
    overflow-y: hidden;
    li {
      text-align: center;
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    margin: 0.4rem 0;
    }
    .active {
       border-left: 3px solid #b54f4a;
       color:#b54f4a;
    }
  }
  .right {
    flex: 1;
    overflow-y: hidden;
    background: #fff;
    & > ul {
       &>img{
      width:5.2rem;
      height:2.24rem;
      margin:0.2rem;
      display: flex;
    }
      & > li {
        h1 {
          height: 30px;
          text-align:center;
          line-height:30px;
          font-size:0.36rem;
        }
        margin: 10px;
        ul{
          display: flex;
          flex-wrap: wrap;
           justify-content: space-between;
        li {
              width: 33%;
              text-align: center;
            padding: 10px;
          img{
        width: 1.06rem;
        height:1.06rem;
          }
           }
        }
      }
    }
  }
}
.right .blank{
  width:7.5rem;
 height:500px;
 border:1px solid #000;
}
</style>