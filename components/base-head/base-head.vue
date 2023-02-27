<template>
	<view class="currency-contain">
		<view class="content">
			<!-- logo -->
			<image src="../../static/教育网图片/logo.png" mode="" style="width: 116rpx;height: 88rpx;margin-right: 20rpx;">
			</image>

			<!-- 标题 -->
			<view class="title-contain">
				<view class="title">福建教育网 www.fetv.cn</view>
				<view class="other-title">主管：福建省委教育工委、福建省教育厅</view>
				<view class="other-title">主办：福建教育电视台</view>
			</view>
		</view>

		<!-- 搜索框或者按钮 -->
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: "base-head",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.currency-contain {
		height: 149rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background-color: #ba0825;
		padding: 0 19rpx;

		.content {
			display: flex;
			flex-direction: row;
			
			.title-contain {
				height: 88rpx;
				display: flex;
				flex-direction: column;


				.title {
					// width: 346rpx;
					height: 35rpx;
					font-family: NotoSansHans-Bold;
					font-size: 30rpx;
					font-weight: normal;
					font-stretch: normal;
					line-height: 30rpx;
					letter-spacing: 0rpx;
					color: #ffdcab;
					margin-bottom: 10rpx;
				}

				.other-title {
					// width: 217rpx;
					height: 21rpx;
					font-family: NotoSansHans-Regular;
					font-size: 22rpx;
					// line-height: 31rpx;
					color: #ffdcab;
					opacity: 0.5;
					margin-bottom: 6rpx;
				}
			}

		}

	}
</style>
