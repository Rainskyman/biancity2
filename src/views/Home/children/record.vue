<template>
	<div class="container">
		<nav-header @btnClick="backBtn" shopSkeleton title="开门记录"></nav-header>
		<div style="padding-left: 15px;">
			<div class="header flex flex_y_center fs15 c_1E fw_b">2019年10月</div>
		</div>
		<div class="side">
			<div v-for="i in 5" class="item">
				<div class="item-top fs15 fw_500 c_1E">奥林匹克公园南门</div>
				<div class="item-bottom">
					<span class="fs14 fw_400">2019-10-31</span>
					<span class="fs14 fw_400">11:00:00</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import navHeader from '@/components/header'
	export default {
		components: {
			navHeader
		},
		methods:{
			backBtn(){
				this.$router.push('/dashboard/home')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container{
		padding-top: 54px;
		box-sizing: border-box;
		width: 100%;
		.header{
			border-bottom: 1px solid #F6F6F6;
			height: 60px;
			font-family:DIN;
		}
		.side{
			padding-left: 15px;
			box-sizing: border-box;
			.item{
				width: 100%;
				height: 65px;
				border-bottom: 1px solid #F6F6F6;
				.item-top{
					margin-top: 17px;
				}
				.item-bottom{
					margin-top: 7px;
					span{
						color: #B5B3B2;
						font-family:DIN;
					}
					span:nth-child(1){
						
					}
					span:nth-child(2){
						margin-left: 10px;
					}
				}
			}
		}
	}
</style>