import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入一级路由组件
 import index from '../views/index.vue'
 import category from '../views/category.vue'
 import teamaster from '../views/teamaster.vue'
 import cart from '../views/cart.vue'
 import customer from '../views/customer.vue'
//  二级路由
import recommend from '@/components/index/recommend'
import dhp from '@/components/index/dhp'
import jjm from '@/components/index/jjm'
import tgy from '@/components/index/tgy'
import lc from '@/components/index/lc'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path: '/index',
    component: index,
    redirect: '/index/recommend',
    children:[
      { path:'recommend',component:recommend},
      { path:'jjm',component:jjm},
      { path:'dhp',component:dhp},
      { path:'tgy',component:tgy},
      { path:'lc',component:lc}
    ]
  },
  {
    path: '/category',
    component: category,
  },
  {
    path: '/teamaster',
    component: teamaster,
  },
  {
    path: '/cart',
    component: cart,
  },
  {
    path: '/customer',
    component:customer,
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
