<template>
	<view class="schoolList">
		<view class="schoolPicture">
			<!-- aspectFill 等比缩放不失真 -->
			<image :src="baseUrl + item.firstImage" mode="scaleToFill"></image>
		</view>
		<view class="schoolText">
			<view class="schoolName">{{item.schoolName}}</view>
			<view class="schoolAddress">{{item.schoolAddress}}</view>
			<view class="title">
				<text>本科院校</text>
				<text>硕士院校</text>
				<text>985国家重点</text>
			</view>
			<view class="nature">
				<text>学校性质 重点学校</text>
			</view>
			<view class="about">
				<uni-icons type="right"></uni-icons>
				<text>了解更多</text>
			</view>
		</view>
	</view>
</template>

<script>

export default {
	
	name:"school-list",
	props:{
		item:{
			type: Object,
			default(){
				return {
					firstImage:"../../static/教育网图片/p16.jpg",
					schoolAddress:"",
					schoolId:"",
					schoolName:""
				}
			}
		}
	},
	
	data() {
		return {	
		};
	},
	onLoad() {
	},
}
</script>

<style lang="scss" scoped>
.schoolList{
	display: flex;
	.schoolPicture{
		width: 262rpx;
		height: 212rpx;
		border-radius: 8rpx;
		padding-bottom: 30rpx;
		
		image{
			width: 100%;
			height: 100%;
		}
	}
	.schoolText{	
		flex:1;
		padding-left:20rpx;
		.schoolName{
			width: 200rpx;
			height: 29rpx;
			font-family: NotoSansHans-Bold;
			font-size: 30rpx;
			color: #272727;
		}
		.schoolAddress {
			font-size: 16rpx;
			color:#ccc;
			position: absolute;
			right: 10rpx;
		}
		.title {
			width: 360rpx;
			margin-top: 30rpx;
			display: flex;
			justify-content: space-between;
			text {	
				background-color:rgba(200,200,200,0.2);
				font-size: 22rpx;
				color: #ba0825;	
			}
		}
		.nature {
			padding-top: 28rpx;
			width: 196rpx;
			height: 23rpx;
			text {
				font-size: 24rpx;
				color: #676767;
			}
		}
		.about {		
			margin-top: 40rpx;
			padding-right: 60rpx;
			display: flex;
			flex-direction: row-reverse;
			text {
				font-size: 24rpx;
				color: #ababab;
			}
			
		}
	}
}


</style>