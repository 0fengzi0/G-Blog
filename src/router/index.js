import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [

    {
        path: '/',
        name: 'PaperList',
        component: () => import('../components/Index'),
        meta: {
            title: window.$Config.nickname + '的博客'
        },
        children: [
            {
                path: '/',
                name: 'PaperList',
                component: () => import('../View/IssuesList'),
                meta: {
                    title: ''
                }
            }, {
                path: '/paper/:id',
                name: 'PaperList',
                component: () => import('../View/Issues'),
                meta: {
                    title: ''
                }
            },

        ]
    }, {
        path: '/admin',
        name: 'Admin',
        component: () => import('../components/Admin/Index'),
        meta: {
            title: '后台管理'
        }
    },
];

const router = new VueRouter({
    // history刷新会404被迫弃用,等找到解决方法后换回来
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
});

//beforeEach是router的钩子函数，在进入路由前执行
router.beforeEach((to, from, next) => {
    //判断是否有标题
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router
