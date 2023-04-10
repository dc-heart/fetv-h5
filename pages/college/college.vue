<template>
	<view>
		<index-header></index-header>
		<index-header-icon></index-header-icon>
		<view class="slider">
			<swiper :autoplay="true" :interval="3000" :duration="1000" :circular="true">
				<swiper-item v-for="(item,index) in items" :key="index++">
					<image :src="baseUrl + item.firstImage" mode="scaleToFill"></image>
					<view class="shadow">
						<text>{{item.schoolName}}</text>
						<text class="box1">{{index}}<text class="box2">/{{items.length}}</text></text>
					</view>
				</swiper-item>				
			</swiper>			
		</view>
		
		<view class="content">
			<text>院校系列</text>
			<view class="main" v-for="item in newsArr" :key="item.id">
				<school-list :item="item" @click.native="goDetail(item)"></school-list>
			</view>
		</view>
	</view>
</template>

<script>
	// import school from '../../components/school-list/school-list.vue'

	export default {
		data() {
			return {
				items:[],
				newsArr:[]
			};
		},
		// components: {
		// 	school: "school-list"
		// },
		onLoad() {
			this.getswiperImg();
			this.getschool();
		},
		methods: {
			// 跳转detail详情页
			goDetail(item){
				console.log(item.schoolId);
				uni.navigateTo({
					url:`/pages/detail/detail?sid=${item.schoolId}`,				 
				})
		    },
			// 获取轮播图
			getswiperImg(){
				uni.request({
					url: `${this.baseUrl}/index/fetv/school/schoolList`,
					methods: "GET",
					success: (res) => {
						console.log(res);
						if(res.statusCode == 200){
							console.log("请求成功");
							this.items = res.data.rows
						}
					}
				})
			},
			// 获取院校系列
			getschool(){
				uni.request({
					url: `${this.baseUrl}/index/fetv/school/schoolList`,
					methods: "GET",
					success: (res) => {
						console.log(res);
						if(res.statusCode == 200){
							console.log("请求成功");
							this.newsArr = res.data.rows
						}
					}
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

	
.content {
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
