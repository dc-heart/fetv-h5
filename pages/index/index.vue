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
				 <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#272727"></uni-segmented-control>
			</scroll-view>
			<view class="more">
				<image src="../../static/教育网图片/gengduo-30.png" class="more-icon"></image>
				<view class="more-shade">
					
				</view>
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
						   <uni-section titleFontSize="34rpx" title="专题" style="margin-left: 30rpx;">
		        				<template v-slot:right>
		        					<text style="font-size: 11px; color: #676767; margin-right: 26rpx;" @click="specialsMore">查看更多</text>
		        				</template>
		        			<scroll-view scroll-x="true" style="white-space: nowrap" :show-scrollbar=false>
		        			<view class="specialcontent">
		        				<image src="../../static/教育网图片/titleimg.jpg" class="specialimg"></image>
		        				<text class="specialtitle">保家卫国丨抗美援朝70周年..</text>
		        				<image src="../../static/教育网图片/titleimg2.jpg" class="specialimg" ></image>
		        				<text class="specialtitle2">聚焦丨党的十九届五中全会</text>
		        			
		        			</view>
		        			</scroll-view>
		        		   </uni-section>
		        		   
						   <!-- 直播访谈 -->
		        		   <uni-section titleFontSize="34rpx" title="直播访谈" style="margin-left: 30rpx; margin-top: 65rpx;">
		        		   							<template v-slot:right>
		        		   								<text style="font-size: 11px; color: #676767; margin-right: 26rpx" @click="interviewsMore">查看更多</text>
		        		   							</template>
		        		   						<scroll-view scroll-x="true" style="white-space: nowrap" show-scrollbar>
		        		   						<view class="specialcontent">
		        		   							<image src="../../static/教育网图片/titleimg3.jpg" class="specialimg"></image>
		        		   							<text class="specialtitle">高校战疫24小时</text>
		        		   							<image src="../../static/教育网图片/titleimg4.jpg" class="specialimg" ></image>
		        		   							<text class="specialtitle2">课后服务一镜看</text>
		        		   							<text class="wonderful-replays">精彩回放</text>
		        		   							<text class="wonderful-replays2">精彩回放</text>
		        		   						</view>
		        		   						</scroll-view>
		        		   						<image src="../../static/教育网图片/p9.png" style="width:705rpx;height: 213rpx;margin-top: 60rpx; margin-left: 24rpx;"></image>	
		        		   </uni-section>
		        		
						<!-- 自制栏目 -->
		        		   <uni-section titleFontSize="34rpx" title="自制栏目" style="margin-left: 30rpx; margin-top: 65rpx;">
		        		   							<template v-slot:right>
		        		   								<text style="font-size: 11px; color: #676767; margin-right: 26rpx" @click="columnsMore">查看更多</text>
		        		   							</template>
		        									<uni-grid :column="2" :showBorder=false >
		        											<uni-grid-item v-for="(item, index) in list" :key="item.id" style="height: 278rpx;">
		        												<image :src="item.img" mode="scaleToFill" style="width: 343rpx;height: 193rpx;border-radius: 12rpx;"></image>
		        												<view class="gridtext">
		        													{{item.text}}
		        												</view>
		        											</uni-grid-item>
		        									</uni-grid>
		        			</uni-section>
							
							<!-- 空中课堂 -->
		        			<uni-section titleFontSize="34rpx" title="空中课堂" style="margin-left: 30rpx; margin-top: 65rpx;">
		        							<template v-slot:right>
		        								<text style="font-size: 11px; color: #676767; margin-right: 26rpx" @click="classroomsMore">查看更多</text>
		        							</template>
		        							<view class="classroom-news">
		        								<uni-row>
		        									<uni-col :span="8">
		        										<image class="classroom-img" src="../../static/教育网图片/p13.jpg" mode=""></image>
		        									</uni-col>
		        									<uni-col :span="14" :offset="2">	
		        									<view class="classroom-title">最新！福建各地寒暑假时间定了！</view>
		        									<text class="classroom-play">50.3万次播放</text>
		        									
		        									</uni-col>
		        								</uni-row>
		        							</view>
		        							<view class="classroom-news">
		        								<uni-row>
		        									<uni-col :span="8">
		        										<image class="classroom-img" src="../../static/教育网图片/p14.jpg" mode=""></image>
		        									</uni-col>
		        									<uni-col :span="14" :offset="2">	
		        									<view class="classroom-title">备战中考 | 数学：对应为经相得益彰——函数问题中的数形..</view>
		        									<text class="classroom-play">50.3万次播放</text>
		        									
		        									</uni-col>
		        								</uni-row>
		        							</view>
		        							<view class="classroom-news">
		        								<uni-row>
		        									<uni-col :span="8">
		        										<image class="classroom-img" src="../../static/教育网图片/p20.jpg" mode=""></image>
		        									</uni-col>
		        									<uni-col :span="14" :offset="2">	
		        									<view class="classroom-title">备战中考 | 化学：物质构成的奥秘 （厦门五缘实验学校 李玥)</view>
		        									<text class="classroom-play">50.3万次播放</text>
		        									</uni-col>
		        								</uni-row>
		        							</view>
		        				</uni-section>
		        				 <o-divider />
								 
								 <!-- 微视频 -->
								 <micro-video></micro-video>
		        			<!-- <uni-section titleFontSize="34rpx" title="微视频" style="margin-left: 30rpx; margin-top: 65rpx;">
		        								<template v-slot:right>
		        									<text style="font-size: 11px; color: #676767; margin-right: 26rpx" @click="viedosMore">查看更多</text>
		        								</template>
		        							<scroll-view scroll-x="true" style="white-space: nowrap" show-scrollbar>
		        							<view class="specialcontent">
		        								<image src="../../static/教育网图片/p15.jpg" class="specialimg"></image>
		        								<text class="specialtitle">100年•100秒 | 烽火大洲，新..</text>
		        								<image src="../../static/教育网图片/p18.jpg" class="specialimg" ></image>
		        								<text class="specialtitle2">宁德脚步纪录片</text>
		        							</view>
		        							</scroll-view>
		        	</uni-section>	 -->
							
							<!-- 尾部区域 -->
								<index-footer></index-footer>
								
						
		        </view>
		            
		        <view>
		            <view v-show="current===1" >
		               <carousel-map></carousel-map>
					   <today-news></today-news>
						<uni-list>
						 	<uni-list-item v-for="item in news"  >
							 <!-- 自定义 header -->
							<template v-slot:header>
								<view class="list-title">{{item.title}}文章内容模拟：卡位饭卡盒饭弗兰卡维拉两个拉开就可是六十九公里的道路考虑到几乎垄断了</view>
							</template>
							<!-- 自定义 body -->
							<template v-slot:body>
							 	<image v-show="item.image" :src="baseUrl+item.image" style="width: 703rpx; height: 164rpx;border-radius: 8rpx;"></image>
							</template>
							<!-- 自定义 footer-->
							 <template v-slot:footer>
							 	<view class="list-footer" >
									<text>{{item.collectionNum}}万评论</text>
									<text>{{item.likeNum}}万点赞</text>
								</view>
							 </template>
							 </uni-list-item>
						 	
						</uni-list>
						<index-footer></index-footer>
		            </view>
		          <!--  <view v-show="current === 2">
		                选项卡3的内容
		            </view>
					<view v-show="current === 3">
					    选项卡4的内容
					</view>
					<view v-show="current === 4">
					    选项卡5的内容
					</view> -->
		        </view>
	</view>
	
		
	</view>			

	

