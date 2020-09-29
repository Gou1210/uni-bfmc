<template>
	<view class="page">
		<view class="frame" >
		    <text >{{anli.title}}</text>
		    <view class="siteTime" >
		    <text >{{anli.site}}</text>
		    <text >{{anli.time}}</text>
		    </view>
		    <view v-for="item in anli.img">
		        <image mode="widthFix" :src="item" />
				<!-- {{item}} -->
		    </view>
		</view>
	</view>

</template>

<script>
	export default{
		data(){
			return{
				anli:{}
			}
		},
		onLoad(e){
			uni.request({
				url:this.serverUrl+"api/data/wenzhang",
				success:(res)=>{
					
					this.anli = res.data.data[0].anli[e.id*1]
					console.log(this.anli)
				}
			})
		},
		methods:{
			
		}
	}
</script>

<style>
	.frame{
	    padding: 100rpx;
	    padding-top: 0;
	}
	.siteTime{
	    display: flex;
	    justify-content: space-between;
	}
</style>
