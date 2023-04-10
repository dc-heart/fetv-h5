<template>
	<view>
		<!-- 专题 -->
		 <uni-section titleFontSize="34rpx" title="专题" style="margin-left: 30rpx;">
			<template v-slot:right>
				<text style="font-size: 11px; color: #676767; margin-right: 26rpx;" @click="specialsMore">查看更多</text>
			</template>
			<scroll-view scroll-x="true" style="white-space: nowrap" >
				<view class="specialcontent" v-for="item in listall" :key="item._id" @click="details(item._id)">
					<image :src="item.img" class="specialimg"></image>
					<text class="specialtitle">{{item.text}}</text>
				</view>
			</scroll-view>
		 </uni-section>
	</view>
</template>

<script>
	export default {
		name:"special",
		data() {
			return {
				listall:[]
			};
		},
		created() {
			this.getData()
		},
		methods:{
			getData(){
				uniCloud.callFunction({
					name:"special_get",
				}).then(res=>{
					console.log(res);
					this.listall=res.result.data
				})
			},
			details(e){
				console.log(e);
				uni.navigateTo({
					url:"/pages/special/special?id="+e
				})
			},
			specialsMore(){
				uni.navigateTo({
					url:"/pages/special/special-more/special-more"
				})
			}
		}
	}
</script>

<style lang="scss">
.specialcontent{
		height: 340rpx;
		display: inline-block;
		position: relative;
		.specialimg{
			margin-left: 15rpx;
			width: 383rpx;
			height: 285rpx;
			
		}
		.specialtitle{
			// 文本超出显示省略号
			overflow:hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
			-o-text-overflow:ellipsis;
			position: absolute;
			width: 380rpx;
			left: 15rpx;
			top: 308rpx;
			
		}
		
	}
</style>