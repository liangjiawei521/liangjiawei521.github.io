<template>
  <div class="guessYouLike">
      <h2>猜你喜欢</h2>
      <div class="m-product">
      <ul>
          <li v-for="(item , index) in ListData" :key="index">
              <a>
                  <div class="pic">
                      <img :src="item.pic">
                  </div>
                  <div class="name">{{item.txt}}</div>
                  <div class="price">{{item.price}}</div>
              </a>
          </li>
      </ul>
      </div>
  </div>
</template>

<script>
export default {
   data() {
    return {
      ListData: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios.get("http://localhost:3000/ListData").then((res) => {
        this.ListData = res.data;
        console.log(res);
      });
    },
  },

}
</script>

<style lang="scss" scoped>
.guessYouLike{
    width:7.5rem;
    background: #fff;
    h2 {
    font-size: 18px;
    text-align: center;
    padding: 0.2rem;
    margin: 0.2rem;
  }
.m-product {
    width:7.5rem;
     background: #fff;
    ul{
     display:flex;
     justify-content: space-around;
     flex-wrap: wrap;
    li{
     list-style: none;
    width: 50%;
    padding: 0.1rem;
    box-sizing: border-box;
    margin-bottom: 0.4rem;
    a {
    text-decoration: none;
    color: #222;
    .pic{
    background: #f3f3f3;
    position: relative;
    img{
        width:100%;
    }
    }
    .name{
    height: 0.4rem;
    line-height: 0.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
     }  
    .price{
    color: #b0352f;
    height: 0.5rem;
    font-size:0.36rem;
    line-height: 0.5rem;
     }     
    }
    }
    }
}
}
</style>