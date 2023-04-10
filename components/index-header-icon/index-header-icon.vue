<template>
	<view>
		<!-- 头部区域图标 -->
		<view class="list-box" @click="listMenu">
			<image src="../../static/教育网图片/g7.png" style="width: 21px;height: 20px;"></image>
		</view>
		<view class="container" >
			<uni-drawer ref="showRight" mode="right" class="drawer"  :width="263" :mask="false" :maskClick="false">
			<scroll-view  scroll-y="true" class="scroll-Y" show-scrollbar="true">
			<view class="drawer-title" v-for="(item,index) in columns" :key="item.columnId">
				<text class="drawer-title-text" @click="driverTitle(item.columnId)">{{item.columnTitle}}</text></view>
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
				columns:[],
				news:[],
				showRight:false
			};
		},
		created(){
		uni.request({
			url:`${this.baseUrl}/index/fetv/column/list?pageNum=1&pageSize=13`,
			method:'GET',
			success: (res) => {
				this.columns=res.data.rows
				this.columns.unshift({columnTitle:'首页',columnId:0})
				this.columns.splice(11,2)
				console.log(this.columns);
				}
			})
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