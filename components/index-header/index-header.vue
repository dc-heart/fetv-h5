<template>
		<!-- 头部区域 -->
		<view class="header">
			<image class="fetv" src="/static/教育网图片/logo.png" mode="scaleToFill"></image>
			<text class="title">福建教育网 www.fetv.cn</text>
			<text class="supervisor" >主管:福建省委教育工委、福建省教育厅</text>
			<text class="host">主办:福建教育电视台</text>
		</view>

</template>

<script>
	export default {
		name:"index-header",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.header{
	position: relative;
	width: 750rpx;
	height: 149rpx;
	background-color: #ba0825;
	.fetv{
		width: 116rpx;
		height: 88rpx;
		margin-left: 29rpx;
		margin-top: 33rpx;
	}
	.title{
		position: absolute;
		width: 346rpx;
		height: 30rpx;
		left: 162rpx;
		top: 33rpx;
		color:#ffdcab ;
		font-size: 30rpx;
	}
	.supervisor{
		position: absolute;
		left: 165rpx;
		top: 84rpx;
		font-size: 22rpx;
		line-height: 14rpx;
		color: #ffdcab;
		opacity: 0.5;
	}
	.host{
		position: absolute;
		left: 165rpx;
		bottom: 10rpx;
		font-size: 22rpx;
		color: #ffdcab;
		opacity: 0.5;	
	}
}
</style>