import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/reset.css"
import "@/assets/js/flexible.js"

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
