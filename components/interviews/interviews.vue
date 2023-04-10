<template>
	<view>
		<!-- 直播访谈 -->
		<uni-section titleFontSize="34rpx" title="直播访谈" style="margin-left: 30rpx; margin-top: 65rpx;">
			<template v-slot:right>
				<text style="font-size: 11px; color: #676767; margin-right: 26rpx" @click="interviewsMore">查看更多</text>
			</template>
			<scroll-view scroll-x="true" style="white-space: nowrap" show-scrollbar>
			<view class="specialcontent" v-for="item in interviews" :key="item.informationId" @click="interviewsDetails(item.informationId)">
				<image :src="item.image" class="specialimg">
					<text class="wonderful-replays">精彩回放</text>
				</image>
				<text class="specialtitle">{{item.title}}</text>
			</view>
			</scroll-view>
			<image src="../../static/教育网图片/p9.png" style="width:705rpx;height: 213rpx;margin-top: 60rpx; margin-left: 24rpx;"></image>	
		</uni-section>
	</view>
</template>

<script>
	export default {
		name:"interviews",
		data() {
			return {
				interviews:[],
			};
		},
		methods:{
			interviewsDetails(e){
				uni.navigateTo({
					url:"/pages/video/video-details/video-details?informationId="+e
				})
			},
			interviewsMore(){
				uni.navigateTo({
					url:'/pages/video/video?columnId=13'
				})
			}
		},
		created() {
			uni.showLoading({
					title: '加载中'
				});
				uni.request({
				url:`${this.baseUrl}/index/fetv/column?columnId=13`,
				method:'GET',
				success: (res) => {
					// 获取数据并存储
					this.interviews =res.data.rows[0].informationApiList
					console.log(this.interviews);
					uni.hideLoading();
					}
			})
		}
	}
</script>

<style lang="scss">
.specialcontent{
	position: relative;
		height: 340rpx;
		.specialimg{
			display: inline-block;
			width: 383rpx;
			height: 285rpx;
			margin: 26rpx 0 0 25rpx;
			margin-top: 26rpx;
		}
		.specialtitle{
			position: absolute;
			left: 50rpx;
			top: 308rpx;
			
		}
		.specialtitle2{
			position: absolute;
			left: 460rpx;
			top: 308rpx;
		}
		.wonderful-replays{
			position: absolute;
			left: 40rpx;
			top: 36rpx;
			background-color: #00d975;
			border-radius: 8rpx;
			font-size: 24rpx;
			line-height: 34rpx;
			color: #ffffff;
		}
	}
/deep/ .uni-scroll-view-content{
	display: flex;
	justify-content: space-between;
}
</style>