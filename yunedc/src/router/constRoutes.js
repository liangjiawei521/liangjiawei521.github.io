let asyncRoutes = [{
        // 管理后台的主页面
        path: '/home',
        name: 'layout',
        component: () =>
            import ('../views/layout'),
        redirect: '/home/dashboard',
        children: [{
            path: 'dashboard',
            name: 'dashboard',
            component: () =>
                import ('@/views/dashboard'),
            meta: {
                title: '首页',
                icon: "el-icon-eleme"
            }
        }]
    },

]

export default asyncRoutes