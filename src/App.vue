<template>
	<div id="app"><router-view /></div>
</template>

<script>
export default {
	name: 'app',
	components: {},
	// 初始化完成
	mounted() {
		let that = this;

		// 当渲染完毕
		that.$nextTick(function() {});
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
