<template>
	<div class="container">
		<nav-header title='注册' @btnClick="backBtn"></nav-header>
		<div class="regi_input">
			<div class="regi_input-item flex flex_y_center">
				<div class="item_left c_000 fs14">+86</div>
				<span style="width: 1px; height: 16px; background: #999; opacity: 0.2; margin-left: 15px;"></span>
				<input class="fs14" type="text" placeholder="请输入您的手机号" />
			</div>
			<div class="regi_input-items flex flex_y_center flex_x_bten">
				<input class="fs14" type="text" placeholder="输入获取的短信密码" />
				<button @click="yzmBtn" :disabled="disabled" class="fs14">{{yzm}}</button>
			</div>
			<div class="regi_input-items flex flex_y_center">
				<input class="fs14" placeholder="输入登录密码" type="text" />
			</div>
			<button class="footer_btn fs15 c_fff">注册</button>
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
				yzm: '获取验证码', //按钮内容
				disabled: false //按钮状态
			}
		},
		methods: {
			backBtn() {
				this.$router.go(-1);
			},
			yzmBtn() {
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
	.regi_input {
		padding: 0 40px;
		margin-top: 79px;
		.regi_input-item {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #F6F6F6;
			.item_left {
				span {
					border-right: 1px solid #999999;
					padding-right: 15px;
				}
			}
			input {
				padding-left: 16px;
			}
		}
		.regi_input-items {
			width: 100%;
			height: 50px;
			border-bottom: 1px solid #F6F6F6;
			button {
				color: #FF6D00;
				background: none;
			}
		}
		.footer_btn {
			width: 100%;
			height: 50px;
			background: rgba(255, 109, 0, 1);
			border-radius: 5px;
			margin-top: 125px;
		}
	}
</style>