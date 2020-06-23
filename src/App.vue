<template >
    <div id="app" >
        <m-scroll >
            <v-app class="index-bg-img" :style="'background-image: url('+$Config.pageBackGroundImage+')'" >
                <Menu />
                <title-bar />
                <v-main >
                    <keep-alive >
                        <router-view />
                    </keep-alive >
                </v-main >
                <page-foot />
            </v-app >
        </m-scroll >
    </div >
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
        overflow: hidden;
    }
    
    a {
        text-decoration: none;
    }
    
    .index-bg-img {
        background-position: center !important;
        background-repeat: no-repeat !important;
        background-attachment: fixed !important;
        background-size: cover !important;
    }
</style >
