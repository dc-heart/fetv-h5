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
								<view class="specialcontent"  v-for="item in video" :key="item.informationId">
									<image :src="baseUrl+item.image" class="specialimg"></image>
									<text class="specialtitle">{{item.title}}</text>
									
								
									<!-- <image src="../../static/教育网图片/p18.jpg" class="specialimg" ></image> -->
									<!-- <text class="specialtitle2">宁德脚步纪录片</text> -->
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
			uni.request({
				url:`${this.baseUrl}/index/fetv/column/getVideoBySix?columnId=1`,
				method:'GET',
				success: (res) => {
				        console.log(res.data);
				        this.video =res.data.rows[0].informationApiList
				    }
			})
		},
		methods:{
			viedosMore(){
				uni.navigateTo({
					url:'/pages/video/video'
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