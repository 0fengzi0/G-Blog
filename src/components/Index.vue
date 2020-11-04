<template>
    <div id="Index">
        <m-scroll>
            <v-app class="index-bg-img" :style="'background-image: url(' + $Config.pageBackGroundImage + ')'">
                <SnackBar></SnackBar>
                <Menu/>
                <title-bar/>
                <v-main>
                    <keep-alive>
                        <router-view/>
                    </keep-alive>
                </v-main>
                <page-foot/>
            </v-app>
        </m-scroll>
    </div>
</template>

<script>
const TitleBar = () => import('../View/User/TitleBar');
const Menu = () => import('../View/User/Menu');
const PageFoot = () => import('../View/User/PageFoot');
import SnackBar from '../Utils/SnackBar';

export default {
    name: 'Index',
    components: { TitleBar, Menu, PageFoot, SnackBar },
    // 初始化完成
    mounted () {
        let that = this;

        // 当渲染完毕
        that.$nextTick(function () {});
    },
    // 其他函数
    methods: {}
};
</script>

<style lang="scss">
#Index {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

a {
    text-decoration: none;
}

.index-bg-img {
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-attachment: fixed !important;
    background-size: cover !important;
}
</style>
