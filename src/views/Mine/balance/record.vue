<template>
	<div class="container">
		<nav-header @btnClick="backBtn" shopSkeleton title='充值记录'></nav-header>
		<div class="record">
			<div v-for="i in 5" class="record-item flex flex_x_bten">
				<div class="record-item-left">
					<div class="record-item-left-top fs15 c_1E">微信充值</div>
					<div class="record-item-left-center fs15 c_64 fw_500">2019-10-30  16:00:00</div>
					<div class="record-item-left-bottom">
						<span class="fs12 fw_400">交易单号：</span>
						<span class="fs12 fw_400 c_64">123456789</span>
					</div>
				</div>
				<div class="record-item-right fs20 c_1E fw_400 flex flex_y_center">+100</div>
			</div>
		</div>
	</div>
</template>

<script>
	import navHeader from '@/components/header'
	export default{
		components: {
			navHeader
		},
		methods:{
			backBtn(){
				this.$router.push('/balance/recharge')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container{
		padding-left: 15px;
		width: 100%;
		box-sizing: border-box;
		padding-top: 54px;
		.record{
			padding-left: 15px;
			box-sizing: border-box;
			.record-item{
				height: 100px;
				border-bottom: 1px solid #F6F6F6;
				.record-item-left{
					.record-item-left-top{
						margin-top: 17px;
					}
					.record-item-left-center{
						margin-top: 3px;
					}
					.record-item-left-bottom{
						margin-top: 3px;
						span:nth-child(1){
							color: #B5B3B2;
						}
						span:nth-child(2){
							
						}
					}
				}
				.record-item-right{
					font-family:DINCond-Black;
					margin-right: 15px;
					margin-bottom: 20px;
				}
			}
		}
	}
</style>