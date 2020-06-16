<template >
    <v-container id="PaperList" >
        <v-row dense >
            <v-col
                    align-self="center"
                    class="mt-2"
                    cols="12"
                    lg="6"
                    v-for="(item,index) in paperList"
                    :key="index" >
                <v-skeleton-loader
                        type="card"
                        :loading="isLoading"
                >
                    <v-card elevation="5" :to="`/paper/${item.number}`" >
                        <v-img
                                class="white--text align-end"
                                height="28vh"
                                :src="$Config.pageCardImgServers + '?tid='+new Date().getTime()+Math.round(Math.random()*1000)"
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
    import Config from "../../../static/Config.json"
    
    export default {
        name: "PaperList",
        // 引用组件
        components: {},
        // 绑定数据
        data() {
            return {
                isLoading: true,
                paperList: 20
            };
        },
        // 当页面开始渲染
        mounted() {
            let that = this;
            
            // 当渲染完毕
            that.$nextTick(function () {
                that.isLoading = true;
                Issues.getIssuesList().then(res => {
                    that.paperList = [];
                    res.forEach(res => {
                        if ( res.user.login === Config.username ) {
                            that.paperList.push(res)
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
    #PaperList {
    }
</style >