<template>
	<view>
		<index-header></index-header>
		<index-header-icon></index-header-icon>
			<view class="news-title">{{news.title}}</view>
			<view class="news-number">
				<view class="">
					{{news.createTime}}
				</view>
				<view class="">
					来源:{{news.source}}
				</view>
				
			</view>
			
			<view class="news-content-box">
				<text class="news-content">{{news.content}}</text>
			
			</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsinformationid:'',
				news:''
			};
		},
		
		onLoad(options){
		    this.newsinformationid = options.newsinformationid;
		    console.log(this.newsinformationid);
				},
		created() {
			uni.request({
				url:`${this.baseUrl}/index/fetv/information?informationId=${this.newsinformationid}`,
				method:'GET',
				success: (res) => {
					
				        console.log(res.data.data);
				        this.news = res.data.data;
				    }
			})
		}
	}
</script>

<style lang="scss">
.news-title{
	margin-left: 25rpx;
	margin-top: 21px;
    font-family: NotoSansHans-Bold;
    font-size: 17px;
    font-weight: 400;
    font-stretch: normal;
    line-height: 20px;
    letter-spacing: 0px;
    color: #000;
}
.news-content-box{
	margin: 0 22rpx 42rpx 28rpx;
	.news-content{
	 font-family: NotoSansHans-Regular;
	 	font-size: 28rpx;
	 	font-weight: normal;
	 	font-stretch: normal;
	 	line-height: 48rpx;
	 	letter-spacing: 0rpx;
	 	color: #757575;
	}
}

.news-number{
	width: 511rpx;
	height: 25rpx;
	display: flex;
	justify-content: space-around;
	margin-bottom: 52rpx;
	font-family: NotoSansHans-Regular;
	font-size: 26rpx;
	font-weight: normal;
	font-stretch: normal;
	line-height: 68rpx;
	letter-spacing: 0rpx;
	color: #ababab;
	}
</style>
