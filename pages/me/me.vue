<template>
	<view class="page page-fill">
		<view class="header">
			<view class="" v-if="userIsLogin">
				<image src="../../static/image/icon/windowtx.png" class="face"></image>
			</view>
			<view v-else>
				<image src="https://6266-bfxy-hpbml-1302612614.tcb.qcloud.la/image/women/touxiang.png?sign=47a901d76bb4aa131663ad9c16e6869d&t=1594351727"
				 class="face" mode=""></image>
			</view>

			<view class="info-wapper" v-if="userIsLogin">
				<view class="nickname">
					{{userInfo.username}}
				</view>
				<view class="quit" @tap="quitTap">
					退出
				</view>
				<!-- 				<view class="nav-info">
					ID:woshi987897		
				</view> -->
			</view>
			<view v-else>
				<view @tap="loginTap">
					<view class="nickname regist-login">
						注册/登录
					</view>
				</view>
			</view>
			<navigator url="../phone/phone" class="set-wapper" v-if="userIsLogin" >	
					<image src="../../static/image/icon/chilun.png" class="settings" mode=""></image>
			</navigator>

		</view>


		<view class="kuai">
			<view class="kuaixiao" @tap="carTap">
				<image mode="widthFix" src="https://6266-bfxy-hpbml-1302612614.tcb.qcloud.la/image/women/car.png?sign=9f221ad51ec7125f567b2d858b240e28&t=1594351769" />
				<text>订单中心</text>
			</view>

			<navigator url="../women/women" class="kuaixiao">
				<image mode="widthFix" src="https://6266-bfxy-hpbml-1302612614.tcb.qcloud.la/image/women/window.png?sign=fa81d7b751b293f3ce62fdba67a0b7c0&t=1594351787" />
				<text>关于我们</text>
			</navigator>

			<navigator url="../huodong/huodong" class="kuaixiao">
				<image mode="widthFix" src="https://6266-bfxy-hpbml-1302612614.tcb.qcloud.la/image/women/youhui.png?sign=c070cd590fe0f391effa30606957d347&t=1594351806" />
				<text>优惠详情</text>
			</navigator>

			<navigator url="../dingjin/dingjin" class="kuaixiao">
				<image mode="widthFix" src="https://6266-bfxy-hpbml-1302612614.tcb.qcloud.la/image/women/xiangzi.png?sign=a36e0c395b718f52d0d7546f6f8616c3&t=1594351818" />
				<text>支付订金</text>
			</navigator>

		</view>

		<view class="fankui">
			<view class="dianhua"><text>联系电话:</text><text>13911394971</text></view>
			<view class="dianhua"><text>公司地址:</text><text>回龙观龙锦苑东三区1号楼底商铺42-4精品断桥铝门窗</text></view>
			<view class="dianhua"><text>厂区地址:</text><text>天津市武清工业园36号院</text></view>
			<!-- <navigator url="../liuyan/liuyan" class="dianhua"><text>留言反馈:</text><text>→</text></navigator> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userIsLogin: false,
				userInfo: {}
			}
		},
		methods: {
			carTap() {
				uni.reLaunch({
					url: "../car/car"
				})
			},
			loginTap(){
				uni.redirectTo({
					url:"../login/login"
				})
			},
			quitTap(){
				uni.clearStorageSync('userInfo')
				uni.reLaunch({
					url:"../me/me"
				})
			}
		},
		onLoad() {
			new Promise((resolve, reject) => {
				const userInfo = uni.getStorageSync('userInfo')
				resolve(userInfo)
			}).then(data => {
				if (data) {
					this.userInfo = data
					this.userIsLogin = true
				}
			})
		},
	}
</script>

<style>
	@import url("me.css");
</style>
