<template>
	<view>
		<index-header></index-header>
		<index-header-icon></index-header-icon>
		<view class="schoolHeader">
			<view class="schoolImg">
				<image :src="baseUrl + detail.firstImage"></image>
			</view>
			
			<view class="schoolTitle">
				<view class="schoolName">{{detail.schoolName}}</view>
				<view class="title">
					<text>学校性质</text>
					<text>重点学校</text>
				</view>
				<view class="quality">{{detail.schoolQuality}}</view>		
			</view>
		</view>
		
		<view class="schoolAddress">
			<text class="address">{{detail.schoolAddress}}</text>
			<text class="distance">据您8km</text>
			<view class="mybox">
				<view class="mymap">
					<uni-icons type="paperplane-filled" class="icon" color="blue">
						<map name="map" id="map" style="width: 100%; height: 300px;"
						latitude="latitude" longitude="longitude"
						 :markers="marker"></map>
					</uni-icons>
				</view>
				<view class="mytel">
					<uni-tooltip :content="detail.schoolPhone">
					    <uni-icons type="phone-filled" class="icon" color="blue"></uni-icons>
					</uni-tooltip>
				</view>
			</view>		
		</view>
		
		<view class="schoolImage">
			<image :src="baseUrl + detail.firstImage"  mode=""></image>
		</view>
		
		<view class="schoolIntro">
			<text>学校简介</text>
			<rich-text :nodes="detail.synopsis"></rich-text>
		</view>
		
		<view class="schoolOffical">
			<text>学校官网</text>
			<uni-link style="color: blue;" href="https://uniapp.dcloud.io/" text="https://uniapp.dcloud.io/"></uni-link>
		</view>
		
		<view class="schoolBeau">
			<text>校园风光</text>
			<image :src="baseUrl + detail.schoolIcon" mode="aspectFill"></image>
		</view>
		
		<view class="schoolFooter">
			<view class="fNews">
				<text>院校新闻</text>
				<text>最新资讯</text>
			</view>
			<view class="fAbout">
				<text>招生信息</text>
				<text>了解更多</text>
			</view>
			<view class="fVideo">
				<text>院校视频</text>
				<text>直观感受</text>
			</view>
			
		</view>
	</view>
</template>

<script>
	
export default {
	data() {
		return {
			id:0, // 使用 marker点击事件 需要填写id
			title: 'map',
			latitude: 39.909,
			longitude: 116.39742,
			marker: [{
				latitude: 39.909,
				longitude: 116.39742,
				iconPath: '../static/教育网图片/g5.png'
			}, {
				latitude: 39.90,
				longitude: 116.39,
				iconPath: '../static/教育网图片/g5.png'
			}],
			detail:{},
			sid:'',
			options: null
		};
	},
	onLoad(options) {
		console.log(options);
		this.sid=options.sid
		this.getschoolDetail();
	},
	methods :{
		getschoolDetail(){
			uni.request({
				url: `${this.baseUrl}/index/fetv/school?schoolId=${this.sid}`,
				methods: "GET",
				data:this.options,
				success: (res) => {
					console.log(res);
					if(res.statusCode == 200){
						console.log("请求成功");
						this.detail = res.data.data
					}
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.schoolHeader {
	position: relative;
	width: 300rpx;
	height: 200rpx;
	.schoolImg {
		padding: 40rpx;
		image {
			width: 262rpx;
			height: 172rpx;
			border-radius: 8rpx;
			border: 1rpx solid red;
		}
	}
	.schoolTitle{
		width: 400rpx;
		height: 100%;
		flex:1;
		position: absolute;
		top: 40rpx;
		left: 340rpx;
		.schoolName {
			font-family: NotoSansHans-Bold;
			font-size: 36rpx;
			color: #272727;
		}
		.title {
			padding-top: 25rpx;
			text {
				color: #ccc;
				font-size: 26rpx;
				margin-right: 15rpx;	
			}
		}
		.quality {
			margin-top: 32rpx;
			font-size: 28rpx;
			color: #ba0825;	
		}
	}
}

.schoolAddress {
	position: relative;
	padding: 60rpx 0 40rpx 40rpx;
	text {
		display: block;
	}
	.address {
		font-family: NotoSansHans-Regular;
		font-size: 28rpx;
	}
	.distance {
		font-family: NotoSansHans-Regular;
		font-size: 25rpx;
		padding-top: 6rpx;
		color: #ccc;
	}
	.mybox {
		.mymap{
			position: absolute;
			top: 70rpx;
			right: 200rpx;
			border-radius: 10px;
			width: 40rpx;
			height: 40rpx;
			background-color: #ccc;
			.icon {
				line-height: 40rpx;
			}
		}
		.mytel{
			position: absolute;
			top: 70rpx;
			right: 55rpx;
			border-radius: 10px;
			width: 40rpx;
			height: 40rpx;
			background-color: #ccc;
			.icon {
				line-height: 40rpx;
			}
			
		}
	}
} 

.schoolImage {
	padding-top: 0rpx;
	text-align: center;
	image {
		width: 670rpx;
		margin: 0 auto;
		border-radius: 15rpx;
	}
}

.schoolIntro {
	padding: 60rpx 0 20rpx 40rpx;
	text {
		width: 134rpx;
		height: 33rpx;
		font-family: NotoSansHans-Bold;
		font-size: 42rpx;
		font-weight: bold;
	}
	rich-text {
		color: red;
	}
}

.schoolOffical {
	padding: 40rpx 0 40rpx 40rpx;
	text {
		font-size: 42rpx;
		font-weight: bold;
		display: block;
	}
}

.schoolBeau {
	padding: 40rpx;
	text {
		display: block;
		font-family: NotoSansHans-Bold;
		font-size: 42rpx;
		font-weight: bold;
		margin-bottom: 20rpx;
	}
	image {
		width: 231rpx;
		height: 231rpx;
		background-color: #281c7b;
		border-radius: 12rpx;
	}
}

.schoolFooter {
	display: flex;
	justify-content: space-between;
	padding: 40rpx;
	text {
		display: block;
		width: 180rpx;
	}
	text:nth-child(2) {
		font-size: 28rpx;
		color: #ccc;
	}
	text:hover {
		
	}
	text:nth-child(1):hover{
		color: rgb(255,0,82);
		font-size: 42rpx;
		font-weight: bold;
	}
	text:nth-child(2):hover { 
		background-color: rgb(255,0,82);
		border-radius: 18rpx;
		width: 115rpx;
	}
}



</style>
