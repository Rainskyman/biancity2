<template>
	<div class="container">
		<nav-header @btnClick="backBtn" shopSkeleton title='充值' @btnClick2="backBtn2" shopRight title2="明细"></nav-header>
		<div class="recharge flex flex_warp flex_x_spa">
			<div class="item fs18 fw_500 c_1E flex_center" v-for="(i,index) in 6" :key="index" @click="itemBtn(index)" :class="{item_select:itemNum==index}">20元</div>
		</div>
		<div style="padding: 0 15px;" class="btn">
			<button @click="showOverlay=true,show=true" class="fs15 fw_500 c_fff">立即充值</button>
			<div style="margin-top: 35px;" class="fw_500 fs14 c_1E">充值说明：</div>
			<div style="margin-top: 10px;" class="fw_400 fs13 c_64">1.支付方式为：支付宝支付宝支付宝支付宝支付宝支付宝支</div>
			<div style="margin-top: 5px;" class="fw_400 fs13 c_64">2.充值记录可能延时，仅供参考，请以实际余额</div>
		</div>
		<div v-show="showOverlay" @click="showOverlay=false,show=false" class="overlay">
			<transition name="slide-fade">
				<div v-if="show" class="footer">
					<div @click="wxBtn" class="footer-wx flex flex_y_center flex_x_bten">
						<span class="c_1E fw_400 fs15">微信充值</span>
						<img src="../../../assets/mine/children/right.png" />
					</div>
					<div @click="zfbBtn" class="footer-zfb flex flex_y_center flex_x_bten">
						<span class="c_1E fw_400 fs15">支付宝充值</span>
						<img src="../../../assets/mine/children/right.png" />
					</div>
				</div>
			</transition>

		</div>
	</div>
</template>

<script>
	import navHeader from '@/components/header'
	export default {
		components: {
			navHeader
		},
		data() {
			return {
				itemNum: 0,
				showOverlay: false,
				show: false
			}
		},
		methods: {
			backBtn() {
				this.$router.push('/balance')
			},
			backBtn2() {
				this.$router.push('/balance/recharge/record')
			},
			itemBtn(index) {
				this.itemNum = index;
			},
			wxBtn() {
				console.log('微信')
			},
			zfbBtn() {
				console.log('支付宝')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding-top: 54px;
		.recharge {
			padding: 0 5px;
			margin-top: 20px;
			.item {
				width: 30%;
				height: 40px;
				border: 1px solid rgba(153, 153, 153, 1);
				box-sizing: border-box;
				border-radius: 6px;
				margin-top: 10px;
				font-family: DINPro
			}
			.item_select {
				background: #FF6D00;
				color: #fff;
				border: none;
			}
		}
		.btn {
			button {
				width: 100%;
				height: 45px;
				background: rgba(255, 109, 0, 1);
				border-radius: 5px;
				margin-top: 70px;
			}
		}
		.overlay {
			width: 100%;
			height: 100%;
			background: rgba(0, 0, 0, .3);
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			.footer {
				width: 100%;
				position: absolute;
				bottom: 0;
				.footer-wx {
					height: 50px;
					width: 100%;
					background: #fff;
					border-bottom: 1px solid #F6F6F6;
					padding: 0 15px;
					box-sizing: border-box;
					img {
						width: 18px;
						height: 18px;
					}
				}
				.footer-zfb {
					height: 50px;
					width: 100%;
					background: #fff;
					padding: 0 15px;
					box-sizing: border-box;
					img {
						width: 18px;
						height: 18px;
					}
				}
			}
		}
	}
	.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(100%);
  opacity: 0;
}
</style>