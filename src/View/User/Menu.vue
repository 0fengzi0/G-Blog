<template>
    <v-navigation-drawer
            v-model="drawer"
            fixed
            temporary
    >
        <div class="d-flex flex-column fill-height">
            <v-img src="https://s1.ax1x.com/2020/09/26/0PQ5LT.jpg">
                <v-row class="white--text pa-2 flex-column" no-gutters>
                    <v-col class="ml-3 mr-3 mt-1 mb-1">
                        <v-avatar color="#e9e9e9" size="62">
                            <v-img :src="$Config.userHeadImg"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col class="ml-3 mr-3 mt-1 mb-1">
                        <div class="subheading font-weight-black">{{ $Config.nickname }}</div>
                        <div class="body-1">E-Mail：{{ $Config.email }}</div>
                    </v-col>
                </v-row>
            </v-img>
            <m-scroll>
                <v-list nav dense>
                    <v-list-item @click="getIssuesFromLabel()">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>主页</v-list-item-title>
                    </v-list-item>

                    <v-list-group no-action>
                        <template v-slot:activator>
                            <v-list-item-icon>
                                <v-icon>mdi-label</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>标签分类</v-list-item-title>
                        </template>
                        <v-list-item link v-for="(item,index) in labelsList" :key="index"
                                     @click="getIssuesFromLabel(item.name)">
                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                        </v-list-item>
                    </v-list-group>

                    <!--外链列表-->
                    <span v-for="(menuItem,linkIndex) in $Config.menuList" :key="linkIndex">
                        <v-list-group no-action v-if="menuItem.type==='list'">
                        <template v-slot:activator>
                        <v-list-item-icon>
                        <v-icon>{{ menuItem.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
                        </template>
                        <v-list-item link v-for="(itemList, itemIndex) in menuItem.items" :key="'linkItem-'+itemIndex">
                        <v-list-item-title>
                        <a target="_blank" class="d-block"
                           :class="$vuetify.theme.dark?'white--text':'black--text '"
                           :href="itemList.url">{{ itemList.name }}</a>
                        </v-list-item-title>
                        </v-list-item>
                        </v-list-group>


                        <v-list-item @click="drawer=false" v-else-if="menuItem.type==='issuesItem'"
                                     :to="'/paper/'+menuItem.number">
                        <v-list-item-icon>
                        <v-icon>{{ menuItem.icon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
                        </v-list-item>
                    </span>
                </v-list>
            </m-scroll>
        </div>
    </v-navigation-drawer>
</template>

<script>
import Bus from '../../Utils/Bus';
import Labels from '../../api/Labels';

export default {
    name: 'Menu',
    // 引用组件
    components: {},
    // 绑定数据
    data () {
        return {
            // 侧边栏状态
            drawer: false,
            // 标签列表
            labelsList: []
        };
    },
    // 当页面开始渲染
    mounted () {
        let that = this;

        // 当渲染完毕
        that.$nextTick(function () {
            Bus.$on('menu-type', res => {
                that.drawer = res;
            });
            that.getPageLabels();
        });
    },
    // 其他方法
    methods: {
        // 获取标签列表
        getPageLabels () {
            let that = this;
            Labels.getPageLabels().then(res => {
                that.labelsList = res;
            });
        },

        // 通过标签筛选文章
        getIssuesFromLabel (label) {
            let that = this;
            that.drawer = false;
            if (that.$route.path !== '/') that.$router.push('/');
            Bus.$emit('get-issues-from-label', {
                labels: label
            });
        }
    }
};
</script>

<style scoped lang="scss">
#Menu {

}

.search-imput {
    width: 40vw;
    max-width: 300px;
}
</style>