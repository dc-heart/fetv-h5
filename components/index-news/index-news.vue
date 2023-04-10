<template>
	<view>
		<!-- 要闻资讯 -->
		<uni-card style="width: 705rpx;border: 0;
		height: 293rpx; padding: 0;" margin="44rpx 21rpx 33rpx 24rpx">
			   <text class="important-news">{{importantnews}}</text>
			   <text class="vertical"></text>
			   <text class="daily-news">每日最新精彩资讯</text>
			   <text class="see-more" @click="newsMore">查看更多</text>
			   <view v-for="item in listnews" :key="item.informationId" @click="newsDetails(item.informationId)">
				<uni-section :title="item.title" type="circle" titleColor="#272727" class="titles"></uni-section>
			   </view>        			   
		</uni-card>	        		  
	</view>
</template>

<script>
	export default {
		name:"index-news",
		data() {
			return {
				listnews:[],
				importantnews:"要闻资讯"
			}
		},
		methods:{
			newsMore(){
				uni.navigateTo({
					url:"/pages/news/news?columnId=1"
				})
			},
			newsDetails(e){
				uni.navigateTo({
					url:'/pages/news/details/details?newsinformationid='+e
				})
			}
		},
		created() {
				uni.request({
					url:`${this.baseUrl}/index/fetv/information/RecentInformation`,
					method:'GET',
					success: (res) => {
					        console.log(res.data.rows.slice(0,3));
					        this.listnews = res.data.rows.slice(0,3);
					    }
				})
		}
	}
</script>

<style lang="scss">
.important-news{
		font-family: NotoSansHans-Bold;
			font-size: 34rpx;
			line-height: 68rpx;
			letter-spacing: 0rpx;
			color: #272727;
	}
	.vertical{
			display: inline-block;
			margin-left: 16rpx;
			width: 1rpx;
			height: 24rpx;
			background-color: #dddddd;
	}
	.daily-news{
			font-size: 26rpx;
			font-style: italic;
			line-height: 68rpx;
			color: #777777;
			margin-left: 21rpx;
	}
	.see-more{
			font-size: 22rpx;
			line-height: 68rpx;
			color: #676767;
			margin-left: 185rpx;
	}
	.titles{
		margin-top: 20rpx;
	}
</style>