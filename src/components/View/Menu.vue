<template >
    <v-navigation-drawer
            v-model="drawer"
            fixed
            temporary
    >
        <div class="d-flex flex-column fill-height" >
            <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" >
                <v-row class="white--text pa-2" no-gutters >
                    <v-col class="ml-3 mr-3 mt-1 mb-1" >
                        <v-avatar color="orange" size="62" >
                            <span class="white--text headline" >62</span >
                        </v-avatar >
                    </v-col >
                    <v-col class="ml-3 mr-3 mt-1 mb-1" >
                        <div class="subheading" >Jonathan Lee</div >
                        <div class="body-1" >heyfromjonathan@gmail.com</div >
                    </v-col >
                </v-row >
            </v-img >
            <m-scroll >
                <v-list
                        nav
                        dense
                >
                    <v-list-item-group >
                        <v-list-item @click="drawer = false" v-for="(item,index) in 100" :key="index" >
                            <v-list-item-icon >
                                <v-icon >mdi-home</v-icon >
                            </v-list-item-icon >
                            <v-list-item-title >Home</v-list-item-title >
                        </v-list-item >
                    </v-list-item-group >
                </v-list >
            </m-scroll >
        </div >
    </v-navigation-drawer >
</template >

<script >
    import Bus from "../Utils/Bus";
    
    export default {
        name: "Menu",
        // 引用组件
        components: {},
        props: {
            title: {
                title: String,
                default: "主页"
            }
        },
        // 绑定数据
        data() {
            return {
                // 侧边栏状态
                drawer: false,
                // 侧边栏内容
                menuList: [ {
                    id: 1,
                    name: '主页',
                    url: ""
                } ],
            };
        },
        // 当页面开始渲染
        mounted() {
            let that = this;
            
            // 当渲染完毕
            that.$nextTick(function () {
                Bus.$on('menu-type', res => {
                    that.drawer = res
                })
            })
        },
        // 其他方法
        methods: {
            search() {
                console.log(123)
            }
        }
    };
</script >

<style scoped lang="scss" >
    #Menu {
        
    }
    
    .search-imput {
        width: 40vw;
        max-width: 300px;
    }
</style >