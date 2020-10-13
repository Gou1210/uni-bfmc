<template>
	<div class="body">
		<form @submit="formSubmit">
			<view class="face-wapper">
				<image src="https://6266-bfxy-hpbml-1302612614.tcb.qcloud.la/image/women/touxiang.png?sign=47a901d76bb4aa131663ad9c16e6869d&t=1594351727" class="face"></image>
			</view>
			
					<view class="info-wapper">
						<label class="words-lbl">您的手机号</label>
						<input name="mobile" type="number" value="" class="input" placeholder="请输入手机号"  placeholder-class="graywords"/>
					</view>

			<button type="primary" form-type="submit" style="margin-top: 60upx;width: 90%;">完成</button>
		</form>
	</div>
</template>

<script>
export default{
	methods:{
		formSubmit(e){
			const mobile = e.detail.value.mobile
			new Promise((resolve,reject)=>{
				uni.setStorageSync('mobile',mobile)
				resolve()
			}).then(()=>{
				uni.switchTab({
				    url: '../car/car'
				});
			})

			}
	}
}
</script>

<style>
	@import url("mobile.css");
</style>
