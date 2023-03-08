<template>
	<view>
		<view class="list-box" @click="listMenu">
				<image src="../../static/教育网图片/g7.png" style="width: 21px;
		height: 20px;"></image>
		</view>
		<view class="container" >
			
				<uni-drawer ref="showRight" mode="right" class="drawer"  :width="263" :mask="false" :maskClick="false">
				<scroll-view  scroll-y="true" class="scroll-Y" show-scrollbar="true">
				<view class="drawer-title" v-for="(item,index) in items" :key="index"">
					<text class="drawer-title-text" @click="driverTitle(item.id)">{{item.title}}</text>
				</view>
				</scroll-view>
				</uni-drawer>
		</view>
	</view>
</template>

<script>
	export default {
		name:"index-header-icon",
		data() {
			return {
				items:[{
					title:"推荐",
					id:0,
					},
					{
					title:"头条新闻",
					id:1,
					},
					{
					title:"要闻聚焦",
					id:2,
					},{
					title:"校园",
					id:3,
					},{
					title:"FETV",
					id:4,
					},{
					title:"招考",
					id:5,
					},{
					title:"空中课堂",
					id:6,
					},{
					title:"家长",
					id:7,
					},{
					title:"师说",
					id:8,
					},{
					title:"职场",
					id:9,
					},{
					title:"微视频",
					id:10,
					},{
					title:"直播访谈",
					id:11,
					},{
					title:"聚焦党的十九届五中全会",
					id:12,
					},
					],
				news:[],
				showRight:false
			};
		},
		methods:{
			listMenu(){
				this.$refs['showRight'].open()
			},
			driverTitle(e){
				console.log(e==0);
				if(e==0){
					uni.switchTab({
						url:'/pages/index/index'
					})
				}
				else{
					uni.navigateTo({
						url:'/pages/news/news?columnId='+e
					})
				}
					
			},
		}
	}
</script>

<style lang="scss">
.list-box{
	position: absolute;
	right: -84rpx;
	top: 54rpx;
	    width: 75px;
	    height: 33px;
	    padding-right: 11px;
}
.container{
	position: relative;
	width: 100%;
	box-sizing: border-box;
	background-color: #fff;
	padding: 0 10px;	
		.drawer{
			position: absolute;
			height: 600rpx;
		/deep/.uni-drawer__content{
			background-color: rgba(255,248,249,.95);
						}
			.scroll-Y {
				height: 600rpx;
				.drawer-title{
					display: flex;
					flex-direction: row-reverse;
					justify-content: space-around;
					align-items: center;
					.drawer-title-text{
						font-family: NotoSansHans-Bold;
							font-size: 15px;
							font-weight: 400;
							font-stretch: normal;
							line-height: 37px;
							letter-spacing: 0px;
							text-align: center;
							color: #ba0825;
							overflow: auto;
					}
				}
			}
	}
}
</style>