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
			<view class="search-recommend" >搜索推荐</view>
				<view  v-show="recommand" v-for="item in searchrecommend" :key="item.informationId">
					<view class="recommend">
						<view class="recommend-content">{{item.title}}</view>
						<view class="recommend-content">{{item.title}}</view>
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
				searchrecommend:[]
			};
		},
		methods:{
			searchButton(){
				
				this.recommand=true
			}
		},
		created() {
			uni.request({
				url:`${this.baseUrl}/index/fetv/information/thirtyInformation`,
				method:'GET',
				success: (res) => {
				        console.log(res.data.rows);
				        this.searchrecommend =res.data.rows
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
			margin: 15rpx 26rpx 10rpx 26rpx;
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
