import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'PaperList',
        component: () => import('../components/Theme/MD/IssuesList'),
        meta: {
            title: '小风的博客'
        }
    },
    {
        path: '/paper/:id',
        name: 'PaperList',
        component: () => import('../components/Theme/MD/Issues'),
        meta: {
            title: ''
        }
    },
];

const router = new VueRouter({
    mode: 'history',
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
