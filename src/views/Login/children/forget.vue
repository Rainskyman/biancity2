<template>
	<div class="container">
		<nav-header title='忘记密码' @btnClick="backBtn"></nav-header>
		<div class="forget-input">
			<div class="account_number flex flex_y_center">
				<div class="account_name fs14 fw_400">账号：</div>
				<input class="fs13" type="text" placeholder="请输入您的手机号" />
			</div>
			<div class="account_number flex flex_y_center">
				<div class="account_name fs14 fw_400">验证码：</div>
				<input class="fs13" type="number" placeholder="输入获取的短信密码" />
				<div class="account_btn flex flex_x_right">
					<button @click="yzmBtn" :disabled="disabled" class="fs14 fw_400">{{yzm}}</button>
				</div>
			</div>
			<div class="account_number flex flex_y_center">
				<div class="account_name fs14 fw_400">新密码：</div>
				<input class="fs13" type="password" placeholder="不少于6位" />
			</div>
			<div class="account_number flex flex_y_center">
				<div class="account_name fs14 fw_400">密码确认：</div>
				<input class="fs13" type="password" placeholder="请再次输入密码" />
			</div>
			<button class="footer_btn fs15 c_fff">找回密码</button>
		</div>
	</div>
</template>

<script>
	import navHeader from '@/components/header'
	export default{
		components:{
			navHeader
		},
		data(){
			return{
				disabled:false,
				yzm:'获取验证码'
			}
		},
		methods:{
			backBtn(){
				this.$router.go(-1);
			},
			yzmBtn(){
				let time = 60;
				let timer = setInterval(() => {
					if(time == 0) {
						clearInterval(timer);
						this.yzm = "获取验证码";
						this.disabled = false;
					} else {
						this.yzm = time + 's';
						time--;
						this.disabled = true;
					}
				}, 1000)
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
.container{
	box-sizing: border-box;
	padding-top: 44px;
}
	.forget-input{
		padding: 0 40px;
		margin-top: 89px;
		.account_number{
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #F6F6F6;
			margin-top: 5px;
			.account_name{
				color: #1E1E1E;
			}
			input{
				padding-left: 5px;
			}
			.account_btn{
				flex: 1;
				button{
					background: none;
					color: #FF6D00;
				}
			}
		}
		.footer_btn{
			width:100%;
			height:44px;
			background:rgba(255,109,0,1);
			border-radius:5px;
			margin-top: 75px;
		}
	}
</style>