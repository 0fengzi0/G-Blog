<template >
    <v-container >
        <v-row justify-lg="center" >
            <v-col cols="12" lg="7" >
                <v-skeleton-loader
                        type="card-avatar"
                        :loading="isLoading"
                        :class="$vuetify.theme.dark?'black':'white'"
                >
                    <v-card elevation="10" >
                        <v-img
                                class="white--text align-end"
                                height="28vh"
                                :src="$Config.pageCardImgServers + '?tid='+new Date().getTime()+Math.round(Math.random()*1000)"
                        >
                            <v-card-title class="bg-gray-blur" >
                                <span class="text-truncate d-inline-block" >{{ issues.title }}</span >
                            </v-card-title >
                        </v-img >
                        <v-card-title >
                            <v-avatar color="indigo" class="mr-3" >
                                <v-icon dark >mdi-account-circle</v-icon >
                            </v-avatar >
                            <div >
                                <div class="" >{{ $Config.nickname }}</div >
                                <div class="body-2 font-weight-light" >{{ issues.created_at }}</div >
                            </div >
                        </v-card-title >
                    </v-card >
                </v-skeleton-loader >
            </v-col >
            <v-col cols="12" lg="7" >
                <v-skeleton-loader
                        type="list-item-three-line"
                        :loading="isLoading"
                        :class="$vuetify.theme.dark?'black':'white'"
                >
                    <v-card elevation="10" min-height="200px" >
                        <v-card-text class="markdown-body" v-html="mdtext" />
                    </v-card >
                </v-skeleton-loader >
            </v-col >
        </v-row >
    </v-container >
</template >

<script >
    import Issues from "../Http/Issues";
    
    const MarkdownIt = require('markdown-it'), md = new MarkdownIt();
    
    export default {
        name: "PaperPage",
        // 引用组件
        components: {},
        // 绑定数据
        data() {
            return {
                isLoading: true,
                mdtext: "",
                issues: {
                    user: {
                        login: ''
                    }
                }
            };
        },
        // 当路由改变
        beforeRouteEnter(to, from, next) {
            next(async vm => {
                let that = this;
                await vm.getIssues(to.params.id);
                document.title = "i小风-" + vm.issues.title
            })
        },
        // 当页面开始渲染
        mounted() {
            let that = this;
            // 当渲染完毕
            that.$nextTick(async function () {
            })
        },
        // 其他方法
        methods: {
            // 获取文章详细内容
            async getIssues(id) {
                let that = this;
                that.isLoading = true;
                await Issues.getIssues(id).then(res => {
                    that.issues = res;
                    that.mdtext = md.render(res.body);
                    that.isLoading = false;
                })
            }
        }
    };
</script >

<style scoped lang="scss" >
    @import "~github-markdown-css";
    
    .bg-gray-blur {
        background-color: rgba(0, 0, 0, 0.4);
    }
    
    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
    }
    
    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }
</style >