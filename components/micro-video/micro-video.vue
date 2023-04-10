<template>
	<view>
		<!-- 微视频 -->
				<view class="micro-video">
					<view class="micro-video-title">
						微视频
					</view>
					<text class="micro-video-more" @click="viedosMore">
						查看更多
					</text>
				</view>
				<scroll-view scroll-x="true" style="white-space: nowrap" show-scrollbar>
					<view class="specialcontent"  v-for="item in video" :key="item.informationId" @click="videoDetails(item.informationId)">
							<image :src="item.image" class="specialimg"></image>
							<text class="specialtitle">{{item.title}}</text>
					</view>
				</scroll-view>
				</uni-section>	
	</view>
</template>

<script>
	export default {
		name:"micro-video",
		data() {
			return {
				video:[],
			}
		},
		created() {
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
			url:`${this.baseUrl}/index/fetv/column?columnId=10`,
			method:'GET',
			success: (res) => {
				 
					this.video =res.data.rows[0].informationApiList
					console.log(this.video);
					uni.hideLoading();
					}
			})
		},
		methods:{
			viedosMore(){
				uni.navigateTo({
					url:'/pages/video/video?columnId=10'
				})
			},
			videoDetails(e){
				uni.navigateTo({
					url:"/pages/video/video-details/video-details?informationId="+e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.micro-video{
	align-items: center;
	display: flex;
	justify-content: space-between;
	.micro-video-title{
		margin-left: 28rpx;
		font-size: 34rpx;
		font-weight: normal;
		font-stretch: normal;
		line-height: 68rpx;
		letter-spacing: 0rpx;
		color: #272727;
		}
	.micro-video-more{
		margin-right: 27rpx;
		font-family: NotoSansHans-Regular;
		font-size: 22rpx;
		font-weight: normal;
		font-stretch: normal;
		line-height: 68rpx;
		letter-spacing: 0rpx;
		color: #676767;
	}
}
/deep/ .uni-scroll-view-content{
	display: flex;
	justify-content: space-between;
}
.specialcontent{
position: relative;
height: 270rpx;
	.specialimg{
		margin-left: 23rpx;
		display: inline-block;
		width: 383rpx;
		height: 214rpx;
		line-height: 300rpx;
		text-align: center;
		ont-size: 36rpx;
	}
	.specialtitle{
		position: absolute;
		left: 40rpx;
		top: 214rpx;
		font-family: NotoSansHans-Regular;
		font-size: 28rpx;
		font-weight: normal;
		font-stretch: normal;
		line-height: 68rpx;
		letter-spacing: 0rpx;
		color: #000000;
	}
}
</style>