<template>
	<!-- 要闻聚焦 -->
	<view class="container" >
		<view class="news"v-for="(item,index) in news" :key="item.index">
			<view class="news-title">
				{{item.content}}
			</view>
			<view class="news-number">
				{{item.browseNum}}
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		name:"important-news",
		data() {
			return {
				news:[]
			};
		},
		created(){
			uni.request({
				url:'http://192.168.110.143:8080/fetv/information/list',
				method:'GET',
				success: (res) => {
					
				        console.log(res.data.rows);
				        this.news = res.data.rows;
				    }
			})
		}
	}
</script>

<style lang="scss">
.container{
	width: 100%;
	box-sizing: border-box;
	background-color: #fff;
	padding: 0 10px;
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
			    -webkit-box-orient: vertical;
			    -webkit-line-clamp: 2;
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
	
}

</style>