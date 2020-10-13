<template>
	<view class="page">
		<view class="frame">
		  <view class="chang">
		    <view>高/米</view>
		    <input type="digit" @input="heightTap" />
		      <view class="nav">
		<view class="url" @tap="urlTap">➤前往洞口窗</view>
		<navigator  class="url" url="../yangtai/yangtai">➤前往阳台窗</navigator>
		</view>
		  </view>
		
		  <view class="bigImg">
		    <view>{{shan}}</view>
		    <view class="swiper">
		      <swiper :current="imageIndex" @change="swiperTap" circular>
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
		  <input type="digit" @input="widthTap" />
		</view>

		<view class="content">
		  <block  v-for="item in shuju">
		    <view>{{item.title}}</view>
		    <view class="smallImgBox">
		      <view v-for="(itemSub,indexSub) in item.xuanze"  class="smallImg"   :class="itemSub.isActive===true?'active':''"  @tap="imgTap" :data-keyID="item.keyID" :data-subID="itemSub.subID">
		        <view>{{itemSub.title}}</view>
		        <image mode="widthFix" :src="itemSub.img" alt="" />
		      </view>
		    </view>
		  </block>
		  <!-- <block  v-for="{{parts}}">
		    <view>{{item.title}}</view>
		    <view class="xuanxiang">
		      <block v-for="{{item.xuanze}}" v-for-item="itemSub" v-for-index="indexSub" >
		        <view @tap="wordTap" @touchstart="touchStart" @touchend="touchChend" data-keyID="{{item.keyID}}" data-subID="{{itemSub.subID}}" class="word {{itemSub.isActive===true?'active':''}}">
		          <image class="{{itemSub.imgVisible===true?'imgVisible':''}}" mode="widthFix" src="{{itemSub.img}}" />
		          {{itemSub.title}}
		        </view>
		      </block>
		    </view>
		  </block>
		  <block  v-for="{{parts1}}">
		    <view>{{item.title}}</view>
		    <view class="xuanxiang">
		      <block v-for="{{item.xuanze}}" v-for-item="itemSub" v-for-index="indexSub" >
		        <view @tap="parts1Tap" @touchstart="touchStart1" @touchend="touchChend1" data-keyID="{{item.keyID}}" data-subID="{{itemSub.subID}}" class="word {{itemSub.isActive===true?'active':''}}">
		          <image class="{{itemSub.imgVisible===true?'imgVisible':''}}" mode="widthFix" src="{{itemSub.img}}" />
		          {{itemSub.title}}
		        </view>
		      </block>
		    </view>
		  </block> -->
		
		  <view class="stepper">
		    <text>选择数量:</text>
		    <text @tap="jian">-</text>
		    <text>{{num}}</text>
		    <text @tap="jia">+</text>
		  </view>
		</view>

		<view class="orderCar">
		  <button class="order" @tap="dingdanTap">加入订单中心</button>
		  <button @tap="carTap" class="addCar">购物车</button>
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
    subID:0,
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
    scrollImg:["https://6266-bfxy-hpbml-1302612614.tcb.qcloud.la/%E4%BA%A7%E5%93%81/%E9%97%A8%E7%AA%97%E6%B5%B7%E6%8A%A52.jpg?sign=005c4b92c0a36a448e1412aa15a47d9c&t=1597112626"]
			}
		},
		onLoad() {
			uni.request({
				url:this.serverUrl+"api/data/hejin",
				success:(res)=>{
				
					this.shuju = res.data.data[0].shuju
				}
			});
		},
		methods:{
			heightTap(e){
				 const height = e.detail.value
				  const width0 = this.width0
				  const num = this.num
				  const shanID = this.shanID
				  let square = width0*height
  if(height>0&&height<2){
    height=2
  }
				  let standardPriceSum =Math.round(square*this.standardPrice) *num
				  const partsPriceSum =Math.round(square*this.partsPrice) *num
				  if((square+0.5)/3.3<(shanID+1)&&square>0){
				    standardPriceSum = standardPriceSum+300
				  } 
		
				    this.standardPriceSum = standardPriceSum
				    this.partsPriceSum = partsPriceSum
				    this.height = height
				    this.square = square
		
				},
				  
				wordTap(e){
				  const keyID = e.currentTarget.dataset.keyid*1
				  const subID = e.currentTarget.dataset.subid*1
				  const square = this.square
				  
				  const num = this.num
				  let parts = this.parts
				let partsArr = []
				  let product = parts[keyID].xuanze
				  let partsPrice =0
				
				  product.forEach((v, i) => i == subID ? v.isActive = true : v.isActive = false);
				
				  for(let i = 0; i<parts.length; i++){
				
				    for(let y =0; y<parts[i].xuanze.length; y++){
				      if(parts[i].xuanze[y].isActive){
				
				          partsPrice+=parts[i].xuanze[y].price
				
				          partsArr.push(parts[i].xuanze[y].title)
				      }
				    }
				  }
				  
				    const partsPriceSum  = Math.round(square*partsPrice*num)
				
				  parts[keyID].xuanze=product
				      this.parts = parts
				      this.partsPrice = partsPrice
				      this.partsPriceSum = partsPriceSum
				      this.partsArr = partsArr
			},
			swiperTap(e){
				
				    const shanID = this.shanID
				    const current = e.detail.current
					console.log(current)
				    const square = this.square
				    const num = this.num
				    let standardPriceSum = this.standardPriceSum
				    const standardPrice = this.standardPrice
				    const shanPrice = this.shuju[0].scrollimg[shanID][current].price*square
				   
				    const shan = this.shuju[0].scrollimg[shanID][current].title
				    
				    
				
				  standardPriceSum = Math.round((standardPrice)*square*num)
					      this.standardPrice = standardPrice     
					      this.standardPriceSum = standardPriceSum
					      this.shan = shan
					      this.current = current
			},
			widthTap(e){
				   const width0 = e.detail.value
				   const height = this.height
				   const num = this.num
				   const shanID = this.shanID
				   let square = width0*height
				   
  if(width0>0&&width0<1){
    width=1
  }
				   let standardPriceSum =Math.round(square*this.standardPrice) *num
				   if((square+0.5)/3.3<(shanID+1)&&square>0){
				     standardPriceSum = standardPriceSum+300
				   } 
				   const partsPriceSum =Math.round(square*this.partsPrice) *num
				   
				       this.standardPriceSum = standardPriceSum
					   this.partsPriceSum = partsPriceSum
				       this.width0 = width0
				       this.square = square
			},
			imgTap(e){
				
				const keyID = e.currentTarget.dataset.keyid*1
				    const subID = e.currentTarget.dataset.subid*1
				    const subNum = e.currentTarget.dataset.subnum*1
				    let shanID = this.shanID
				    let subNum2 = this.subNum2
				
				    let scrollImg = this.scrollImg
				    let shan = this.shan
				    let xing = this.xing
				    let num= this.num
				    const current = this.current
				    let shuju = this.shuju
				    let standardPriceSum = this.standardPriceSum
				    const square = this.square
				    let product = shuju[keyID].xuanze
				    let standardPrice = 0
				 if(keyID==0){
				  shan = this.shuju[0].scrollimg[subID][0].title
				  
				
				 }
				       
				
				    if(keyID==1){
				       xing = this.shuju[1].xuanze[subID].title
				       
				    }
				
				
				    if(subNum!=undefined){
				      subNum2=subNum
				    }
				
				
				   
				    product.forEach((v, i) => i === subID ? v.isActive = true : v.isActive = false);
				    for(let i = 0; i<shuju.length; i++){
				
				      for(let y =0; y<shuju[i].xuanze.length; y++){
				        if(shuju[i].xuanze[y].isActive){
				  
				          standardPrice+=shuju[i].xuanze[y].price
				        }
				      }
				    }
				
				    standardPriceSum = Math.round(standardPrice*square)*num
			
				    if(keyID===0){
						
				      scrollImg = []
		
				      shuju[0].scrollimg[subID].forEach(v=> 
				        scrollImg.push(v.img)
				        )
				
				
				    }
		
				
				    let imageIndex = 0
				    if(keyID==1){
				      imageIndex = current
				    }
				    
				    if(keyID==0){
				      shanID = subID
				    }
		
				    if((square+0.5)/3.3<(shanID+1)&&square>0){
				      standardPriceSum = standardPriceSum+300
				    } 
				    shuju[keyID].xuanze=product
					      this.shuju = shuju
					      this.standardPrice = standardPrice
					      this.standardPriceSum = standardPriceSum
					      this.scrollImg = scrollImg
					      this.shanID = shanID
					      this.shan = shan
					      this.xing = xing
					      this.imageIndex = imageIndex
					      this.subNum2 = subNum2
			},	
		
			
			touchStart(e){
				  const keyID = e.currentTarget.dataset.keyid*1
				  const subID = e.currentTarget.dataset.subid*1
				 
				  
				
				  let parts = this.parts
				
				  let product = parts[keyID].xuanze
				
				
				  product.forEach((v, i) => i == subID ? v.imgVisible = true : v.imgVisible = false);
				
				
				  parts[keyID].xuanze=product
				  this.parts = parts
		
			},
			touchChend(e){
				  const keyID = e.currentTarget.dataset.keyid*1
				  const subID = e.currentTarget.dataset.subid*1
				
				  
				
				  let parts = this.parts
				
				  let product = parts[keyID].xuanze
				
				
				  product.forEach((v, i) => i == subID ? v.imgVisible = false : v.imgVisible = false);
				
				
				  parts[keyID].xuanze=product
				  this.parts = parts
			},
			parts1Tap(e){
				 const keyID = e.currentTarget.dataset.keyid*1
				  const subID = e.currentTarget.dataset.subid*1
				
				  const num = this.num
				  let parts1 = this.parts1
				
				  let product = parts1[keyID].xuanze
				  let parts1Price =0
				  let parts1Arr = []
				  product.forEach((v, i) => i == subID ? v.isActive = true : v.isActive = false);
				
				  for(let i = 0; i<parts1.length; i++){
				
				    for(let y =0; y<parts1[i].xuanze.length; y++){
				      if(parts1[i].xuanze[y].isActive){
				
				          parts1Price+=parts1[i].xuanze[y].price
				          parts1Arr.push(parts1[i].xuanze[y].title)
				        
				      }
				    }
				  }
				
				    const parts1PriceSum  = parts1Price*num
				
				  parts1[keyID].xuanze=product
				      this.parts1 = parts1
				      this.parts1Price = parts1Price
				      this.parts1PriceSum = parts1PriceSum
				      this.parts1Arr = parts1Arr
			},
			touchStart1(e){
				  const keyID = e.currentTarget.dataset.keyid*1
				  const subID = e.currentTarget.dataset.subid*1
				
				  
				
				  let parts1 = this.parts1
				
				  let product = parts1[keyID].xuanze
				
				
				  product.forEach((v, i) => i == subID ? v.imgVisible = true : v.imgVisible = false);
				
				
				  parts1[keyID].xuanze=product
				  this.parts1 = parts1
			},
			touchChend1(e){
				 const keyID = e.currentTarget.dataset.keyid*1
				  const subID = e.currentTarget.dataset.subid*1
				
				  
				
				  let parts1 = this.parts1
				
				  let product = parts1[keyID].xuanze
				
				
				  product.forEach((v, i) => i == subID ? v.imgVisible = false : v.imgVisible = false);
				
				
				  parts1[keyID].xuanze=product
				  this.parts1 = parts1
			},
			jian(){
				let num = this.num
				if(num<=1){
				num=1
				return num
				}
				let standardPriceSum = this.standardPriceSum/num
				let partsPriceSum = this.partsPriceSum/num
				let parts1PriceSum = this.parts1PriceSum/num
				num = num-1
				standardPriceSum = standardPriceSum*num
				partsPriceSum = partsPriceSum*num
				parts1PriceSum = parts1PriceSum*num
				  this.num = num
				  this.standardPriceSum = standardPriceSum
				  this.partsPriceSum = partsPriceSum
				  this.parts1PriceSum = parts1PriceSum
			},
			jia(){
				
				let num = this.num
				let standardPriceSum = this.standardPriceSum/num
				let partsPriceSum = this.partsPriceSum/num
				let parts1PriceSum = this.parts1PriceSum/num
				
				num = num+1
				standardPriceSum = standardPriceSum*num
				partsPriceSum = partsPriceSum*num
				parts1PriceSum = parts1PriceSum*num
				this.num = num
				this.standardPriceSum = standardPriceSum
				this.partsPriceSum = partsPriceSum
				this.parts1PriceSum = parts1PriceSum
			},
			dingdanTap(){
				 let goodsInfo = this.goodsInfo
				    const scrollImg = this.scrollImg
				    const shan = this.shan
				    const xing = this.xing
				    let partsArr = this.partsArr
				    let parts1Arr = this.parts1Arr
				    partsArr = partsArr.concat(parts1Arr)
				    goodsInfo.title = xing+shan
				    goodsInfo.partsArr = partsArr
				    goodsInfo.time = new Date()
				    const parts = this.parts
				    goodsInfo.standardPriceSum = this.standardPriceSum
				    goodsInfo.partsPriceSumCon = this.partsPriceSum+this.parts1PriceSum
				    goodsInfo.standardParts = this.standardPriceSum+this.partsPriceSum+this.parts1PriceSum
				    goodsInfo.square =(this.square).toFixed(2)
				    goodsInfo.width0 =this.width0
				    goodsInfo.width1 =this.width1
				    goodsInfo.width2 =this.width2
				    goodsInfo.height =this.height
				    goodsInfo.num = this.num
				    goodsInfo.img = scrollImg[0]
				    goodsInfo.checked = true
				   
				   this.goodsInfo = goodsInfo
				   const goodsInfoArr = uni.getStorageSync('goodsInfoArr') || []
				   goodsInfoArr.push(goodsInfo)
				   try {
				      uni.setStorageSync("goodsInfoArr",goodsInfoArr)
					    uni.showToast({
					     title: '加入成功',
					     icon: 'success',
					     mask: true
					   });
				   } catch (e) {
				       // error
				   }
				   // uni.setstos
				   // uni.request({
				   //         url: this.serverUrl+"api/data/car",
						 //   method:"POST",
						 //   data:{
							//    goodsInfo:goodsInfo
						 //   }
				   //     })
				   //     .then(data => {//data为一个数组，数组第一项为错误信息，第二项为返回数据
				   //         var [error, res]  = data;
				   //         console.log(res.data);
				   //     })
				   //   uni.showToast({
				   //    title: '加入成功',
				   //    icon: 'success',
				   //    mask: true
				   //  });
			},
			carTap(){
				uni.reLaunch({    
				
				    url:"../car/car"
				})
			}
			
			
		}
	}
</script>

<style>
	@import url("./hejin.css");
</style>
