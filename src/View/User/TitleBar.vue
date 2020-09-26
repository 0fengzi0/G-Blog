<template >
    <v-app-bar app >
        <v-app-bar-nav-icon @click="chickMenuButton" ></v-app-bar-nav-icon >
        <v-toolbar-title >菜单</v-toolbar-title >
        <v-spacer ></v-spacer >
        <v-text-field
                class="search-imput"
                hide-details
                single-line
                append-icon="mdi-magnify"
                @click:append="search"
                v-model="inputWhereData"
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
        // 绑定数据
        data() {
            return {
                inputWhereData: ""
            };
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
                let that = this;
                that.$route.path == '/' ? '' : that.$router.push("/");
                Bus.$emit("search-issues", that.inputWhereData);
                that.inputWhereData = "";
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