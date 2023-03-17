<template>
	<view>
		<index-header></index-header>
		<index-header-icon></index-header-icon>
		
		<view class="content" v-for="item in video" :key="item.informationId" @click="videoMore(item.informationId)">
			<view class="fetv">
				<view class="fetv-cicle">
						<image src="../../static/教育网图片/logo2.png" style="width: 28rpx;
				height: 21rpx;"></image>
					</view>
				<text class="fetv-text">福建教育网</text>
			</view>
			<view class="content-title">
				{{item.title}}
			</view>
			<video :src="baseUrl+item.video" object-fit="cover" class="content-video"></video>
			<view class="footer">
				<view class="content-footer">
					<image src="../../static/教育网图片/g10.png" style="width: 25rpx;
	height: 23rpx;"></image>
					<text class="content-footer-title">{{item.browseNum}}万</text>
				</view>
				<view class="content-footer">
					<image src="../../static/教育网图片/g18.png" style="width: 25rpx;
	height: 23rpx;"></image>
					<text  class="content-footer-title">{{item.commentNum}}万</text>
				</view>
				<view class="content-footer">
					<image src="../../static/教育网图片/g19.png" style="width: 25rpx;
	height: 23rpx;"></image>
					<text  class="content-footer-title">{{item.likeNum}}</text>
					
				</view>
				
			</view>
			 <o-divider margin="10rpx"></o-divider>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				video:[]
			};
		},
		methods:{
			videoMore(e){
				console.log(e);
				uni.navigateTo({
					url:"/pages/video/video-details/video-details?informationId="+e
				})
			}
		},
		created() {
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
			url:`${this.baseUrl}/index/fetv/column/getVideoBySix?columnId=1`,
			method:'GET',
			success: (res) => {
			        console.log(res.data)
			        this.video =res.data.rows[0].informationApiList
					uni.hideLoading();
					}
		})
		}
	}
</script>

<style lang="scss" scoped>

.content{
	.fetv{
		margin-left: 24rpx;
		margin-top: 29rpx;
		width: 193rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.fetv-cicle{
			text-align: center;
			width: 44rpx;
			height: 44rpx;
			border-radius: 50%;
			background-color: #ffffff;
			border: solid 1rpx #eeeeee;
		}
		.fetv-text{
			font-family: NotoSansHans-Regular;
				font-size: 26rpx;
				font-weight: bold;
				font-stretch: normal;
				line-height: 22rpx;
		}
	}
	.content-title{
		margin-left: 23rpx;
	}
	.content-video{
		width: 750rpx;
		height: 427rpx;
		/deep/.uni-video-cover-play-button{
				width: 97rpx;
				height: 97rpx;
			background-image: url("../../static/教育网图片/g20.png");
			background-size: cover;
		}
		/deep/.uni-video-cover-duration{
			display: none;
		}
	}
	.footer{
		display: flex;
		justify-content: space-around;
		.content-footer-title{
			margin-left: 13rpx;
			font-family: NotoSansHans-Regular;
				font-size: 22rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 68rpx;
				letter-spacing: 0rpx;
				color: #747e8c;
		}
	}
}

</style>
