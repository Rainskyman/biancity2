<template>
	<div class="container">
		<nav-header @btnClick="backBtn" shopSkeleton title='订单详情'></nav-header>
		<div class="list-top">
			<div class="list-top-img flex_center">
				<img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2492050441,2420614482&fm=26&gp=0.jpg"/>
			</div>
			<div class="flex_center list-top-name fs14 c_1E fw_b">北京摩拜科技有限公司</div>
			<div class="flex_center list-top-mn fs14 fw_500">-19.8</div>
		</div>
		<div class="list-bottom">
			<div class="list-bottom-item">
				<span class="fs15 fw_500">支付状态：</span>
				<span class="fs15 fw_500">支付成功</span>
			</div>
			<div class="list-bottom-item">
				<span class="fs15 fw_500">支付方式：</span>
				<span class="fs15 fw_500">余额</span>
			</div>
			<div class="list-bottom-item">
				<span class="fs15 fw_500">支付时间：</span>
				<span class="fs15 fw_500">2019-10-30  13:23:29</span>
			</div>
			<div class="list-bottom-item">
				<span class="fs15 fw_500">支付单号：</span>
				<span class="fs15 fw_500">1234567890</span>
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
				this.$router.push('/bill')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding-top: 54px;
		.list-top{
			border-bottom: 1px solid #F6F6F6;
			padding-bottom: 15px;
			.list-top-img{
				width: 100%;
				margin-top: 30px;
				img{
					width: 48px;
					height: 48px;
					border-radius: 50%;
				}
			}
			.list-top-name{
				margin-top: 12px;
			}
			.list-top-mn{
				color: #646464;
				margin-top: 3px;
			}
		}
		.list-bottom{
			padding-left: 15px;
			margin-top: 20px;
			box-sizing: border-box;
			.list-bottom-item{
				margin-top: 15px;
				span{
					
				}
				span:nth-child(1){
					color: #B5B3B2;
				}
				span:nth-child(2){
					color: #646464;
				}
			}
		}
	}
</style>