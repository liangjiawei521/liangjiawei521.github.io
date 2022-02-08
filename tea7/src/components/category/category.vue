<template>
  <div class="m-category">
      <div class="main">
      <!-- 左侧导航 -->
      <div class="left" ref="left">
        <ul>
          <li v-for="(item, index) in foodData" :key="index" :class="activeIndex === index ? 'active':''" @click="toggle(index)">
            {{ item.name }}
          </li>
        </ul>
      </div>

      <!-- 右侧列表 -->
      <div class="right" ref="right">
        <ul>
          <li v-for="(item, index) in foodData" :key="index" ref="foodItem">
            <h1>{{ item.name }}</h1>
            <ul>
              <li v-for="(food,index) in item.foods" :key="index">
                 <p>美食名称：{{food.name}}</p>
                 <p>价格：{{food.price}}</p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {

}
</script>

<style lang="scss" scoped>

</style>