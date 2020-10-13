<template>
	<view class="page">
		<scroll-view scroll-y class="carBox" v-if="res.length!==0">
			<view class="carItem" v-for="(item,index) in res">
				<view class="carImg">
					<image mode="widthFix" :src="item.img" />
				</view>
				<view class="carWord">
					<view class="titleDelete" style="font-size:24upx">
						<text class="title">{{item.title}}</text>
						<text class="delete" @tap="deleteTap" :data-Id="index">删除</text>
					</view>
					<view class="tagPrice">
						<view class="tagBox">
							<view v-for="subItem in item.partsArr" class="tag">
								<block v-if="subItem!=null">
									<text>{{subItem}}</text>
								</block>
							</view>
						</view>

						<view class="price">
							<view>
								标配价格:
								<text>{{item.standardPriceSum}}</text>
							</view>
							<view>
								升级价格:
								<text>{{item.partsPriceSumCon}}</text>
							</view>
							<view>
								总价:
								<text>{{item.standardParts}}</text>
							</view>
						</view>
					</view>
					<view class="ckStepper">
						<view class="carCk">
							<text>
								面积:{{item.width0*1+item.width1*1+item.width2*1}}X{{item.height}}={{item.square}}㎡
							</text>
						</view>
						<view :data-index="index" class="xuanze">
							<checkbox-group :data-index="index" @change="handeItemChange">
								<checkbox :checked="item.checked"></checkbox>
							</checkbox-group>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
<!-- 		<block v-if="res.length===0">
			<image class="kong" mode="widthFix" src="https://6266-bfxy-hpbml-1302612614.tcb.qcloud.la/image/%E6%9D%82/gouwuche.png?sign=0865ae3bb3c5e9d2ce68b86a1aeaa82f&t=1594351882" />
		</block> -->
		<view class="dibu">
			<view class="quanxuan">
				<checkbox-group @change="handleItemAllCheck">
					<checkbox :checked="allChecked">全选</checkbox>
				</checkbox-group>
			</view>
			<view class="middle">
				<view>
					总价:
					<text>{{totalPrice}}</text>
				</view>
				<view>
					优惠:
					<text>{{juanGai}}</text>
				</view>
			</view>
			<view class="right">
				<view class="wenzi">
					<view class="heji">
						折后价:
						<text style="color:#e1251b">{{totalPrice-juanGai}}</text>
					</view>
					<view class="yunfei">(已包含配送安装费用)</view>
				</view>
				<button type="primary" @tap="addOrder">
					<view>提交意向</view>
					<view>(非支付)</view>
				</button>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				res: [],
				allChecked: true,
				totalPrice: 0,
				juanGai: 0
			}
		},
		methods: {
			getData() {
				let totalPrice = 0

				const juan = uni.getStorageSync('juan')
				let juanGai = this.juanGai

						
						try {
					
						  let res = uni.getStorageSync('goodsInfoArr')
						  
						
						  res.forEach(item => {
						  
						  	for (let x in item.partsArr) {
						  		if (typeof(item.partsArr[x]) == 'string') {
						  			const strIndex = (item.partsArr[x].indexOf("+"))
						  
						  			if (strIndex != -1) {
						  
						  				item.partsArr[x] = ((item.partsArr[x]).slice(0, strIndex))
						  
						  			}
						  
						  		}
						  		if (item.partsArr[x] === '不需要') {
						  			delete item.partsArr[x]
						  		}
						  	}
						  	if (item.checked) {
						  		totalPrice = item.standardParts + totalPrice
						  	}
						  
						  });
						  
						  if (juan[0] == 100 && totalPrice > 1000 && totalPrice < 2000) {
						  	juanGai = juan[0]
						  }
						  if (juan[1] == 200 && totalPrice > 2000 && totalPrice < 3000) {
						  	juanGai = juan[1]
						  }
						  if (juan[2] == 300 && totalPrice > 3000) {
						  	juanGai = juan[2]
						  }
						  if (totalPrice < 1000) {
						  	juanGai = 0
						  }
						  
						  console.log(totalPrice)
						  
						  this.res = res
						  this.totalPrice = totalPrice
						  this.juanGai = juanGai

						} catch (e) {
						    // error
						}
			},
			// 删除
			 deleteTap(e){
				const id = e.currentTarget.dataset.id*1
			this.res.forEach((v,i)=>{
				if(id==i){
					this.res.splice(i,1)
				}
			})
			uni.setStorageSync('goodsInfoArr',this.res)
			 },
			 // 选择单项
			  handeItemChange(e){
			 const cart =   this.res
			 let allChecked = this.allChecked
			 const index = e.currentTarget.dataset.index
			  this.res[index].checked = !this.res[index].checked
			 let totalPrice =   0
			 const juan = wx.getStorageSync('juan')
			 let juanGai = this.juanGai
			 cart.forEach(v=>{
			 
			       if(v.checked){
			         totalPrice = v.standardParts+totalPrice
			       }
			 
			     })
			 
			     allChecked = cart.every(v=>v.checked)
			     if(juan[0]==100&&totalPrice>1000&&totalPrice<2000){
			       juanGai = juan[0]
			     }
			     if(juan[1]==200&&totalPrice>2000&&totalPrice<3000){
			       juanGai = juan[1]
			     }
			     if(juan[2]==300&&totalPrice>3000){
			       juanGai = juan[2]
			     }
			     if(totalPrice<1000){
			       juanGai = 0
			     }

			       this.totalPrice = totalPrice
			       this.allChecked = allChecked
			       this.juanGai = juanGai
		
			  },
			   handleItemAllCheck(){
			    const cart =   this.res
			    let allChecked =   this.allChecked
			    let totalPrice =   0
			    const juan = wx.getStorageSync('juan')
			    let juanGai = this.juanGai
			     allChecked =   !allChecked
			  
			  
			  cart.forEach(v => {
			    v.checked = allChecked
			    if(v.checked){
			      totalPrice = v.standardParts+totalPrice
			    }
			  }
			    
			    
			    );
			    if(juan[0]==100&&totalPrice>1000&&totalPrice<2000){
			      juanGai = juan[0]
			    }
			    if(juan[1]==200&&totalPrice>2000&&totalPrice<3000){
			      juanGai = juan[1]
			    }
			    if(juan[2]==300&&totalPrice>3000){
			      juanGai = juan[2]
			    }
			    if(totalPrice<1000){
			      juanGai = 0
			    }
		
			      const res = cart
	
			        this.res = res
			        this.allChecked = allChecked
			        this.totalPrice = totalPrice
			        this.juanGai = juanGai

			   },
			   addOrder(){
				   new Promise((resolve,reject)=>{
					   this.res.mobile = uni.getStorageSync('mobile')
					   resolve()
				   }).then(()=>{
					   if(this.res.mobile){
					    uni.request({
					            url: this.serverUrl+"api/data/order",
					   						   method:"POST",
					   						   data:{
					   							   order:this.res
					   						   }
					        })
					        .then(data => {//data为一个数组，数组第一项为错误信息，第二项为返回数据
					            var [error, res]  = data;
					   
					        })
					      uni.showToast({
					       title: '加入成功',
					       icon: 'success',
					       mask: true
					     });
					   }else{
					   					  uni.navigateTo({
					   					  	url:"../mobile/mobile"
					   					  })
					   }
				   })

			   },
			onLoad() {
				
				this.getData()
			}
		},
	}
</script>

<style>
	@import url("./car.css");
</style>
