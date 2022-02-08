import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'

import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel)


import moment from 'moment'

Vue.filter('formatDate', function(value) {
    return moment(value).format('YYYY-MM-DD')
})

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')