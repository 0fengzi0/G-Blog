<template >
    <v-app id="app" class="overflow-hidden" >
        <Menu />
        <title-bar />
        <v-main :style="'background-image: url('+$Config.pageBackGroundImage+')'" >
            <router-view />
        </v-main >
        <page-foot />
    </v-app >
</template >

<script >
    const TitleBar = () => import('./components/View/TitleBar')
    const Menu = () => import('./components/View/Menu');
    const PageFoot = () => import('./components/View/PageFoot')
    
    export default {
        name: "app",
        components: { TitleBar, Menu, PageFoot },
        // 初始化完成
        mounted() {
            let that = this;
            
            // 当渲染完毕
            that.$nextTick(function () {
            })
        },
        // 其他函数
        methods: {}
    }
</script >

<style lang="scss" >
    html, body, #app {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
</style >
