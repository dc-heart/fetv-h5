<template>
	<view>
		<!-- <view class="header">
			<image class="fetv" src="/static/教育网图片/logo.png" mode="scaleToFill"></image>
			<text class="title">福建教育网 www.fetv.cn</text>
			<text class="supervisor" >主管:福建省委教育工委、福建省教育厅</text>
			<text class="host">主办:福建教育电视台</text>
			<view class="search">
				<input type="text" placeholder="搜搜" class="searchinput" >
				<icon type="search" class="searchbutton"></icon>
			</view>
		</view> -->
			<index-header></index-header>
		 <uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" styleType="text" activeColor="#ba0825"></uni-segmented-control>
		        <view class="content">
		        	<view v-show="current === 0">
		        	       <swiper :autoplay="true" :interval="3000" :duration="1000" style="width: 705rpx; height: 424rpx;margin-left: 24rpx;margin-top: 41rpx;">
		        	       	<swiper-item>
		        					<image class="content-image" src="../../static/教育网图片/p2.jpg" mode="scaleToFill"></image>
		        	       	</swiper-item>
		        	       	<swiper-item>
		        					<image  class="content-image" src="../../static/教育网图片/p3.jpg" mode="scaleToFill"></image>
		        	       	</swiper-item>
		        			<swiper-item>
		        					<image  class="content-image" src="../../static/教育网图片/p7.png" mode="scaleToFill"></image>
		        			</swiper-item>   
		        			<swiper-item>
		        					<image  class="content-image" src="../../static/教育网图片/p5.jpg" mode="scaleToFill"></image>
		        	       	</swiper-item>   
		        			<swiper-item>
		        					<image  class="content-image" src="../../static/教育网图片/p4.jpg" mode="scaleToFill"></image>
		        	       	</swiper-item>
		        	       </swiper>
		        		   <view class="latest-information">
		        				<image style="width: 159rpx;height: 30rpx; margin-left: 25rpx; margin-top: 42rpx;" src="../../static/教育网图片/组 3.png" mode=""></image>
		        				<text class="information-text">发展全过程人民民主 彰显中国式民.</text>
		        		   </view>
		        		   <uni-card style="width: 705rpx;border: 0;
		        		   height: 293rpx; padding: 0;" margin="44rpx 21rpx 33rpx 24rpx">
		        			   <text class="important-news">要闻资讯</text>
		        			   <text class="vertical"></text>
		        			   <text class="daily-news">每日最新精彩资讯</text>
		        			   <text class="see-more">查看更多</text>
		        			   <uni-section title="重磅消息！福州教育新规，实施“六年一户学位.." type="circle" titleColor="#272727" class="titles"></uni-section>
		        			   <uni-section title="小手拉大手 共迎冬奥会" type="circle"  titleColor="#272727" class="titles"></uni-section>
		        			   <uni-section title="省教育厅推广首批9个落实“双减”工作典型案例" type="circle"  titleColor="#272727" class="titles"></uni-section>
		        		   </uni-card>
		        		   <image src="../../static/教育网图片/p8.jpg" style="width:705rpx;height: 213rpx; margin: 0 21rpx 0 24rpx;"></image>
		        		   <uni-section titleFontSize="34rpx" title="专题" style="margin-left: 30rpx;">
		        				<template v-slot:right>
		        					<text style="font-size: 11px; color: #676767; margin-right: 26rpx;">查看更多</text>
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
		        		   
		        		   <uni-section titleFontSize="34rpx" title="直播访谈" style="margin-left: 30rpx; margin-top: 65rpx;">
		        		   							<template v-slot:right>
		        		   								<text style="font-size: 11px; color: #676767; margin-right: 26rpx">查看更多</text>
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
		        		   						<image src="../../static/教育网图片/p9.png" style="width:705rpx;height: 213rpx;margin-top: 60rpx;"></image>	
		        		   </uni-section>
		        		
		        		   <uni-section titleFontSize="34rpx" title="自制栏目" style="margin-left: 30rpx; margin-top: 65rpx;">
		        		   							<template v-slot:right>
		        		   								<text style="font-size: 11px; color: #676767; margin-right: 26rpx">查看更多</text>
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
		        			<uni-section titleFontSize="34rpx" title="空中课堂" style="margin-left: 30rpx; margin-top: 65rpx;">
		        							<template v-slot:right>
		        								<text style="font-size: 11px; color: #676767; margin-right: 26rpx">查看更多</text>
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
		        			<uni-section titleFontSize="34rpx" title="微视频" style="margin-left: 30rpx; margin-top: 65rpx;">
		        								<template v-slot:right>
		        									<text style="font-size: 11px; color: #676767; margin-right: 26rpx">查看更多</text>
		        								</template>
		        							<scroll-view scroll-x="true" style="white-space: nowrap" show-scrollbar>
		        							<view class="specialcontent">
		        								<image src="../../static/教育网图片/p15.jpg" class="specialimg"></image>
		        								<text class="specialtitle">100年•100秒 | 烽火大洲，新..</text>
		        								<image src="../../static/教育网图片/p18.jpg" class="specialimg" ></image>
		        								<text class="specialtitle2">宁德脚步纪录片</text>
		        							</view>
		        							</scroll-view>
		        	</uni-section>	
							
							<view class="footer">
								
							</view>
		        </view>
		            
		        <view>
		            <view v-show="current === 1">
		                选项卡2的内容
		             
		            </view>
		            <view v-show="current === 2">
		                选项卡3的内容
		            </view>
					<view v-show="current === 3">
					    选项卡4的内容
					</view>
					<view v-show="current === 4">
					    选项卡5的内容
					</view>
		        </view>
	</view>
	
		
	</view>			
