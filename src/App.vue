<template >
    <v-app id="app" :style="'background-image: url('+$Config.pageBackGroundImage+')'" >
        <m-scroll >
            <div class="d-flex flex-column" style="position:absolute;height: 100%;width: 100%" >
                <Menu />
                <title-bar />
                <v-main >
                    <keep-alive >
                        <router-view />
                    </keep-alive >
                </v-main >
                <page-foot />
            </div >
        </m-scroll >
    </v-app >
</template >

<script >
    const TitleBar = () => import('./components/Theme/MD/TitleBar')
    const Menu = () => import('./components/Theme/MD/Menu');
    const PageFoot = () => import('./components/Theme/MD/PageFoot')
    
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
    
    a {
        text-decoration: none;
    }
</style >
