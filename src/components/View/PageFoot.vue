<template >
    <v-footer app class="text-center" >
        <v-row >
            <v-col cols="12" >
                {{ new Date().getFullYear() }} — <strong >Vuetify</strong >
            </v-col >
        </v-row >
    </v-footer >
</template >

<script >
    export default {
        name: "PageFoot",
        // 引用组件
        components: {},
        // 绑定数据
        data() {
            return {};
        },
        // 当页面开始渲染
        mounted() {
            let that = this;
            
            // 当渲染完毕
            that.$nextTick(function () {
                
            })
        },
        // 其他方法
        methods: {}
    };
</script >

<style scoped lang="scss" >
    #PageFoot {
        
    }
</style >