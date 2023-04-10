<template>
	<view>
		<!-- 头部区域 -->
		<index-header></index-header>
		<index-header-icon></index-header-icon>
		<view class="news-title">{{list.text}}</view>
		<view class="news-number">
			<view class="">
				<uni-dateformat :date="list.time"
				format="yyyy/MM/dd"></uni-dateformat>
			</view>
			<view class="">
				来源:{{list.text}}
			</view>
		</view>
		<rich-text :nodes="list.content"></rich-text>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				list:[],
				data:''
			};
		},
		onLoad(e){
			this.id=e.id
			this.getData()
		},
		methods:{
			getData(){
				console.log(this.id);
				uniCloud.callFunction({
					name:"columns_get_row",
					data:{
						id:this.id
					}
				}).then(res=>{
					console.log(res);
					this.list=res.result.data[0]
					this.list.content=JSON.stringify(this.list.content).replace(/[\\]/g,'').replace(/[","]/g,'').replace(/\[|]/g, '');//replace(/\[|]/g, '')表示去除[]
					console.log(this.list.content);
					
					
				
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
