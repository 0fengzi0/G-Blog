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
                        <div class="subheading font-weight-black" >{{ $config.nickname }}</div >
                        <div class="body-1" >E-Mail：{{ $config.email }}</div >
                    </v-col >
                </v-row >
            </v-img >
            <m-scroll >
                <v-list
                        nav
                        dense
                >
                    <v-list-item @click="drawer = false" v-for="(item,index) in menuList" :key="index"
                                 :to="item.url!=null&&item.url!=''?item.url:''" >
                        <v-list-item-icon >
                            <v-icon >{{ item.icon }}</v-icon >
                        </v-list-item-icon >
                        <v-list-item-title >{{ item.name }}</v-list-item-title >
                    </v-list-item >
                    
                    <v-list-group no-action >
                        <template v-slot:activator >
                            <v-list-item-icon >
                                <v-icon >mdi-label</v-icon >
                            </v-list-item-icon >
                            <v-list-item-title >标签分类</v-list-item-title >
                        </template >
                        
                        <v-list-item link v-for="(item,index) in labelsList" :key="index" >
                            <v-list-item-title >{{ item.name }}</v-list-item-title >
                        </v-list-item >
                    </v-list-group >
                </v-list >
            </m-scroll >
        </div >
    </v-navigation-drawer >
</template >

<script >
    import Bus from "../../Utils/Bus";
    import Labels from "../../Http/Labels";
    
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
                menuList: [
                    {
                        id: 1,
                        name: '主页',
                        url: "/",
                        icon: 'mdi-home'
                    }
                ],
                labelsList: []
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
                that.getPageLabels();
            })
        },
        // 其他方法
        methods: {
            search() {
                console.log(123)
            },
            
            // 获取标签列表
            getPageLabels() {
                let that = this;
                Labels.getPageLabels().then(res => {
                    that.labelsList = res
                })
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