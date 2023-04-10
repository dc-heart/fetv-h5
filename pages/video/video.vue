<template>
	<view>
		<!-- 头部区域 -->
		<index-header></index-header>
		<index-header-icon></index-header-icon>
		<!-- 内容区域 -->
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
			<video :src="item.video" object-fit="cover" class="content-video"></video>
			<!-- 根据返回的结果动态绑定类 -->
			<view :class="item.commentNum ? 'footer':''">
				<view :class="item.commentNum ? '':'content-footer'">
					<image src="../../static/教育网图片/g17.png" style="width: 25rpx;
	height: 23rpx;"></image>
					<text class="content-footer-title">{{item.browseNum}}</text>
				</view>
				<view class="content-footer" v-if="item.commentNum">
					<image src="../../static/教育网图片/g18.png" style="width: 25rpx;
	height: 23rpx;"></image>
					<text  class="content-footer-title">{{item.commentNum}}</text>
				</view>
				<view class="content-footer" v-if="item.likeNum">
					<image src="../../static/教育网图片/g19.png" style="width: 25rpx;
	height: 23rpx;"></image>
					<text  class="content-footer-title">{{item.likeNum}}</text>
				</view>
			</view>
			<!-- 分割线 -->
			 <o-divider margin="10rpx"></o-divider>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				video:[],
				id:'',
			};
		},
		methods:{
			// 跳转到视频详情页并传递id
			videoMore(e){
				console.log(e);
				uni.navigateTo({
					url:"/pages/video/video-details/video-details?informationId="+e
				})
			}
		},
		// 获取上个页面传递的id
		onLoad(options){
		    this.id = options.columnId;
		    console.log(this.id);
				},
		created() {
			// 根据id获取视频
			uni.showLoading({
				title: '加载中'
			});
			uni.request({
			url:`${this.baseUrl}/index/fetv/column?columnId=${this.id}`,
			method:'GET',
			success: (res) => {
			        this.video =res.data.rows[0].informationApiList
					console.log(this.video);
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
	.content-footer{
			margin-left: 136rpx;
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
