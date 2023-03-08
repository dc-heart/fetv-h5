<template>
	<view>
		<base-head></base-head>
		
		<view class="slider">
			<swiper :autoplay="true" :interval="3000" :duration="1000" :circular="true">
				<swiper-item v-for="(item,index) in items" :key="index++">
					<image :src="item.url" mode="scaleToFill"></image>
					<view class="shadow">
						<text>{{item.name}}</text>
						<text class="box1">{{index}}<text class="box2">/{{index}}</text></text>
					</view>
				</swiper-item>				
			</swiper>			
		</view>
		
		<view class="main" v-for="item in 5">
			<text>院校系列</text>
			<school-list :item="item" @click.native="goDetail(item)"></school-list>
		</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				items:[
					{
						url: "https://patchwiki.biligame.com/images/zspms/thumb/f/fb/dtkzupza4gyjzrbu03fk1w84kp6q1dm.png/280px-%E7%94%BB%E5%86%8C_%E6%B6%82%E8%A3%85%E7%9B%B8%E5%85%B3_%E5%B9%BD%E6%B6%A7%E9%9D%92%E5%8D%9E.png.jpeg",
						name: "福州大学"
					},
					{
						url: "https://patchwiki.biligame.com/images/zspms/thumb/c/c2/ke1kuw6eebnql9z1d9ogu4c33367e5v.png/280px-%E7%94%BB%E5%86%8C_%E6%B6%82%E8%A3%85%E7%9B%B8%E5%85%B3_%E6%B7%B1%E6%B5%B7%E5%B0%91%E5%A5%B3.png",
						name: "厦门大学"
					},
					{
						url: "https://patchwiki.biligame.com/images/zspms/thumb/3/35/38jlb52gxv6yhy0v0rl6eu4tfma55i0.png/280px-%E7%94%BB%E5%86%8C_%E6%B6%82%E8%A3%85%E7%9B%B8%E5%85%B3_%E6%9C%AB%E4%B8%96%E7%BB%80%E5%8D%8E.png",
						name: "泉州大学"
					},
					{
						url : "https://patchwiki.biligame.com/images/zspms/thumb/e/e2/6g71lrk7s696rjbmw6id6jyl4yhotqb.png/280px-%E7%94%BB%E5%86%8C_%E6%B6%82%E8%A3%85%E7%9B%B8%E5%85%B3_%E9%B3%9E%E6%B3%A2%E6%B2%AB%E8%88%9E.png",
						name: "重庆大学"
					}
					
				],
			};
		},
		onLoad() {
			
		},
		methods: {
			goDetail(item){
				uni.navigateTo({
					url:"/pages/detail/detail",					
				})
		    }
		}
	}
</script>

<style lang="scss" scoped>
* {
	width: 750rpx;
}

swiper {
	width: 730rpx;
	height: 460rpx;
	swiper-item {
		margin-left: 24rpx; 
		padding-top: 40rpx;
		width: 730rpx;
        height: 460rpx;
		position: relative;
		image {
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
			top: 392rpx;	
		
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
	}
	
}

	
.main {
	padding: 44rpx 0 0 30rpx;
	text {
		width: 134rpx;
		height: 33rpx;
		font-family: NotoSansHans-Bold;
		font-size: 34rpx;
		line-height: 68rpx;
		letter-spacing: 0rpx;
		color: #272727;	
	}
}

</style>
