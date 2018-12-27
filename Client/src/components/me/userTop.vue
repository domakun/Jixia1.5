<template>
	<div class="user_top">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="1">个人首页</el-menu-item>
			<el-submenu index="2">
				<template slot="title">账户设置</template>
				<el-menu-item index="2-1">
					个人资料
				</el-menu-item>
				<el-menu-item index="2-2">账户安全</el-menu-item>
				<el-menu-item index="2-3">我的提问</el-menu-item>
				<el-menu-item index="2-3">我的关注</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">社区互动</template>
				<el-menu-item index="3-1">我的主页</el-menu-item>
				<el-menu-item index="3-2">我的游记</el-menu-item>
				<el-menu-item index="3-3">发表游记</el-menu-item>
			</el-submenu>
			<el-menu-item index="4">会员俱乐部</el-menu-item>
			<el-menu-item index="5">积分商城</el-menu-item>
		</el-menu>
	</div>

</template>

<script>
	export default {
		name: "userTop",
		data() {
			return {
				activeIndex: '1'

			};
		},
		methods: {
			//组件自带方法：
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			}


		}
	}
</script>

<style scoped>
	.user_top {
		width: 100%;
		height: 100px;
		/* background-color: white; */
		/*position: relative;*/
		/*top: -40px;*/
		/*left: 128px;*/
	}
	.menu{
		background-color: #ADD8E6;
	}

</style>
