<template >
    <v-container >
        <v-row justify-lg="center" >
            <v-col cols="12"
                   lg="4"
                   v-for="(item,index) in issuesList"
                   :key="index"
            >
                <v-skeleton-loader
                        type="card"
                        :loading="isLoading"
                        :class="$vuetify.theme.dark?'black':'white'"
                >
                    <v-card elevation="10" :to="`/paper/${item.number}`"
                            transition="slide-x-transition" >
                        <v-img
                                class="white--text align-end"
                                height="28vh"
                                :src="$config.pageCardImgServers + '?tid='+new Date().getTime()+Math.round(Math.random()*1000)"
                        >
                        </v-img >
                        
                        <v-card-title >{{ item.title }}</v-card-title >
                        <v-card-text class="text--primary" >
                            {{ item.created_at }}
                        </v-card-text >
                    </v-card >
                </v-skeleton-loader >
            </v-col >
        </v-row >
    </v-container >
</template >

<script >
    import Issues from "../Http/Issues";
    import config from "../../../public/config.json"
    import Bus from "../Utils/Bus";
    
    export default {
        name: "IssuesList",
        // 引用组件
        components: {},
        // 绑定数据
        data() {
            return {
                isLoading: true,
                issuesList: 4
            };
        },
        // 当页面开始渲染
        mounted() {
            let that = this;
            // 当渲染完毕
            that.$nextTick(function () {
                that.getIssuesList();
            })
            // 通过标签获取文章
            Bus.$on("get-issues-from-label", res => {
                that.getIssuesList(res)
            })
            // 搜索文章
            Bus.$on("search-issues", res => {
                that.searchIssues(res)
            })
        },
        // 其他方法
        methods: {
            // 获取文章列表
            getIssuesList(whereData = {}) {
                let that = this;
                that.isLoading = true;
                Issues.getIssuesList(whereData).then(res => {
                    that.issuesList = [];
                    res.forEach(res => {
                        that.issuesList.push(res)
                    })
                    that.isLoading = false;
                })
            },
            
            // 搜索文章
            searchIssues(whereData = "") {
                let that = this;
                that.isLoading = true;
                Issues.searchIssues(whereData).then(res => {
                    that.issuesList = [];
                    res.items.forEach(res => {
                        that.issuesList.push(res)
                    })
                    that.isLoading = false;
                })
            }
        }
    };
</script >

<style scoped lang="scss" >
    #IssuesList {
    }
</style >