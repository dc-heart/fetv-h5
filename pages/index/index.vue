<template>

	<view>
	<!-- 头部区域 -->
			<index-header></index-header>
			<view class="search" @click="toSearch">
				<input type="text" placeholder="搜搜" class="searchinput" >
				<icon type="search" class="searchbutton"></icon>
			</view>
			<!-- 内容区域 -->
			<scroll-view scroll-x="true" class="scroll-x" >
				 <uni-segmented-control :current="current" :values="titles" @clickItem="onClickItem" styleType="text" activeColor="#272727"></uni-segmented-control>
			</scroll-view>
			<view class="more">
				<image src="../../static/教育网图片/gengduo-30.png" class="more-icon"></image>
			</view>
		    <view class="content">
			<view v-show="current!==1">
				<carousel-map></carousel-map>
				<!-- 最新资讯 -->
				<view class="latest-information">
					<image style="width: 159rpx;height: 30rpx; margin-left: 25rpx; margin-top: 42rpx;" src="../../static/教育网图片/组 3.png" mode=""></image>
					<text class="information-text">发展全过程人民民主 彰显中国式民.</text>
				</view>
			   
				<!-- 要闻资讯 -->
				<index-news ></index-news>
				<image src="../../static/教育网图片/p8.jpg" style="width:705rpx;height: 213rpx; margin: 0 21rpx 0 24rpx;"></image>
			  <!-- 专题 -->
				<special></special>
			<!-- 直播访谈 -->
				<interviews></interviews>
				<!-- 自制栏目 -->
				<index-self-made-columns></index-self-made-columns>
					<!-- 空中课堂 -->
					<classrooms></classrooms>
					<!-- 分割线 -->
					 <o-divider />
					 <!-- 微视频 -->
					 <micro-video></micro-video>
					<!-- 尾部区域 -->
					<index-footer></index-footer>	
		        </view>
				
		        <view>
					<!-- 及时新闻 -->
		            <view v-show="current===1" >
		               <carousel-map></carousel-map>
					   <today-news></today-news>
						<uni-list>
						 	<uni-list-item v-for="item in news" :key="item.informationId"  >
							 <!-- 自定义 header -->
							<template v-slot:header>
								<view @click="todayNewsDetails(item.informationId)" class="list-title">{{item.title}}</view>
							</template>
							<!-- 自定义 body -->
							<template v-slot:body>
							 	<image v-show="item.image" :src="item.image" style="width: 703rpx; height: 164rpx;border-radius: 8rpx;"></image>
							</template>
							<!-- 自定义 footer-->
							 <template v-slot:footer>
							 	<view class="list-footer" >
									<text>{{item.commentNum}}评论</text>
									<text>{{item.likeNum}}点赞</text>
								</view>
							 </template>
							 </uni-list-item>
						</uni-list>
						<index-footer></index-footer>
		            </view>
		        </view>
			</view>
	</view>		
</template>

<script>
	export default {
		data() {
			return {
				titles:[],
				current: 0,
				news:[],
				}
			},
			methods: {
				// 获取栏目标题
				getColumns(){
					uni.request({
						url:`${this.baseUrl}/index/fetv/column/list?pageNum=1&pageSize=13`,
						method:'GET',
						success: (res) => {
							res.data.rows.forEach((item, index,) => {
								if(item.columnTitle=='首页'||item.columnTitle=='更多'){
								return 
								}
								console.log(item.columnTitle);
								this.titles.push(item.columnTitle)
							});
							}
						})
					},
				onClickItem(e) {
						console.log(e);
						if (this.current !== e.currentIndex) {
							this.current = e.currentIndex
							const index=e.currentIndex+1
							if(e.currentIndex==5||e.currentIndex==9){
								uni.navigateTo({
									url:'/pages/video/video?columnId='+index
								})
							}else if(e.currentIndex==10){
								uni.navigateTo({
									url:'/pages/video/video?columnId='+13
								})
							}
							else{
								uni.navigateTo({
									url:'/pages/news/news?columnId='+index
								})
							}
						}
					},
					toSearch(){
						uni.navigateTo({
							url:"/pages/search/search"
						})
					},
					todayNewsDetails(e){
						uni.navigateTo({
							url:"/pages/news/details/details?newsinformationid=" + e
						})
					}
				},
			created(){
				this.getColumns()
				uni.showLoading({
					title: '加载中'
				});
				// 获取第二栏目数据
				uni.request({
					url:`${this.baseUrl}/index/fetv/column?columnId=2`,
					method:'GET',
					success: (res) => {
					        this.news =res.data.rows[0].informationApiList
							console.log(this.news);
							uni.hideLoading();
					    }
				})
			},
		}	
</script>

<style lang="less" scoped>
/deep/::-webkit-scrollbar{ display:none;
	}
/deep/uni-text.segmented-control__text.segmented-control__item--text{
	font-size: 36rpx;
	color: #272727
}
.search{
		position: absolute;
		left:578rpx ;
		top: 41rpx;
		width: 151rpx;
		height: 67rpx;
		background-color: #5d0312;
		border-radius: 34rpx;
		opacity: 0.2;
		.searchbutton{
			position: absolute;
			margin-left:99rpx ;
			margin-top: 16rpx;
			font-size: 30rpx;
		}
		.searchinput{
			position: absolute;
			margin-top: 12rpx;
			margin-left: 24rpx;
		}
	}
.scroll-x{
	width: 100%;
	white-space: nowrap;
	background-color: #f7f8f9;
	/deep/.uni-scroll-view-content{
		width: 210%;
	}
	.segmented-control{
		height: 81rpx;
	}
}
.more{
	position: absolute;
	right: 20rpx;
	top: 178rpx;
	width: 70rpx;
	height: 26rpx;
	display: flex;
	flex-direction: row-reverse;
	.more-icon{
		width: 38rpx;
		height: 28rpx;
	}
	.more-shade{
		background-color: #f7f8f9;
		width: 100%;
		opacity: 0.8;
	}
}
.content {
	.latest-information{
		.information-text{
			margin-left: 70rpx;
			margin-top: 44rpx;
			font-size: 28rpx;
			color: #272727;
		}
		.information-text::before{
			content: '';
			display: block;
			position: absolute;
			width:7px;
			height:7px;
			top:748rpx;
			left:235rpx;
			border-radius:50%;
			background: #ba0825;	  
		}
	}
		/deep/.uni-section .uni-section-header{
			padding: 0;
		}
		/deep/.uni-section-header__decoration{
			background-color:#ba0825;
		}
		
		.classroom-news{
			height: 147rpx;
			margin-top: 40rpx;
			.classroom-img{
				width: 262rpx;
				height: 147rpx;
				border-radius: 12rpx;
			}
			.classroom-title{
					font-size: 30rpx;
					font-weight: bold;
					line-height: 47rpx;
					color: #000000;
			}
			.classroom-play{
					font-size: 24rpx;
					line-height: 68rpx;
					letter-spacing: 0rpx;
					color: #808080;
			}
		}
}
/deep/.uni-list-item__container{
	flex-direction: column;
	padding: 21rpx 24rpx 0;
}
.list-title{
		font-family: NotoSansHans-Regular;
		font-size: 30rpx;
		font-weight: bold;
		line-height: 47rpx;
		letter-spacing: 0rpx;
		color: #000000;
}
.list-footer{
			display: flex;
			justify-content: space-between;
			margin-top: 16rpx;
			font-family: NotoSansHans-Regular;
			font-size: 12px;
			font-weight: 400;
			font-stretch: normal;
			line-height: 34px;
			letter-spacing: 0px;
			color: grey;
			margin-left: 16rpx;
			}
</style>


