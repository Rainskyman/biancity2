<template>
	<div class="container">
		<div class="logo flex flex_x_center">
			<img src="../../../assets/login/login_logo.png"/>
		</div>
		<div class="login-input">
			<div class="login-frame flex">
				<div class="login-frame-img flex flex_y_center"><img src="../../../assets/login/login_mine.png"/></div>
				<input class="fs14" placeholder="手机号" type="number"/>
			</div>
			<div class="login-frame flex flex_y_center">
				<div class="login-frame-img flex flex_y_center"><img src="../../../assets/login/login_lock.png"/></div>
				<input class="fs14" placeholder="密码" :type="type"/>
				<div @click="glassesBtn" class="login-glasses"><img :src="glassesImg"/></div>
			</div>
			<button @click="nextBtn" class="login-btn fs15 c_fff fw_400">登录</button>
			<div class="login-footer flex flex_y_center">
				<div @click="registerBtn" class="fs13 c_999 fw_400 flex_1 flex flex_x_center footer-left">立即注册</div>
				<div style="width: 1px; height: 10px; background: #999999;"></div>
				<div @click="forgetBtn" class="fs13 c_999 fw_400 flex_1 flex flex_x_center footer-right">忘记密码</div>
			</div>
		</div>
	</div>
</template>

<script>
	import glassesFales from '../../../assets/login/glasses_false.png'
	import glassesTrue from '../../../assets/login/glasses_true.png'
	export default{
		data(){
			return{
				type:'password', //密码框的类型
				glassesImg:glassesFales, //图片状态
				typeShow: false //眼睛开关
			}
		},
		methods:{
			registerBtn(){
				this.$router.push('/register')
			},
			forgetBtn(){
				this.$router.push('/forget')
			},
			glassesBtn(){
				this.typeShow = !this.typeShow
				if(this.typeShow == true){
					this.type = 'text'
					this.glassesImg = glassesTrue
				}else if(this.typeShow == false){
					this.type = 'password'
					this.glassesImg = glassesFales
				}
			},
			nextBtn(){
				this.$router.push('/dashboard/home')
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.container{
		padding-top: 104px;
		.logo{
			img{
				width: 61px;
				height: 61px;
			}
		}
		.login-input{
			padding: 0 30px;
			margin-top: 46px;
			.login-frame{
				height: 50px;
				border-bottom: 1px solid #F6F6F6;
				.login-frame-img{
					img{
						width: 21px;
						height: 21px;
					}
				}
				input{
					flex: 1;
					padding-left: 15px;
					box-sizing: border-box;
				}
				.login-glasses{
						width: 22px;
						height: 15px;
					img{
						width: 100%;
						height: 100%;
					}
				}
			}
			.login-btn{
				width:100%;
				height:50px;
				background:rgba(255,109,0,1);
				border-radius:4px;
				margin-top: 40px;
				
			}
			.login-footer{
				padding: 0 46px;
				margin-top: 10px;
			}
		}
	}
</style>