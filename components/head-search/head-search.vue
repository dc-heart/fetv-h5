<template>
	<view>
		<!-- 搜索 -->
		<view class="search-contain">
			<input type="text" value="" placeholder="搜搜" style="font-size: 12px;padding-left: 14rpx;color: #c74c60;" />
			<uni-icons type="search" size="21" color="#fff"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name: "head-search",
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.search-contain {
		background-color: #a70721;
		display: flex;
		flex-direction: row;
		border-radius: 13px;
		align-items: center;
		width: 121rpx;
		height: 61rpx;
		padding-right: 10rpx;
	}
</style>
