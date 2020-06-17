<template >
    <v-container >
        <v-row justify-lg="center" >
            <v-col cols="12"
                   lg="6"
                   v-for="(item,index) in issuesList"
                   :key="index" >
                <v-skeleton-loader
                        type="card"
                        :loading="isLoading"
                        :class="$vuetify.theme.dark?'black':'white'"
                >
                    <v-card elevation="10" :to="`/paper/${item.number}`" >
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
    import Issues from "../../Http/Issues";
    import config from "../../../../public/config.json"
    
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
                that.isLoading = true;
                Issues.getIssuesList().then(res => {
                    that.issuesList = [];
                    res.forEach(res => {
                        if ( res.user.login === config.username ) {
                            that.issuesList.push(res)
                        }
                    })
                    that.isLoading = false;
                })
            })
        },
        // 其他方法
        methods: {}
    };
</script >

<style scoped lang="scss" >
    #IssuesList {
    }
</style >