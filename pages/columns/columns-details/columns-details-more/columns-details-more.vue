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
		<video :src="list.video" object-fit="cover" class="content-video"></video>
				<view class="content-title">
					{{list.text}}
				</view>
				<!-- 视频尾部区域 -->
				<view class="footer">
					<view class="content-footer">
						<text class="content-footer-title">{{list.browsernum}}次播放</text>
					</view>
					<view class="content-footer">
						<text  class="content-footer-title">发布时间:<uni-dateformat :date="list.time"
										format="yyyy/MM/dd"></uni-dateformat></text>
					</view>
				</view>
				<!-- 视频内容区域 -->
				<view class="content-details">
					{{list.text}}
				</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				informationId:'',
				videodetails:{},
				list:[],
				id:'',
				concern:0
			};
		},
		onLoad(e){
			this.id=e.id
			this.getData()
		},
		methods:{
			getData(){
				console.log(this.id);
				uniCloud.callFunction({
					name:"columns_get_row",
					data:{
						id:this.id
					}
				}).then(res=>{
					console.log(res);
					this.list=res.result.data[0]
					console.log(this.list);
				})
				},
			concernclick(){
				uni.showToast({
					title: '已关注',
					duration: 1000,
					image:"/static/教育网图片/r3.png",
					
				});
				this.concern=1
			}
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
