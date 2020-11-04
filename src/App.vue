<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app',
    components: {},
    // 初始化完成
    mounted () {
        let that = this;

        // 当渲染完毕
        that.$nextTick(function () {
        });
    },
    // 其他函数
    methods: {}
};
</script>

<style lang="scss">
html,
body,
#app {
    width: 100%;
    height: 100%;
    overflow: hidden !important;
    margin: 0;
    padding: 0;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
