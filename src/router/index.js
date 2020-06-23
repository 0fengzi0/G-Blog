import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'PaperList',
        component: () => import('../components/View/IssuesList'),
        meta: {
            title: window.$Config.nickname + '的博客'
        }
    },
    {
        path: '/paper/:id',
        name: 'PaperList',
        component: () => import('../components/View/Issues'),
        meta: {
            title: ''
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
    if ( to.meta.title ) {
        document.title = to.meta.title
    }
    next()
})

export default router
