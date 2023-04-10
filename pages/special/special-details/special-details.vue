<template>
	<view>
		<index-header></index-header>
		<index-header-icon></index-header-icon>
			<view class="news-title">{{news.text}}</view>
			<view class="news-number">
				<view class="">
					<!-- 格式化时间 -->
					<uni-dateformat :date="news.time"
					format="yyyy-MM-dd mm:ss"></uni-dateformat>
				</view>
				<view class="">
					来源:{{news.source}}
				</view>
			</view>
			<view class="news-content-img">
				<image class="newsimg" :src="news.img" mode="scaleToFill"></image>
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
				id:'',
				news:''
			};
		},
		
		onLoad(options){
			// 接受页面传递的id并存储
		    this.id = options.id;
		    console.log(this.id);
			this.getData()
				},
		methods:{
			getData(){
				console.log(this.id);
				// 根据id获取云数据库数据
				uniCloud.callFunction({
					name:"special_get_row",
					data:{
						id:this.id
					}
				}).then(res=>{
					console.log(res);
					this.news=res.result.data[0]
				})
			}
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
.news-content-img{
	
	.newsimg{
		width: 744rpx;
		padding: 15rpx;
	}

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
