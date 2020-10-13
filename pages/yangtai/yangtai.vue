<template>
	<view class="page">
		<view class="frame">
		    <view class="chang">
		        <view>高/米</view>
		        <input type="digit" @input="heightTap" />
		        <view class="nav">
		            <view class="url" @tap="urlTap">➤前往洞口窗</view>
		            <navigator class="url" url="../hejin/hejin">➤前往钛镁合金门</navigator>
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
		    <view>左宽/米
		    <input type="digit" @input="widthTap1" />
		    </view>
		    <view>中宽/米
		    <input type="digit" @input="widthTap" />
		    </view>
		    <view>右宽/米
		    <input type="digit" @input="widthTap2" />
		    </view>
		
		</view>
		
		<view class="content">
		    <block  v-for="item in shuju">
		        <view>{{item.title}}</view>
		        <view class="smallImgBox">
		            <view v-for="itemSub in item.xuanze"    class="smallImg " :class="itemSub.isActive===true?'active':''" @tap="imgTap" :data-keyID="item.keyID" :data-jiaoPrice="itemSub.jiaoPrice" :data-subID="itemSub.subID"  >
		                <view>{{itemSub.title}}</view>
		                <image mode="widthFix" :src="itemSub.img" alt="" />
		            </view>
		        </view>
		    </block>
		    <block v-if="shujuSubID==1">
		        <block  v-for="item in shanU">
		            <view>{{item.title}}</view>
		            <view class="smallImgBox">
		                <view v-for="(itemSub,index) in item.xuanze"   class="smallImg" :class=" itemSub.isActive===true?'active':''" @tap="shanUTap" :data-keyID="item.keyID"  :data-subNum="itemSub.subNum" :data-subID="itemSub.subID">
		                    <view>{{itemSub.title}}</view>
		                    <image mode="widthFix" :src="itemSub.img" alt="" />
		                </view>
		            </view>
		        </block>
		    </block>
		    <block v-if="shujuSubID==0">
		        <block  v-for="item in shanL">
		            <view>{{item.title}}</view>
		            <view class="smallImgBox">
		                <view v-for="(itemSub,indexSub) in item.xuanze"  class="smallImg" :class="itemSub.isActive===true?'active':''" @tap="shanLTap" :data-keyID="item.keyID" :data-subNum="itemSub.subNum" :data-subID="itemSub.subID">
		                    <view>{{itemSub.title}}</view>
		                    <image mode="widthFix" :src="itemSub.img" alt="" />
		                </view>
		            </view>
		        </block>
		    </block>
		    <block v-for="item in parts">
		        <view>{{item.title}}</view>
		        <view class="xuanxiang">
		            <block v-for="(itemSub,indexSub) in item.xuanze" >
		                <view @tap="wordTap" @touchstart="touchStart" @touchend="touchChend" :data-keyID="item.keyID"  :data-subID="itemSub.subID"  class="word" :class="itemSub.isActive===true?'active':''" >
		                    <image :class="itemSub.imgVisible===true?'imgVisible':''" mode="widthFix" :src="itemSub.img" />
		                    {{itemSub.title}}
		                </view>
		            </block>
		        </view>
		    </block>
		    <block  v-for="item in parts1" >
		        <view>{{item.title}}</view>
		        <view class="xuanxiang">
		            <block v-for="(itemSub,indexSub) in item.xuanze"  >
		                <view @tap="parts1Tap" @touchstart="touchStart1" @touchend="touchChend1" :data-keyID="item.keyID" :data-subID="itemSub.subID" class="word" :class="itemSub.isActive===true?'active':''">
		                    <image :class="itemSub.imgVisible===true?'imgVisible':''" mode="widthFix" :src="itemSub.img" />
		                    {{itemSub.title}}
		                </view>
		            </block>
		        </view>
		    </block>
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
				    shanPrice:0,
				    partsPrice:0,
				    shujuSubID:0,
				    shujuKeyID:0,
				    keyID:0,
				    subID:0,
				    parts1:0,
				    parts1Price:0,
				    parts1PriceSum:0,
				    shan:'扇窗',
				    xing:'',
				    chuang:'',
				    partsArr:[],
				    parts1Arr:[],
				    goodsInfo:{},
				    arr:[],
				    shanL:[],
				    shanU:[],
				    imageIndex:0,
				    subNum:0,
				    jiaoPrice2:0,
				    scrollImg:["https://6266-bfxy-hpbml-1302612614.tcb.qcloud.la/%E4%BA%A7%E5%93%81/%E9%97%A8%E7%AA%97%E6%B5%B7%E6%8A%A52.jpg?sign=005c4b92c0a36a448e1412aa15a47d9c&t=1597112626"]
			}
		},
		methods:{
			swiperTap(e){
			    
			    const subID = this.subID
			    const keyID = this.keyID
			    const standardPrice= this.standardPrice
			    const current = e.detail.current
			    const num = this.num
			    const subNum = this.subNum
			
			    const jiaoPrice2= this.jiaoPrice2
			    let shanPrice = this.shanPrice
			    let shan = this.shan
			    if(keyID==0){
			      shanPrice = this.shanL[0].scrollimg[subID][current].price
			      shan = this.shanL[0].scrollimg[subID][current].title
			    }
			    if(keyID==1){
			
			
			      shanPrice = this.shanU[0].scrollimg[subID][current].price
			      shan = this.shanU[0].scrollimg[subID][current].title
			    }
			
			    const square = this.square
			    let standardPriceSum = this.standardPriceSum
			    standardPriceSum = Math.round((standardPrice+shanPrice)*square*num)+jiaoPrice2
			    if((square+0.5)/3.3<(subNum)&&square>0){
			      standardPriceSum = standardPriceSum+300
			    } 
				    
			      this.shanPrice = shanPrice
			      this.standardPriceSum = shanPrice
			      this.shan = shanPrice
			      this.current = shanPrice
			      

			  },
			  imgTap(e){
			    const imgKeyID = e.currentTarget.dataset.keyid*1
			    const imgSubID = e.currentTarget.dataset.subid*1
			    const jiaoPrice = e.currentTarget.dataset.jiaoprice*1
				
			    const subNum = this.subNum
			    const num = this.num
			    let xing = this.xing
			    let jiaoPrice2= this.jiaoPrice2
				console.log(jiaoPrice2)
			    let chuang = this.chuang
			    const shanPrice = this.shanPrice
			    let shuju = this.shuju
			    let standardPriceSum = this.standardPriceSum
			    const square = this.square
			    let  shanU = this.shanU
			    let  shanL = this.shanL
			    let product = shuju[imgKeyID].xuanze
			 
			    let standardPrice = 0
			    
console.log(typeof(jiaoPrice2))
			    if(typeof(jiaoPrice2)!="number"){
			      jiaoPrice2 = jiaoPrice
			      console.log(111)
			    }
			
			    if(imgKeyID==0){
					
			      shanU[0].xuanze.forEach(v=>v.isActive=false)
			      shanL[0].xuanze.forEach(v=>v.isActive=false)
			
			      chuang = this.shuju[0].xuanze[imgSubID].title
			
			   }else{
			     xing = this.shuju[1].xuanze[imgSubID].title
			   }
			
			   console.log(jiaoPrice2)
			    product.forEach((v, i) => i === imgSubID ? v.isActive = true : v.isActive = false);
			    for(let i = 0; i<shuju.length; i++){
			      for(let y =0; y<shuju[i].xuanze.length; y++){
			        if(shuju[i].xuanze[y].isActive){
			  
			          standardPrice+=shuju[i].xuanze[y].price
			
			        }
			      }
			    }
			    
	
			    standardPriceSum = Math.round((standardPrice+shanPrice)*square*num)+jiaoPrice2
			
			    if((square+0.5)/3.3<(subNum)&&square>0){
			      standardPriceSum = standardPriceSum+300
			    } 
			 
			
			    
			    shuju[imgKeyID].xuanze=product
			    let shujuSubID = this.shujuSubID
			    if(imgKeyID==0){
			     shujuSubID = imgSubID
			    }
			
		// console.log(standardPriceSum)
			      this.shuju = shuju
			      this.standardPrice = standardPrice
			      this.standardPriceSum = standardPriceSum
			      this.imageIndex = 0
			      this.shujuSubID = shujuSubID
			      this.jiaoPrice2 = jiaoPrice2
			      this.xing = xing
			      this.chuang = chuang
			      this.shanU = shanU
			      this.shanL = shanL
		
			  },
			  shanUTap(e){
			  
			    const subID = e.currentTarget.dataset.subid*1
			    const keyID = e.currentTarget.dataset.keyid*1
			    const subNum = e.currentTarget.dataset.subnum*1
			    const jiaoPrice2= this.jiaoPrice2
			    let scrollImg = this.scrollImg
			    const num= this.num
			    let shanU = this.shanU
			    
			    let standardPriceSum = this.standardPriceSum
			    const standardPrice = this.standardPrice
			    const square = this.square
			    let product = shanU[0].xuanze
			    let shanPrice = 0
			
			    const shan = this.shanU[0].scrollimg[subID][0].title
			  
			    product.forEach((v, i) => i === subID ? v.isActive = true : v.isActive = false);
			    for(let i = 0; i<shanU.length; i++){
			      for(let y =0; y<shanU[i].xuanze.length; y++){
			        if(shanU[i].xuanze[y].isActive){
			  
			          shanPrice+=shanU[i].xuanze[y].price
			        }
			      }
			    }
			
			    standardPriceSum = Math.round((shanPrice+standardPrice)*square)*num+jiaoPrice2
			      scrollImg = []
			      shanU[0].scrollimg[subID].forEach(v=> 
			        scrollImg.push(v.img)
			        )
			
			
			        shanU[0].xuanze=product
			        if((square+0.5)/3.3<(subNum)&&square>0){
			          standardPriceSum = standardPriceSum+300
			        } 
			

			      this.shanU = shanU
			      this.shanPrice = shanPrice
			      this.standardPriceSum = standardPriceSum
			      this.scrollImg = scrollImg
			      this.subID = subID
			      this.keyID = keyID
			      this.subNum = subNum
			      this.shan = shan
			      this.imageIndex = 0
			    
			  },
			  shanLTap(e){
			    
			    const subID = e.currentTarget.dataset.subid*1
			    const keyID = e.currentTarget.dataset.keyid*1
			    const subNum = e.currentTarget.dataset.subnum*1
			    const jiaoPrice2= this.jiaoPrice2
			    const num= this.num
			    // let scrollImg = this.scrollImg
			    // const current = this.current
			    let shanL = this.shanL
			    let standardPriceSum = this.standardPriceSum
			    const standardPrice = this.standardPrice
			    const square = this.square
			    let product = shanL[0].xuanze
			    let shanPrice = 0
			
			    const shan = this.shanL[0].scrollimg[subID][0].title
			
			    product.forEach((v, i) => i === subID ? v.isActive = true : v.isActive = false);
			    for(let i = 0; i<shanL.length; i++){
			      for(let y =0; y<shanL[i].xuanze.length; y++){
			        if(shanL[i].xuanze[y].isActive){
			  
			          shanPrice+=shanL[i].xuanze[y].price
			        }
			      }
			    }
			
			    standardPriceSum = Math.round((shanPrice+standardPrice)*square)*num+jiaoPrice2
			      let scrollImg = []
			      shanL[0].scrollimg[subID].forEach(v=> 
			        scrollImg.push(v.img)
			        )
			
			        shanL[0].xuanze=product
			        if((square+0.5)/3.3<(subNum)&&square>0){
			          standardPriceSum = standardPriceSum+300
			        }  
			       

			      this.shanL = shanL
			      this.shanPrice = shanPrice
			      this.standardPriceSum = standardPriceSum
			      this.scrollImg = scrollImg
			      this.subID = subID
			      this.keyID = keyID
			      this.subNum = subNum
			      this.shan = shan
			      this.imageIndex = 0

			  },
			
			widthTap(e){
			  const width0 = e.detail.value*1
			  const width1 = this.width1*1
			  const width2 = this.width2*1
			  const width = width0 +width1+width2
			  const height = this.height
			  const subNum = this.subNum
			  const jiaoPrice2= this.jiaoPrice2
			  const standardPrice = this.standardPrice
			  const shanPrice = this.shanPrice
			  let num = this.num
			  let square = width*height
			  if(square<1.5&&square>0){
			    square= 1.5
			  }
			
			  let standardPriceSum =Math.round(square*(standardPrice+shanPrice)) *num+jiaoPrice2
			  const partsPriceSum =Math.round(square*this.partsPrice) *num
			  if((square+0.5)/3.3<(subNum)&&square>0){
			    standardPriceSum = standardPriceSum+300
			  } 
			  if(standardPriceSum==null){
			    standardPriceSum=0
			  }

			    this.standardPriceSum = standardPriceSum
			    this.partsPriceSum = partsPriceSum
			    this.width0 =  width0
			    this.square = square
	
			},
			widthTap1(e){
			  const width1 = e.detail.value*1
			  const width0 = this.width0*1
			  const width2 = this.width2*1
			  const width = width0 +width1+width2
			  const height = this.height
			  const subNum = this.subNum
			  const jiaoPrice2= this.jiaoPrice2
			  const standardPrice = this.standardPrice
			  const shanPrice = this.shanPrice
			  const num = this.num
			  let square = width*height
			  if(square<1.5&&square>0){
			    square= 1.5
			  }
			 
			  let standardPriceSum =Math.round(square*(standardPrice+shanPrice)) *num+jiaoPrice2
			  const partsPriceSum =Math.round(square*this.partsPrice) *num
			  if((square+0.5)/3.3<(subNum)&&square>0){
			    standardPriceSum = standardPriceSum+300
			  } 
			  if(standardPriceSum==null){
			    standardPriceSum=0
			  }
	
			    this.standardPriceSum = standardPriceSum
			    this.partsPriceSum = partsPriceSum
			    this.width1 = width1
			    this.square = square
			  
			},
			widthTap2(e){
			  const width2 = e.detail.value*1
			  const width1 = this.width1*1
			  const width0 = this.width0*1
			  const width = width0 +width1+width2
			  const height = this.height
			  const subNum = this.subNum
			  const jiaoPrice2= this.jiaoPrice2
			  const standardPrice = this.standardPrice
			  const shanPrice = this.shanPrice
			  const num = this.num
			  let square = width*height
			  if(square<1.5&&square>0){
			    square= 1.5
			  }
			
			  let standardPriceSum =Math.round(square*(standardPrice+shanPrice)) *num+jiaoPrice2
			  const partsPriceSum =Math.round(square*this.partsPrice) *num
			  if((square+0.5)/3.3<(subNum)&&square>0){
			    standardPriceSum = standardPriceSum+300
			  } 
			  if(standardPriceSum==null){
			    standardPriceSum=0
			  }
	
			    this.standardPriceSum = standardPriceSum 
			    this.partsPriceSum = partsPriceSum
			    this.width2 = width2
			    this.square = square
			  },
			
			heightTap(e){
			  let height = e.detail.value
			  const width = this.width
			  const subNum = this.subNum
			  const jiaoPrice2= this.jiaoPrice2
			  let standardPrice = this.standardPrice
			  const shanPrice = this.shanPrice
			  const num = this.num
			  let square = width*height
			  if(square<1.5&&square>0){
			    square= 1.5
			  }  
			
			  let standardPriceSum =Math.round(square*(standardPrice+shanPrice)) *num+jiaoPrice2
			  const partsPriceSum =Math.round(square*this.partsPrice) *num
			
			  if((square+0.5)/3.3<(subNum)&&square>0){
			    standardPriceSum = standardPriceSum+300
			  } 
			  if(standardPriceSum==null){
			    standardPriceSum=0
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
			
			
			
			carTap(){
			
			  uni.reLaunch({    
			
			    url:"../car/car"
			})
			},
			dingdanTap (e) {
			
			    let goodsInfo = this.goodsInfo
			    const scrollImg = this.scrollImg
			    const current = this.current
			    
			    const shan = this.shan
			    const xing = this.xing
			    const chuang = this.chuang
			    let partsArr = this.partsArr
			    let parts1Arr = this.parts1Arr
			    partsArr = partsArr.concat(parts1Arr)
			    goodsInfo.title =chuang+xing+shan
			    goodsInfo.partsArr = partsArr
			    goodsInfo.time = new Date()
			    const parts = this.parts
			    goodsInfo.standardPriceSum = this.standardPriceSum
			    goodsInfo.partsPriceSumCon = this.partsPriceSum+this.parts1PriceSum
			    goodsInfo.standardParts = this.standardPriceSum+this.partsPriceSum+this.parts1PriceSum
			    goodsInfo.square =(this.square).toFixed(2)
			    goodsInfo.width1 =this.width1
			    goodsInfo.width0 =this.width0
			    goodsInfo.width2 =this.width2
			    goodsInfo.height =this.height
			    goodsInfo.num = this.num
			    goodsInfo.img = scrollImg[current]
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
			
			},
			urlTap(){
			
			  uni.reLaunch({
			    url:'../dongkou/dongkou'
			  })
			  
			},
		},
		onLoad() {
			uni.request({
				url:this.serverUrl+"api/data/yangtai",
				success:(res)=>{

					this.shuju = res.data.data[0].shuju
					this.parts = res.data.data[0].parts
					this.parts1 = res.data.data[0].parts1
					this.shanL = res.data.data[0].shanL
					this.shanU = res.data.data[0].shanU
					console.log(res.data.data[0])
				}
			});
		}
	}
</script>

<style>
	@import url("./yangtai.css");
</style>
