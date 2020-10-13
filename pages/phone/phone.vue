<template>
	<view class="body">
				<form @submit="formSubmit">
					<view class="face-wapper">
						<image src="https://6266-bfxy-hpbml-1302612614.tcb.qcloud.la/image/women/touxiang.png?sign=47a901d76bb4aa131663ad9c16e6869d&t=1594351727" class="face"></image>
					</view>
					
					<view class="info-wapper">
						<label class="words-lbl">手机号</label>
						<input name="username" type="number" value="" class="input" placeholder="请输入手机号" @input="phoneInput" placeholder-class="graywords"/>
					</view>
					
					<view class="info-wapper" style="margin-top: 40upx;">
						<label class="words-lbl">验证码</label>
						<input name="password" type="number" value="" password="true" class="input" placeholder="请输入验证码" placeholder-class="graywords"/>
					</view>
					<button type='warn' @click="getCaptcha">获取验证码</button>
					<button type="primary" form-type="submit" style="margin-top: 60upx;width: 90%;">登录</button>
				</form>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				phone:""
			}
		},
		methods:{
			phoneInput(e){
				this.phone = e.detail.value
			},
			getCaptcha(){
				uni.request({
					url:this.serverUrl+"api/data/code",
					method:'POST',
					data:{
						phone:this.phone
					},
					success:(res) => {

					}
				})
			}
		},
		created(){
			uni.request({
				url:this.serverUrl+"api/data/dingdan",
				success:(res)=>{
					console.log(res)

				}
			});
		}
	}
	
</script>

<style>
	@import url("phone.css");
</style>
