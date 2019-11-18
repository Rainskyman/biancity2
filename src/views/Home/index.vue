<template>
	<div class="container">
		<div class="banner">
			<p class="c_fff fs20">欢迎来到便城</p>
		</div>
		<div class="model flex flex_warp flex_x_spa">
			<div class="model-item" v-for="(i,index) in modelArray" :ket="index" @click="childBtn(index)">
				<div class="model-item-img flex flex_x_center"><img :src="i.imagse" /></div>
				<div class="model-item-tit1 fs15 flex flex_x_center">{{i.tit1}}</div>
				<div class="model-item-tit2 fs11 c_999 flex flex_x_center">{{i.tit2}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				modelArray: [{
						imagse: require('@/assets/home/home_receipt.png'),
						tit1: '账单',
						tit2: 'BILL'
					},
					{
						imagse: require('@/assets/home/home_edit.png'),
						tit1: '开门记录',
						tit2: 'OPENING RECORD'
					},
					{
						imagse: require('@/assets/home/home_plate.png'),
						tit1: '点餐',
						tit2: 'ORDERING FOOD'
					},
					{
						imagse: require('@/assets/home/home_bag.png'),
						tit1: '遍历购',
						tit2: 'CONVENIENCE SHOPPING'
					}
				]
			}
		},
		methods: {
			async getData() {
				let Banner = await this.service.home.getIndexBanner()
				console.log(Banner)
			},
			childBtn(index) {
				switch(index) {
					case 0:
						this.$router.push('/bill')
						break;
					case 1:
						this.$router.push('/record')
						break;
					case 2:
						alert('3')
						break;
					case 3:
						alert('4')
						break;
				}
			}
		},
		created() {
			this.getData()
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container {
		width: 100%;
		height: 100%;
		background: rgb(254, 254, 254);
		.banner {
			width: 100%;
			height: 35vh;
			background-image: url(../../assets/home/home_banner.png);
			background-position: center;
			background-repeat: no-repeat;
			background-size: 100% 100%;
			padding: 35px 0 0 15px;
			box-sizing: border-box;
		}
		.model {
			.model-item {
				width: 45%;
				height: 114.5px;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 2px 75px 0px rgba(242, 243, 246, 1);
				border-radius: 10px;
				margin-top: 15px;
				.model-item-img {
					margin-top: 20px;
					img {
						width: 31px;
						height: 31px;
					}
				}
				.model-item-tit1 {
					color: #1E1E1E;
					font-weight: bold;
					margin-top: 10px;
				}
				.model-item-tit2 {
					font-weight: bold;
					opacity: 0.5;
					margin-top: 3px;
				}
			}
		}
	}
</style>