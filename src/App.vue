<template >
    <v-app id="app" >
        <Menu ></Menu >
        <!--页面内容-->
        <v-main class="mt-14 mb-15" >
            <router-view />
        </v-main >
        <!--页面内容-->
        <v-footer absolute class="text-center" >
            <v-row >
                <v-col cols="12" >
                    {{ new Date().getFullYear() }} — <strong >Vuetify</strong >
                </v-col >
            </v-row >
        </v-footer >
    </v-app >
</template >

<script >
    const Menu = () => import('./components/View/Menu');
    
    export default {
        name: "app",
        components: { Menu },
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
