<template>
	<div class="container">
		<van-tabbar v-model="active" inactive-color="#CCCCCC" active-color="#FF6D00">
			<van-tabbar-item replace to="/dashboard/home">
				<span>首页</span>
				<img slot="icon" slot-scope="props" :src="props.active ? home_icon.active : home_icon.normal">
			</van-tabbar-item>
			<van-tabbar-item replace to="/dashboard/mine">
				<span>我的</span>
				<img slot="icon" slot-scope="props" :src="props.active ? shop_icon.active : shop_icon.normal">
			</van-tabbar-item>
			<div class="tabbar-fabu"></div>
		</van-tabbar>
		<router-view />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: Number(sessionStorage.getItem('tabBarActiveIndex')) || 0,
				home_icon: {
					normal: require('@/assets/tabber/home.png'),
					active: require('@/assets/tabber/home_select.png')
				},
				shop_icon: {
					normal: require('@/assets/tabber/mine.png'),
					active: require('@/assets/tabber/mine_select.png')
				}
			}
		},
		 watch: {
            active(value){
                // console.log(value);
                let tabBarActiveIndex = value > 0 ? value : 0;
                // 缓存到本地
                sessionStorage.setItem('tabBarActiveIndex', value);
            }
        }
	}
</script>

<style scoped lang="scss">
	.container {
		width: 100%;
		height: 100%;
		.tabbar-fabu{
			width: 40px;
			height: 40px;
			background: red;
			position: absolute;
			border-radius: 50%;
			left: 50%;
			margin-left: -20px;
			top: -20px;
			background: url(../../assets/tabber/sweep_code.png);
			background-position: center;
			background-size: 100%;
			background-repeat: no-repeat;
			z-index: 99;
			.tabbar-fabu{
				width: 100%;
				height: 1.9rem;
				background: red;
			}
		}
	}
	/deep/
	.van-hairline--top-bottom{
		z-index: 9;
	}
	/deep/
	.van-tabbar{
		height: 50px;
		.van-tabbar-item__icon{
			width: 20px;
			height: 20px;
			img{
				width: 100%;
				height: 100%;
			}
		}
		.van-tabbar-item__text{
			font-size: 14px;
		}
	}
</style>