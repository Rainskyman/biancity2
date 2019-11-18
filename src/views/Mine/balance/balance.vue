<template>
	<div class="container">
		<div class="top-bgc">
			<div class="header flex flex_y_center">
				<div class="header-img flex_1">
					<img @click="backBtn" src="../../../assets/mine/children/left.png" />
				</div>
				<span class="flex_2 fs18 fw_b c_fff flex flex_x_center">余额</span>
				<div class="flex_1"></div>
			</div>
			<div class="header-bottom flex">
				<div class="header-bottom-left flex_1">
					<div class="flex flex_x_center fw_b c_fff">68.00</div>
					<div class="flex flex_x_center fw_500 fs13 c_fff">现金余额</div>
				</div>
				<div class="header-bottom-right flex_1">
					<div class="flex flex_x_center fw_b c_fff">88.00</div>
					<div class="flex flex_x_center fw_500 fs13 c_fff">公户余额</div>
				</div>
			</div>
		</div>
		<div class="footer">
			 <router-link to="/balance/recharge">
			 	<button class="toBtn fs16 fw_500 c_fff">充值</button>
			 </router-link> 
			  <router-link to="/balance/carry">
			 	<button class="fromBtn fs16 fw_500">提现</button>
			 </router-link>
		</div>
	</div>
</template>
<script>
	export default {
		methods: {
			backBtn() {
				this.$router.push('/dashboard/mine')
			}
			
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container {
		.top-bgc {
			width: 100%;
			height: 210px;
			background: red;
			background-image: url(../../../assets/mine/children/balance_bgc.png);
			background-size: 100% 100%;
			.header {
				padding-top: 30px;
				box-sizing: border-box;
				.header-img {
					img {
						width: 22px;
						height: 22px;
						margin-left: 10px;
					}
				}
			}
			.header-bottom {
				margin-top: 45px;
				.header-bottom-left {
					border-right: 1px solid #FFFFFF;
					div:nth-child(1) {
						font-family: DINPro;
						font-size: 30px;
					}
					div:nth-child(2) {
						margin-top: 5px;
					}
				}
				.header-bottom-right {
					div:nth-child(1) {
						font-family: DINPro;
						font-size: 30px;
					}
					div:nth-child(2) {
						margin-top: 5px;
					}
				}
			}
		}
		.footer {
			padding: 0 75px;
			margin-top: 120px;
			.toBtn {
				width: 100%;
				height: 44px;
				background: rgba(255, 109, 0, 1);
				border-radius: 5px;
			}
			.fromBtn {
				width: 100%;
				height: 44px;
				border: 1px solid #FF6D00;
				border-radius: 5px;
				margin-top: 25px;
				background: none;
				color: #FF6D00;
			}
		}
	}
</style>