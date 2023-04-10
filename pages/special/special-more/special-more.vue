<template>
	<view >
		<!-- 头部区域 -->
		<index-header></index-header>
		<index-header-icon></index-header-icon>
		<view class="news" v-for="(item,index) in list" :key="item._id" @click="toDetails(item._id)">
			<view class="news-title" >
				{{item.text}}<uni-dateformat :date="item.time"
				format="yyyy/MM/dd"></uni-dateformat>
			</view>
			<view class="news-number">
				{{item.browsernum}}浏览
			</view>
		</view>
		<!-- 加载更多数据 -->
		<view class="loading" v-if="list.length">
			<view @click="getMore" v-if="loading==0">
				点击加载更多
			</view>
			<view v-if="loading==1">数据加载中...</view>
			<view v-if="loading==2">没有更多了~~~</view>
		</view>
	</view>

</template>

<script>
	export default {
		name:"news",
		data() {
			return {
				allnews:[],
				list:[],
				loading:0  // loading为0表示加载更多，loading为1表示加载中，loading为2表示没有更多
			
			};
		},
		
		onLoad(){
			this.getData()
		},
		methods:{
			getMore(){
				this.loading=1
				this.getData()
			},
			getData(){
				uniCloud.callFunction({
					name:"special_get",
				}).then(res=>{
					if(this.list.length==res.result.data.length){
						this.loading=2
					}
					console.log(res);
					this.list=res.result.data
				})
			},
			toDetails(e){
				uni.navigateTo({
					url:"/pages/special/special-details/special-details?id="+e
				})
			}
		
		},
	}
</script>

<style lang="scss">


.news{
	padding: 10px 0;
	border-bottom: 0.5px solid #f4f4f4;
	.news-title{
		font-family: NotoSansHans-Regular;
		font-size: 15px;
		font-weight: 700;
		font-stretch: normal;
		line-height: 23px;
		letter-spacing: 0px;
		color: #000;
		display: -webkit-box;
		text-overflow: ellipsis;
		ebkit-box-orient: vertical;
		ebkit-line-clamp: 2;
		overflow: hidden;
		margin-left: 16rpx;
		}
		.news-number{
			margin-top: 14px;
			font-family: NotoSansHans-Regular;
			font-size: 12px;
			font-weight: 400;
			font-stretch: normal;
			line-height: 34px;
			letter-spacing: 0px;
			color: grey;
			margin-left: 16rpx;
			}
		}
.loading{
	text-align: center;
	font-size: 26rpx;
	color: #888;
	line-height: 2em;
	view{
		
	}
}
</style>