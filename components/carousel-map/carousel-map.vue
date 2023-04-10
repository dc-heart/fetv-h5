<template>
	<view>
		<!-- 轮播图 -->
		<swiper  :autoplay="true" :interval="3000" :duration="1000" style="width: 705rpx; height: 424rpx;margin-left: 24rpx;margin-top: 41rpx;">
			<swiper-item v-for="(item,index) in img" :key="index++">
				        					<image class="content-image" :src="item.url" mode="scaleToFill"></image>
											<view class="shadow">
											      <text >{{item.name}}</text>
											      <text class="box1">{{index}}<text class="box2">/{{img.length}}</text></text>
											</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name:"carousel-map",
		data() {
			return {
				img:[
				     {
					  url:"../../static/教育网图片/p2.jpg",
				      name: " 福州鼓楼：这些劳动“小达人”太会了"
				     },
				     {
						url: "../../static/教育网图片/p3.jpg",
				      name: "勤俭节约，牢记心中"
				     },
				     {
						url:"../../static/教育网图片/p7.png",
				      name: "勤俭节约，牢记心中"
				     },
				     {
						 url:"../../static/教育网图片/p5.jpg",
				      name: "勤俭节约，牢记心中"
				     },
					 {
						 url:"../../static/教育网图片/p4.jpg" ,
						 name:"勤俭节约，牢记心中"
					 }
				    ],
			};
		}
	}
</script>

<style lang="scss">
	.content-image{
	width: 705rpx;
	height: 424rpx;
		}
	.shadow {
   width: 704rpx;
   height: 70rpx;
   border-radius: 12rpx;
   background-color: #000000;
   opacity: 0.45;
   position: absolute;
   top: 353rpx; 
  
   font-family: NotoSansHans-Bold;
   font-size: 26rpx;
   line-height: 68rpx;
   color: #ffffff;
   text-align: center;
   .box1 {
    width: 12rpx;
    height: 29rpx;
    font-family: AdobeKaitiStd-Regular;
    font-size: 38rpx;
    line-height: 68rpx;
    letter-spacing: 0rpx;
    color: #ffffff;
    position: absolute;
    left: 40rpx;
   }
   .box2 {
    width: 26rpx;
    height: 20rpx;
    font-family: AdobeKaitiStd-Regular;
    font-size: 24rpx;
    line-height: 68rpx;
    letter-spacing: 1rpx;
    color: #ffffff;
    
   }
  }
</style>