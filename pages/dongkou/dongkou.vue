<template>
<view class="page">
	<view class="frame">
	  <view class="chang">
	    <view>高/米</view>
	    <input type="digit" :input="heightclick" />
	      <view class="nav">
	<navigator class="url" url="../yangtai/yangtai">➤前往阳台窗</navigator>
	<navigator  class="url" url="../hejinmen/hejinmen">➤前往钛镁合金门</navigator>
	</view>
	  </view>
	
	  <view class="bigImg">
	    <view>{{shan}}</view>
	    <view class="swiper">
	      <swiper :current="imageIndex" :change="swiperclick" circular>
	        <block v-for="item in scrollImg" >
	          <swiper-item>
	            <image :src='item' mode="aspectFit"></image>
	          </swiper-item>
	        </block>
	      </swiper>
	    </view>
	  </view>
	  <view class="priceBox">
	    <view class="price">
	      <view>标配价格:</view>
	      <view style="color:#e1251b">{{standardPriceSum}}元</view>
	      <view>升级价格:</view>
	      <view style="color:#e1251b">{{partsPriceSum+parts1PriceSum}}元</view>
	      <view>总价:</view>
	      <view style="color:#e1251b">{{standardPriceSum+partsPriceSum+parts1PriceSum}}元</view>
	    </view>
	  </view>
	</view>
	<view class="kuan">
	  <view>宽/米</view>
	  <input type="digit" :input="widthclick" />
	</view>

<view class="content">
  <block  v-for="item in shuju">
    <view>{{item.title}}</view>
    <view class="smallImgBox">
      <view v-for="(itemSub,indexSub) in item.xuanze"  class="smallImg " @click="imgTap" :data-keyID="item.keyID"  :data-subNum="itemSub.subNum"  :data-subID="itemSub.subID" :class="itemSub.isActive===true?'active':''">
        <view>{{itemSub.title}}</view>
        <image mode="widthFix"  :src="itemSub.img" alt="" />
      </view>
    </view>
  </block>
 <block v-for="item in parts">
    <view>{{item.title}}</view>
    <view class="xuanxiang">
      <block v-for="(itemSub,indexSub) in item.xuanze" >
        <view @click="wordTap" @touchstart="touchStart" @touchend="touchChend" :data-keyID="item.keyID" :data-jiaoPrice="itemSub.jiaoPrice" :data-subID="itemSub.subID" class="word" :class="itemSub.isActive===true?'active':''">
          <image :class="itemSub.imgVisible===true?'imgVisible':''" mode="widthFix" :src="itemSub.img" />
          {{itemSub.title}}
        </view>
      </block>
    </view>
  </block>
  <block  v-for="item in parts1">
    <view>{{item.title}}</view>
    <view class="xuanxiang">
      <block v-for="(itemSub,indexSub) in item.xuanze" >
        <view @click="parts1Tap" @touchstart="touchStart1" @touchend="touchChend1" :data-keyID="item.keyID" :data-jiaoPrice="itemSub.jiaoPrice" :data-subID="itemSub.subID" class="word" :class="itemSub.isActive===true?'active':''">
          <image :class="itemSub.imgVisible===true?'imgVisible':''" mode="widthFix" :src="itemSub.img" />
          {{itemSub.title}}
        </view>
      </block>
    </view>
  </block>
  <view class="stepper">
    <text>选择数量:</text>
    <text @click="jian">-</text>
    <text>{{num}}</text>
    <text @click="jia">+</text>
  </view>
</view>
<view class="orderCar">
  <button class="order" @click="dingdanTap">加入订单中心</button>
  <button @click="carTap" class="addCar">购物车</button>
</view>
</view>
</template>

<script>
	export default{
		data(){
			return{
			  shuju:[],
			    parts:[],
			    standardPriceSum:0,
			    partsPriceSum:0,
			    width0:0,
			    width1:0,
			    width2:0,
			    height:0,
			    square:0,
			    num:1,
			    current:0,
			    standardPrice:0,
			    partsPrice:0,
			    shanID:0,
			    parts1:0,
			    parts1Price:0,
			    parts1PriceSum:0,
			    shan:'扇窗',
			    xing:'',
			    partsArr:[],
			    parts1Arr:[],
			    goodsInfo:{},
			    arr:[],
			    imageIndex:0,
			    subNum2:0,
			    scrollImg:["https://6266-bfxy-hpbml-1302612614.tcb.qcloud.la/%E4%BA%A7%E5%93%81/%E9%97%A8%E7%AA%97%E6%B5%B7%E6%8A%A52.jpg?sign=be043ff373bf3b4622d397befe75d1ad&t=1597107560"]
			}
		},
		onLoad() {
			uni.request({
				url:this.serverUrl+"api/data/dongkou",
				success:(res)=>{
	
					this.shuju = res.data.data[0].shuju
					this.parts = res.data.data[0].parts
					this.parts1 = res.data.data[0].parts1
				}
			});
		},
		methods:{
			heightclick(){
				
			},
			swiperclick(){
				
			},
			widthclick(){
				
			},
			imgTap(){
				
			},
			wordTap(){
				
			},
			touchStart(){
				
			},
			touchChend(){
				
			},
			parts1Tap(){
				
			},
			touchStart1(){
				
			},
			touchChend1(){
				
			},
			jian(){
				
			},
			jia(){
				
			},
			dingdanTap(){
				
			},
			carTap(){
				
			}
			
			
		}
	}
</script>

<style>
@import url("./dongkou.css");
</style>
