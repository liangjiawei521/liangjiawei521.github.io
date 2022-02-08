import Vue from 'vue'
import VueRouter from 'vue-router'
//引入store
import store from "@/store/index.js"
import constRoutes from './constRoutes'
Vue.use(VueRouter)
const routes = [

    // 管理后台的主页面
    {
        path: '/',
        redirect: '/home'
    },
    // 登录页
    {
        path: '/login',
        name: 'login',
        // component: login,
        component: () =>
            import ('../views/login')
    },

    ...constRoutes,

]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
        return originalPush.call(this, location).catch(err => err)
    }
    //解决重新登录时，路由重复定义的报错
const createRouter = () => new VueRouter({
    routes
})
const router = createRouter()
    //在重新登录时，重置路由对象
function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // the relevant part
}
// 之所以在路由文件中实现该函数，因为可以直接访问到router对象，但调用是在login.vue中登录成功后调用
export function asyncRoutes() {
    // resetRouter() //重置路由
    let navData = store.state.navData; //store中的动态路由菜单 
    navData.forEach(item => {
        let routeItem = {}
        if (item.children) {
            routeItem = {
                path: item.path,
                name: item.name,
                component: () =>
                    import ('@/views/layout'),
                meta: {
                    title: item.title,
                    icon: item.icon
                },
                children: []
            }
            item.children.forEach(route => {
                routeItem.children.push({
                    path: route.path,
                    name: route.name,
                    component: () =>
                        import ('@/views' + route.url),
                    meta: {
                        title: route.title,
                        icon: route.icon
                    }
                })
            })

        } else {
            routeItem = {
                path: item.path,
                component: () =>
                    import ('@/views/layout'),
                children: [{
                    path: item.name,
                    name: item.name,
                    component: () =>
                        import ('@/views' + item.url),
                    meta: {
                        title: item.title,
                        icon: item.icon
                    }
                }]
            }
        }
        router.addRoute(routeItem)

    })
    router.addRoute({
        path: '*',
        name: '404',
        meta: {
            title: '404页面'
        },
        component: () =>
            import ('../views/404')
    })
}

router.beforeEach((to, from, next) => {
    let token = sessionStorage.getItem('token');
    if (to.fullPath === '/login') {
        next()
    } else {
        if (token) {
            // 1. 正常跳转，vuex中始终有navData数据
            // 2. 刷新进入，vuex中没有navData数据
            let navData = store.state.navData;
            if (navData.length === 0) { //如果长度为0,则是刷新
                // 从sessionStorage中拿navData数据
                navData = JSON.parse(sessionStorage.getItem("navData"))
                store.commit("getNavData", navData);
                asyncRoutes(navData);
                // 参考4.3.4解释
                next({...to, replace: true });
            } else {
                next()
            }
        } else {
            next({
                name: "login"
            })
        }
    }
})

export default router