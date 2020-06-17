<template >
    <v-app-bar app >
        <v-app-bar-nav-icon @click="chickMenuButton" ></v-app-bar-nav-icon >
        <v-toolbar-title >{{ title }}</v-toolbar-title >
        <v-spacer ></v-spacer >
        <v-text-field
                class="search-imput"
                hide-details
                single-line
                append-icon="mdi-magnify"
                @click:append="search"
                placeholder="请输入你要搜索的内容"
                :color="$vuetify.theme.dark?'white':'black'"
        >
        </v-text-field >
    </v-app-bar >
</template >

<script >
    import Bus from "../../Utils/Bus";
    
    export default {
        name: "TitleBar",
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
        methods: {
            // 搜索
            search() {
                console.log(123)
            },
            
            // 点击菜单按钮
            chickMenuButton() {
                Bus.$emit('menu-type', true)
            }
        }
    };
</script >

<style scoped lang="scss" >
    .search-imput {
        width: 40vw;
        max-width: 300px;
    }
</style >