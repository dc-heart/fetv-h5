<template>
	<view >
		<!-- 头部区域 -->
		<index-header></index-header>
		<index-header-icon></index-header-icon>
		<view class="news" v-for="(item,index) in list" :key="item._id" @click="toDetails(item._id)">
			<view class="news-title" >
				<!-- 格式化时间 -->
				{{item.text}}<uni-dateformat :date="item.time"
				format="yyyy/MM/dd"></uni-dateformat>
			</view>
			<view class="news-number">
				{{item.browsernum}}浏览
			</view>
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
				id:''
			
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
					name:"special_get_row",
					data:{
						id:this.id
					}
				}).then(res=>{
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
	
</style>