</template>

<script>
	export default {
		data() {
			return {
				items:['推荐','要闻资讯','校园联播','FETV','招生考试'],
				current: 0,
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
			}
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
		},
		onLoad() {

		},
		methods: {
		 onClickItem(e) {
		      if (this.current != e.currentIndex) {
		        this.current = e.currentIndex;
		      }
		    }
		}
	}
</script>

<style lang="less" scoped>
/deep/::-webkit-scrollbar{ display:none;
	}
// .header{
// 	position: relative;
// 	width: 750rpx;
// 	height: 149rpx;
// 	background-color: #ba0825;
// 	.fetv{
// 		width: 116rpx;
// 		height: 88rpx;
// 		margin-left: 29rpx;
// 		margin-top: 33rpx;
// 	}
// 	.title{
// 		position: absolute;
// 		width: 346rpx;
// 		height: 30rpx;
// 		left: 162rpx;
// 		top: 33rpx;
// 		color:#ffdcab ;
// 		font-size: 30rpx;

// 	}
// 	.supervisor{
// 		position: absolute;
// 		left: 165rpx;
// 		top: 84rpx;
// 		font-size: 22rpx;
// 		line-height: 14rpx;
// 		color: #ffdcab;
// 		opacity: 0.5;
// 	}
// 	.host{
// 		position: absolute;
// 		left: 165rpx;
// 		bottom: 10rpx;
// 		font-size: 22rpx;
// 		color: #ffdcab;
// 		opacity: 0.5;	
// 	}
// 	.search{
// 		position: absolute;
// 		left:578rpx ;
// 		top: 41rpx;
// 		width: 151rpx;
// 		height: 67rpx;
// 		background-color: #5d0312;
// 		border-radius: 34rpx;
// 		opacity: 0.2;
	
// 		.searchbutton{
// 			position: absolute;
// 			margin-left:99rpx ;
// 			margin-top: 16rpx;
// 			font-size: 30rpx;
// 		}
// 		.searchinput{
// 			position: absolute;
// 			margin-top: 12rpx;
// 			margin-left: 24rpx;
// 		}
// 	}
	
	
// }
.content {
	.content-image{
	width: 705rpx;
	height: 424rpx;
		}
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
			top:740rpx;
			left:235rpx;
			border-radius:50%;
			background: #ba0825;	  
		}
		}
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
		/deep/.uni-section .uni-section-header{
			padding: 0;
		}
		/deep/.uni-section-header__decoration{
			background-color:#ba0825;
		}
		.titles{
			margin-top: 20rpx;
		}
		.specialcontent{
			height: 340rpx;
			.specialimg{
				display: inline-block;
				width: 383rpx;
				height: 285rpx;
				
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
.footer{
	width: 750rpx;
	height: 989rpx;
	margin-top: 65rpx;
	background-color: #f7f8f9;
}	
</style>
