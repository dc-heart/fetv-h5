<template>
	<view>
		<index-header></index-header>
		<index-header-icon></index-header-icon>
		<view class="container">
			<view class="content" >
				<uni-search-bar class="search"  :focus="true" v-model="searchValue"
				cancel-button="none" bgColor="#fff"		placeholder="请输入关键字" >
				<uni-icons slot="searchIcon" color="rgb(96, 98, 102)" size="19" type="search" />
				
				</uni-search-bar>
			<view class="searchbutton" @click="searchButton">
				搜索
			</view>
			<view class="search-recommend" v-if="this.value==''">搜索推荐</view>
			<view style="display: flex;justify-content: space-between;" class="search-recommend" v-else>搜索结果 <text >{{value.length}}条搜索</text></view>
		
			
				<view  v-show="recommand" v-for="item in searchrecommend" :key="item.informationId">
					<view class="recommend">
						<view class="recommend-content">{{item.title}}</view>
						<view class="recommend-content">{{item.title}}</view>
					</view>
				</view>
				
				<view class="news" v-for="(item,index) in value" :key="index" @click="toDetails(item.informationId)">
						<view class="news-title" >
							{{item.title}}
						</view>
						<view class="news-number">
							{{item.source}}
						</view>
					</view>
				</view>
				
			</view>
		
		
			
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recommand:false,
				searchValue:'',
				searchrecommend:[],
				value:[],
			};
		},
		methods:{
			toDetails(e){
				console.log(e)
				uni.navigateTo({
					url:"/pages/news/details/details?newsinformationid=" + e,
				})
			},
			searchButton(){
				if(this.searchValue==''){
					this.recommand=true
				}
				if(this.searchValue!==''){
					uni.request({
						url:`${this.baseUrl}/index/fetv/information/getSearchTitle?title=${this.searchValue}`,
						method:'GET',
						success: (res) => {
						        console.log(res.data);
						        this.value =res.data.data
								this.recommand=false
						    }
					})
				}
				
			}
		},
		created() {
			uni.request({
				url:`${this.baseUrl}/index/fetv/information/Search`,
				method:'GET',
				success: (res) => {
				        console.log(res.data.data);
				        this.searchrecommend =res.data.data
				    }
			})
		}
	}
</script>

<style lang="scss">
.container{
	position: relative;
}
.content{

		background-color: rgb(255, 255, 255);
	    border-radius: 5px;
	    border: 1px solid rgb(238, 238, 238);
	    width: 620rpx;
	    height: 60rpx;
		margin-top: 26rpx;
		margin-left: 26rpx;
		
		/deep/.uni-searchbar{
			padding: 0;
		}
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
		.search{
			width: 620rpx;
			height: 60rpx;
			
			/deep/.uni-searchbar__box{
				width: 290rpx;
				height: 60rpx;
			}
		}
		.searchbutton{
		position: absolute;
		right: 20rpx;
		top: 0;
		font-family: NotoSansHans-Bold;
		font-size: 16px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 34px;
		letter-spacing: 0px;
		color: rgb(186, 8, 37);
		}
		.search-recommend{
			width: 700rpx;
			font-family: NotoSansHans-Bold;
			font-size: 30rpx;
			font-weight: 400;
			font-stretch: normal;
			line-height: 68rpx;
			letter-spacing: 0px;
			color: #272727;
			margin: 15rpx 26rpx 10rpx 0;
		}
		
		.recommend{
			width: 950rpx;
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			.recommend-content{
				flex: 1;
				width: 45%;
				font-family: NotoSansHans-Regular;
				font-size: 14px;
				font-weight: 400;
				font-stretch: normal;
				line-height: 20px;
				letter-spacing: 0px;
				color: #000;
				text-overflow: ellipsis;
				
				overflow: hidden;
				margin-top: 5rpx;
				
			}
		}
		
}

</style>
