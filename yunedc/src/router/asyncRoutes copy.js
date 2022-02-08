let asyncRoutes = [

    // 后台管理主页面
    {
        path: '/home',
        name: 'layout',
        component: () =>
            import ('../views/layout'),
        redirect: '/home/dashboard',
        children: [{
            path: 'dashboard',
            name: 'dashborad',
            component: () =>
                import ('@/views/dashboard'),
            meta: {
                title: "首页",
                icon: "el-icon-eleme"

            }
        }]
    },

    // 学生管理
    {
        path: '/stuAdmin',
        name: 'stuAdmin',
        meta: {
            title: '学生管理',
            icon: "el-icon-location-outline"
        },
        component: () =>
            import ('../views/layout'),
        children: [{
                path: 'stuAdd',
                name: 'stuAdd',
                component: () =>
                    import ('@/views/stuAdmin/stuAdd.vue'),
                meta: {
                    title: "报名信息",
                    icon: "el-icon-location-outline"

                }
            }, {
                path: 'stuClass',
                name: 'stuClass',
                component: () =>
                    import ('@/views/stuAdmin/stuClass.vue'),
                meta: {
                    title: "班级管理",
                    icon: "el-icon-location-outline"
                }
            },
            {
                path: 'stuInfo',
                name: 'stuInfo',
                component: () =>
                    import ('@/views/stuAdmin/stuInfo.vue'),
                meta: {
                    title: "学生信息",
                    icon: "el-icon-location-outline"
                }
            },
            {
                path: 'stuScore',
                name: 'stuScore',
                component: () =>
                    import ('@/views/stuAdmin/stuScore.vue'),
                meta: {
                    title: "阶段成绩",
                    icon: "el-icon-location-outline"
                }
            },

        ]
    },
    // 教师管理
    {
        path: '/teacherAdmin',
        name: 'teacherAdmin',
        meta: {
            title: '教师管理',
            icon: "el-icon-location-outline"
        },
        component: () =>
            import ('../views/layout'),
        children: [{
                path: 'teacherInfo',
                name: 'teacherInfo',
                component: () =>
                    import ('@/views/teacherAdmin/teacherInfo.vue'),
                meta: {
                    title: "教师信息",
                    icon: "el-icon-location-outline"
                }
            }, {
                path: 'teacherHours',
                name: 'teacherHours',
                component: () =>
                    import ('@/views/teacherAdmin/teacherHours.vue'),
                meta: {
                    title: "课时统计",
                    // icon: "el-icon-location-outline"
                }
            },
            {
                path: 'teacherScore',
                name: 'teacherScore',
                component: () =>
                    import ('@/views/teacherAdmin/teacherScore.vue'),
                meta: {
                    title: "教评分数",
                    // icon: "el-icon-location-outline"
                }
            },

        ]
    },
    //公告信息
    {
        path: '/notice',
        name: 'notice',
        component: () =>
            import ('../views/layout'),
        children: [{
            path: 'notice',
            component: () =>
                import ('../views/notice'),
            meta: {
                title: '公告信息',
                // icon: "el-icon-location-outline"
            }
        }]
    },
    //就业管理
    {
        path: '/job',
        name: 'job',
        component: () =>
            import ('../views/layout'),
        children: [{
                path: 'jobList',
                component: () =>
                    import ('../views/job/jobList'),
                meta: {
                    title: '职位信息',
                    icon: 'el-icon-location-outline'
                }
            },
            {
                path: 'jobAddress',
                component: () =>
                    import ('../views/job/jobAddress'),
                meta: {
                    title: '就业地信息',
                    // icon: 'el-icon-location-outline'
                }
            }
        ]
    },

]

export default asyncRoutes