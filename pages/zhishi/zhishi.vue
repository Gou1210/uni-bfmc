<template>
	<view class="page">
		<rich-text :nodes="word" bindtap="tap"></rich-text>
	</view>
	 
</template>

<script>
	export default{
		data(){
			return{
				word:''
			}
		},
		onLoad(e){
			uni.request({
				url:this.serverUrl+"api/data/wenzhang",
				success:(res)=>{
					
					this.word = res.data.data[0].zhishi[0][e.id]
					console.log(this.word)
				}
			})
		},
		methods:{
			
		}
	}

</script>

<style>
</style>
