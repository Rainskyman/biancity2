<template>
	<div class="container">
		<nav-header @btnClick="backBtn" shopSkeleton title='账单'></nav-header>
		<div style="width: 100%; box-sizing: border-box; padding-left: 15px;">
			<div class="bill-header">
				<div class="bill-header-top flex flex_y_center">
					<span class="c_1E fs15 fw_b">2019年10月</span>
					<van-icon name="arrow-down" />
				</div>
				<div class="bill-header-bottom">
					<span class="fs13 fw_500">支出￥13.56</span>
					<span class="fs13 fw_500">收入￥53.88</span>
				</div>
			</div>
		</div>
		<div class="bill-list">
			<div v-for="(i,index) in 5" :key="index" @click="listBtn" class="bill-item flex flex_y_center">
				<div class="bill-item-left">
					<img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1107101294,2447302283&fm=26&gp=0.jpg" />
				</div>
				<div class="bill-item-center">
					<div class="bill-item-center-top fs15 c_1E fw_500">北京摩拜科技有限公司</div>
					<div class="bill-item-center-bottom">
						<span>10月3日</span>
						<span>15:23</span>
					</div>
				</div>
				<div class="bill-item-right fs20 fw_400 flex flex_1 flex_x_right">-19.8</div>
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
			},
			listBtn(){
				this.$router.push('/bill_list')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container {
		padding-top: 54px;
		box-sizing: border-box;
		.bill-header {
			width: 100%;
			height: 80px;
			border-bottom: 1px solid #F6F6F6;
			padding-top: 15px;
			padding-left: 15px;
			box-sizing: border-box;
			.bill-header-top {
				font-family: DIN;
				/deep/ .van-icon {
					margin-left: 3px;
					font-size: 15px;
				}
			}
			.bill-header-bottom {
				margin-top: 5px;
				span {
					color: #646464;
					font-family: PingFang SC;
				}
				span:nth-child(2) {
					margin-left: 20px;
				}
			}
		}
		.bill-list {
			width: 100%;
			box-sizing: border-box;
			padding-left: 15px;
			.bill-item {
				width: 100%;
				height: 78px;
				box-sizing: border-box;
				border-bottom: 1px solid #F6F6F6;
				.bill-item-left {
					width: 33px;
					height: 33px;
					img {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}
				.bill-item-center {
					margin-left: 15px;
					.bill-item-center-top {}
					.bill-item-center-bottom {
						margin-top: 5px;
						span {
							color: #B5B3B2;
						}
						span:nth-child(2) {
							margin-left: 5px;
						}
					}
				}
				.bill-item-right {
					font-family: DINCond-Black;
					color: #FF6D00;
					margin-right: 15px;
				}
			}
		}
	}
</style>