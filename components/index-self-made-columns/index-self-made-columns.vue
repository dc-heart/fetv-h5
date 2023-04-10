<template>
	<view>
		<!-- 自制栏目 -->
		<uni-section titleFontSize="34rpx" title="自制栏目" style="margin-left: 30rpx; margin-top: 65rpx;">
			<template v-slot:right>
				<text style="font-size: 11px; color: #676767; margin-right: 26rpx" @click="columnsMore">查看更多</text>
			</template>
			<uni-grid :column="2" :showBorder="false">
				<uni-grid-item  v-for="(item, index) in list" :key="item._id" style="height: 278rpx;" >
					<image @click="details(item._id)" :src="item.img" mode="scaleToFill" style="width: 343rpx;height: 193rpx;border-radius: 12rpx;"></image>
					<view class="gridtext">
						{{item.text}}
					</view>
				</uni-grid-item>
			</uni-grid>
			</uni-section>
	</view>
</template>

<script>
	export default {
		name:"index-self-made-columns",
		data() {
			return {
				list: []
			};
		},
		created() {
			this.getData()
		},
		methods:{
			getData(){
				uniCloud.callFunction({
					name:"columns_get",
				}).then(res=>{
					console.log(res);
					this.list=res.result.data.slice(0,4)
				})
			},
			columnsMore(){
				uni.navigateTo({
					url:"/pages/columns/columns"
				})
			},
			details(e){
				console.log(e);
				uni.navigateTo({
					url:"/pages/columns/columns-details/columns-details?id="+e
				})
			}
		}
	}
</script>

<style lang="scss">
.gridtext{
			line-height: 68rpx;
				letter-spacing: 0rpx;
				color: #000000
		}
</style>