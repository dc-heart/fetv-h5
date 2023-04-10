<template>
	<view>
		<!-- 空中课堂 -->
		<uni-section titleFontSize="34rpx" title="空中课堂" style="margin-left: 30rpx; margin-top: 65rpx;">
						<template v-slot:right>
							<text style="font-size: 11px; color: #676767; margin-right: 26rpx" @click="classroomsMore">查看更多</text>
						</template>
						<view class="classroom-news"  v-for="item in showclassrooms" :key="item.informationId" @click="classroomsDetails(item.informationId)" >
							<uni-row >
								<uni-col :span="8">
									<image class="classroom-img" :src="item.image"></image>
								</uni-col>
								<uni-col :span="14" :offset="2">	
								<view class="classroom-title">{{item.title}}！</view>
								<text class="classroom-play">{{item.browseNum}}次播放</text>
								
								</uni-col>
							</uni-row>
						</view>
			</uni-section>
	</view>
</template>

<script>
	export default {
		name:"classrooms",
		data() {
			return {
				classrooms:[],
				showclassrooms:[]
			};
		},
		methods:{
			classroomsDetails(e){
				uni.navigateTo({
					url:"/pages/video/video-details/video-details?informationId="+e
				})
			},
			classroomsMore(){
				uni.navigateTo({
					url:'/pages/video/video?columnId=6'
				})
			}
		},
		created() {
			uni.showLoading({
					title: '加载中'
				});
				uni.request({
				url:`${this.baseUrl}/index/fetv/column?columnId=6`,
				method:'GET',
				success: (res) => {
					// 获取数据并存储
					this.classrooms =res.data.rows[0].informationApiList
					console.log(this.classrooms);
					// 处理数据展示前3条
					this.showclassrooms=this.classrooms.splice(0,3)
					console.log(this.showclassrooms);
					uni.hideLoading();
					}
			})
		}
	}
</script>

<style lang="scss">
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
</style>