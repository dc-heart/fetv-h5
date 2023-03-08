<template>
	<view>
		<!-- 要闻资讯 -->
		<uni-card style="width: 705rpx;border: 0;
		height: 293rpx; padding: 0;" margin="44rpx 21rpx 33rpx 24rpx">
				        			   <text class="recent-news">{{todaynews}}</text>
				        			   <text class="vertical"></text>
				        			   <text class="daily-news">每日最新精彩资讯</text>
				        			   <text class="see-more" @click="newsMore">查看更多</text>
									   <view v-for="item in recentnews" :key="item.informationId">
									   	<uni-section :title="item.title" type="circle" titleColor="#272727" class="titles"></uni-section>
									   	<!-- <uni-section title="小手拉大手 共迎冬奥会" type="circle"  titleColor="#272727" class="titles"></uni-section>
									   	<uni-section title="省教育厅推广首批9个落实“双减”工作典型案例" type="circle"  titleColor="#272727" class="titles"></uni-section> -->
									   </view>
				        			   
		</uni-card>
		
				        		  
	</view>
</template>

<script>
	export default {
		name:"today-news",
		data() {
			return {
				recentnews:[],
				todaynews:"及时新闻"
			}
		},
		methods:{
			newsMore(){
				uni.navigateTo({
					url:"/pages/news/news"
				})
			},
		},
		created() {
		
				uni.request({
					url:`${this.baseUrl}/index/fetv/information/TodayInformation`,
					method:'GET',
					success: (res) => {
					        console.log(res.data.rows.slice(0,3));
					        this.recentnews = res.data.rows.slice(0,3);
					    }
				})

			
			
		}
	}
</script>

<style lang="scss">
	
	.recent-news{
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