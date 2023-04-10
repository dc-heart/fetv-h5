<template>
	<view>
		<!-- 头部区域 -->
		<index-header></index-header>
		<index-header-icon></index-header-icon>
		<view class="fetv">
			<view class="fetv-cicle">
					<image src="/static/教育网图片/logo2.png" style="width: 28rpx;height: 21rpx;"></image>
			</view>
			<view class="fetv-footer">
				<text class="fetv-text">福建教育网</text>
			</view>
		</view>
		<button size="mini" type="warn" class="concern" @click="concernclick" v-show="concern===0">关注</button>
		<button size="mini" type="warn" class="concern" v-show="concern===1">已关注</button>
		<video :src="videodetails.video" object-fit="cover" class="content-video"></video>
				<view class="content-title">
					{{videodetails.title}}
				</view>
				<!-- 视频尾部区域 -->
				<view class="footer">
					<view class="content-footer">
						<text class="content-footer-title">{{videodetails.browseNum}}次播放</text>
					</view>
					<view class="content-footer">
						<text  class="content-footer-title">发布时间:{{videodetails.createTime}}</text>
					</view>
				</view>
				<!-- 视频内容区域 -->
				<view class="content-details">
					{{videodetails.content}}
				</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				informationId:'',
				videodetails:{},
				concern:0
			};
		},
		methods:{
			concernclick(){
				uni.showToast({
					title: '已关注',
					duration: 1000,
					image:"/static/教育网图片/r3.png",
					
				});
				this.concern=1
			}
		},
		// 取出传递的id
		onLoad(options) {
			this.informationId=options.informationId
			console.log(this.informationId);
		},
		created() {
			// 根据id获取新闻详情信息
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
			url:`${this.baseUrl}/index/fetv/information/getVideo?informationId=${this.informationId}`,
			method:'GET',
			success: (res) => {
					console.log(res.data.data)
					this.videodetails =res.data.data
					console.log(this.videodetails);
					uni.hideLoading();
					}
			})
		}
	}
</script>

<style lang="scss" scoped>
.fetv{
		width: 193rpx;
		margin-left: 24rpx;
		margin-top: 29rpx;
		display: flex;
		justify-content: space-between;
		.fetv-cicle{
			text-align: center;
			width: 44rpx;
			height: 44rpx;
			border-radius: 50%;
			background-color: #ffffff;
			border: solid 1rpx #eeeeee;
		}
		.fetv-footer{
			// display: flex;
			// flex-direction: column;
			.fetv-text{
					font-family: NotoSansHans-Regular;
					font-size: 26rpx;
					font-weight: bold;
					font-stretch: normal;
					line-height: 22rpx;
					color: #000000;
				}
				.fetv-fan{
					margin-top: -8rpx;
					font-family: NotoSansHans-Regular;
					font-size: 22rpx;
					font-weight: normal;
					font-stretch: normal;
					line-height: 68rpx;
					color: #666666;
			}
		}
	}
.concern{
	position: absolute;
	right: 21rpx;
	top: 172rpx;
	width: 148rpx;
		height: 62rpx;
		background-color: #ba0825;
		border-radius: 31rpx;
}
.content-video{
		width: 750rpx;
		height: 427rpx;
		margin-top: 20rpx;
		/deep/.uni-video-cover-play-button{
				width: 97rpx;
				height: 97rpx;
			background-image: url("/static/教育网图片/g20.png");
			background-size: cover;
		}
		/deep/.uni-video-cover-duration{
			display: none;
		}
	}
.content-title{
		margin-left: 23rpx;
	}
.footer{
		display: flex;
		justify-content: flex-start;
		.content-footer-title{
			margin-left: 22rpx;
			font-family: NotoSansHans-Regular;
				font-size: 22rpx;
				font-weight: normal;
				font-stretch: normal;
				line-height: 68rpx;
				letter-spacing: 0rpx;
				color: #747e8c;
		}
	}
.content-details{
	margin-left: 28rpx;
	font-family: NotoSansHans-Regular;
	font-size: 28rpx;
	font-weight: normal;
	font-stretch: normal;
	line-height: 48rpx;
	letter-spacing: 0rpx;
	color: #757575;
}
</style>
