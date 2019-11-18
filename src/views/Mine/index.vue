<template>
	<div class="container">
		<div class="mine-bgc flex">
			<div class="header-touxiang">
				<img src="../../assets/mine/mine_header.png" />
			</div>
			<div class="header-xinxi">
				<p class="header-name c_fff fs18 fw_b">粉红小猪</p>
				<p class="header-company c_fff fs14 fw_400">东方雨虹民用建材公司</p>
			</div>
		</div>
		<div style="width: 100%; height: 15px; background: #F6F6F6;"></div>
		<div class="mine-list">
			<div v-for="(i,index) in mineListArray" :key="index" @click="listBtn(index)" class="list-item flex">
				<div class="list-item-left flex_center">
					<img :src="i.images" />
				</div>
				<div class="list-item-center fw_b fs15 flex flex_y_center">{{i.name}}</div>
				<div class="list-item-right flex_center flex flex_1 flex_x_right">
					<img src="../../assets/mine/mine-right.png" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				mineListArray: [{
						name: '余额',
						images: require('../../assets/mine/yver.png')
					},
					{
						name: '个人设置',
						images: require('../../assets/mine/geren.png')
					},
					{
						name: '人脸支付',
						images: require('../../assets/mine/renlian.png')
					},
					{
						name: '门禁权限',
						images: require('../../assets/mine/menjin.png')
					},
					{
						name: '企业认证',
						images: require('../../assets/mine/qiye.png')
					},
					{
						name: '消息通知',
						images: require('../../assets/mine/xiaoxi.png')
					},
					{
						name: '客服电话',
						images: require('../../assets/mine/kefu.png')
					}
				]
			}
		},
		methods: {
			listBtn(index) {
				switch(index) {
					case 0:
						this.$router.push('/balance')
						break;
					case 1:
						console.log(1)
						break;
					case 2:
						console.log(2)
						break;
					case 3:
						console.log(3)
						break;
					case 4:
						console.log(4)
						break;
					case 5:
						console.log(5)
						break;
					case 6:
						console.log(6)
						break;
				}
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container {
		width: 100%;
		height: 100%;
		.mine-bgc {
			width: 100%;
			height: 28vh;
			background-image: url(../../assets/mine/mine_bgc.png);
			background-size: 100%;
			background-position: center;
			background-repeat: no-repeat;
			padding-top: 50px;
			padding-left: 35px;
			box-sizing: border-box;
			.header-touxiang {
				img {
					width: 80px;
					height: 80px;
				}
			}
			.header-xinxi {
				margin-left: 30px;
				.header-name {
					margin-top: 10px;
				}
				.header-company {
					margin-top: 10px;
				}
			}
		}
		.mine-list {
			.list-item {
				width: 100%;
				height: 50px;
				border-bottom: 1px solid #F6F6F6;
				padding-left: 13px;
				box-sizing: border-box;
				.list-item-left {
					img {
						width: 20px;
						height: 20px;
					}
				}
				.list-item-center {
					margin-left: 10px;
					color: #1E1E1E;
				}
				.list-item-right {
					margin-right: 15px;
					img {
						width: 8px;
						height: 15px;
					}
				}
			}
		}
	}
</style>