import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tabsList: [{
            title: '首页',
            path: '/home/dashboard'
        }],
        navData: [] //动态获取导航
    },
    mutations: {
        // 向tabsList中添加数据
        setTabList: ({ tabsList }, payload) => {
            let flag = false;
            tabsList.forEach(item => {
                if (item.title == payload.title) {
                    flag = true
                }
            })
            if (!flag) {
                // 没找到
                tabsList.push(payload)
            }
        },
        //删除tab项
        delTabItem: ({ tabsList }, index) => {
            tabsList.splice(index, 1)
        },
        //在登录成功，异步获取了菜单数据后，把数据存储到vuex中
        getNavData: (state, data) => {
            state.navData = data
        }
    },
    actions: {},
    modules: {}
})