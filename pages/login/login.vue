<template>
	<view class="body">
				<form @submit="formSubmit">
					<view class="face-wapper">
						<image src="https://6266-bfxy-hpbml-1302612614.tcb.qcloud.la/image/women/touxiang.png?sign=47a901d76bb4aa131663ad9c16e6869d&t=1594351727" class="face"></image>
					</view>
					
					<view class="info-wapper">
						<label class="words-lbl">账号</label>
						<input name="username" type="text" value="" class="input" placeholder="请输入用户名" placeholder-class="graywords"/>
					</view>
					
					<view class="info-wapper" style="margin-top: 40upx;">
						<label class="words-lbl">密码</label>
						<input name="password" type="text" value="" password="true" class="input" placeholder="请输入密码" placeholder-class="graywords"/>
					</view>
					
					<button type="primary" form-type="submit" style="margin-top: 60upx;width: 90%;">登录</button>
				</form>
				<navigator url="../regist/regist" class="regist">
					还没有账号?点击这里注册
				</navigator>
	</view>
</template>

<script>
	export default{
		methods:{
			formSubmit(e){

				const username = e.detail.value.username
				const password = e.detail.value.password
				uni.request({
					url:this.serverUrl+"api/user/login",
					method:'POST',
					data:{
						username:username,
						password:password
					},
					success:(res) => {
						if(res.data.error==-1){
							uni.showToast({
								title: res.data.message,
								icon: 'none',
								mask: true
							})
							return
						}
						const userInfo = {}
						userInfo.username = username
						uni.setStorageSync('userInfo',userInfo)
						uni.switchTab({
							url:'../me/me'
						})
					}
				})
			}
		}
	}
</script>

<style>
	@import url("login.css");
</style>
