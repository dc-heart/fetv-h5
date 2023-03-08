<template>
	<view >
		<index-header></index-header>
		<index-header-icon></index-header-icon>
								<view class="news" v-for="(item,index) in allnews" :key="item.informationId" @click="toDetails(item.informationId)">
									<view class="news-title" >
										{{item.title}}
									</view>
									<view class="news-number">
										{{item.likeNum}}浏览
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
				columnId:''
				// news:[],
			
			};
		},

		
		// onLoad(options){
		 
		//     this.allnews = JSON.parse(decodeURIComponent(options.allnews));
		//     console.log(this.allnews);
		// 		},
		methods:{
			
			toDetails(e){
				console.log(e)
				uni.navigateTo({
					url:"/pages/news/details/details?newsinformationid=" + e,
				})
			}
		
		},
	onLoad(options){
	    this.columnId = options.columnId;
	    console.log(this.columnId);
			},
	
		created(){
			uni.request({
				url:`${this.baseUrl}/index/fetv/column?columnId=${this.columnId}`,
				method:'GET',
				success: (res) => {
				        console.log(res.data.rows[0].informationApiList);
				        this.allnews = res.data.rows[0].informationApiList
				    }
			})
		}
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