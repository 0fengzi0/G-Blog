<template >
    <v-footer class="text-center" >
        <v-row dense >
            <v-col cols="12" >
                Copyright © {{ new Date().getFullYear() }} <strong ><a href="" >小风</a > All rights reserved. </strong >
            </v-col >
            <v-col cols="12" v-if="$Config.recordCode!=null&&$Config.recordCode!=''" >
                <a :class="$vuetify.theme.dark?'white--text':'black--text'"
                   href="http://www.beian.miit.gov.cn/" >{{$Config.recordCode }}
                </a >
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
</style >