</template>

<script>
	export default {
		data() {
			return {
				
				items:['头条新闻','要闻聚焦','校园','FETV','招考','空中课堂','家长','师说','职场','微视频','直播访谈','聚焦党的十九届五中全会',],
				current: 0,
				news:[],
				recentnews:[],
				list: [{
						id:0,
						img: '../../static/教育网图片/p10.jpg',
						text: '福建教育报道',
					},
					{ 
						id:1,
						img: '../../static/教育网图片/p11.jpg',
						text: '春冬季防疫',
					},
					{
						 id:2,
						img: '../../static/教育网图片/p12.jpg',
						text: '乡约科普',
					},
					{ 
						id:3,
						img: '../../static/教育网图片/p13.jpg',
						text: '《我在厦门我很好》',
					}],
			
				classroom: [{
						id:0,
						img: '../../static/教育网图片/p13.jpg',
						title:'最新！福建各地寒暑假时间定了',
						text: '50.3万次播放',
					},
					{ 
						id:1,
						img: '../../static/教育网图片/p14.jpg',
						title:'备战中考 | 数学：对应为经相得益彰——函数问题中的“数形..',
						text: '50.3万次播放',
					},
					{
						 id:2,
						img: '../../static/教育网图片/p20.jpg',
						title:'备战中考 | 化学：物质构成的奥秘 （厦门五缘实验学校 李玥)',
						text: '50.3万次播放',
					}]
		}

			},
			methods: {
						onClickItem(e) {
							console.log(e);
							if (this.current !== e.currentIndex) {
								this.current = e.currentIndex
								const index=e.currentIndex+1
									uni.navigateTo({
										url:'/pages/news/news?columnId='+index
									})
								
							}
							
						},
						toSearch(){
							uni.navigateTo({
								url:'/pages/search/search'
							})
						},
						
						specialsMore(){
							uni.navigateTo({
								url:'/pages/specials/specials'
							})
						},
						interviewsMore(){
							uni.navigateTo({
								url:'/pages/interviews/interviews'
							})
						},
						columnsMore(){
							uni.navigateTo({
								url:'/pages/columns/columns'
							})
						},
						classroomsMore(){
							uni.navigateTo({
								url:'/pages/classrooms/classrooms'
							})
						},
						viedosMore(){
							uni.navigateTo({
								url:'/pages/video/video'
							})
						},
					},
			beforeCreate(){
				uni.showLoading({
					title: '加载中'
				});
				// 获取第一栏目数据
				uni.request({
					url:`${this.baseUrl}/index/fetv/column?columnId=1`,
					method:'GET',
					success: (res) => {
					        console.log(res.data.rows[0].informationApiList);
					        this.news =res.data.rows[0].informationApiList
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
	
	/deep/.uni-scroll-view-content{
		width: 260%;
		background-color: #f7f8f9;

	}
	.segmented-control{
		height: 81rpx;
	}
}
.more{
	position: absolute;
	right: 20rpx;
	top: 178rpx;
	width: 109rpx;
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
		opacity: 0.9;
	
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
		
		.specialcontent{
			height: 340rpx;
			.specialimg{
				display: inline-block;
				width: 383rpx;
				height: 285rpx;
				margin: 26rpx 0 0 25rpx;
				margin-top: 26rpx;
			}
			.specialtitle{
				position: absolute;
				left: 50rpx;
				top: 308rpx;
				
			}
			.specialtitle2{
				position: absolute;
				left: 460rpx;
				top: 308rpx;
			}
			.wonderful-replays{
				position: absolute;
				left: 25rpx;
				top: 30rpx;
				background-color: #00d975;
				border-radius: 8rpx;
				font-size: 24rpx;
				line-height: 34rpx;
				color: #ffffff;
					}
			
			.wonderful-replays2{
				position: absolute;
				left: 440rpx;
				top: 30rpx;
				background-color: #00d975;
				border-radius: 8rpx;
				font-size: 24rpx;
				line-height: 34rpx;
				color: #ffffff;
			}
			
			}
		.gridtext{
			line-height: 68rpx;
				letter-spacing: 0rpx;
				color: #000000
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


