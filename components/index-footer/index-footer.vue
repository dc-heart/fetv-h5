<template>
	<view>
		<view class="footer">
			<image class="fetv" src="/static/教育网图片//logo2.png" mode="scaleToFill"></image>
			<text class="title">福建教育网 www.fetv.cn</text>
			<text class="supervisor" >主管:福建省委教育工委、福建省教育厅</text>
			<text class="host">主办:福建教育电视台</text>
			<view>
				<text class="linktitle">友情链接</text>
			</view>
			<view class="link">
				<uni-link href="http://www.moe.gov.cn/" text="教育部"  fontSize="24rpx" showUnderLine=false color="#3e3e3e" class="kind-link"></uni-link>
				<uni-link href="http://www.nrta.gov.cn/" text="国家广播电视总局" fontSize="24rpx" showUnderLine=false color="#3e3e3e"class="kind-link"></uni-link>
				<text class="kind-link" style=" color:#3e3e3e;font-size: 24rpx;">隐私政策</text>
				<uni-link href="http://gdj.fujian.gov.cn/" text="福建广播电视局" fontSize="24rpx" showUnderLine=false color="#3e3e3e"class="kind-link"></uni-link>
				<uni-link href="http://m.cetv.cn/" text="中国教育电视台" fontSize="24rpx" showUnderLine=false color="#3e3e3e"class="kind-link"></uni-link>
				<text class="kind-link" style="color:#3e3e3e;font-size: 24rpx;">用户协议</text>
				<uni-link href="http://jyt.fujian.gov.cn/" text="福建省教育厅" fontSize="24rpx" showUnderLine=false color="#3e3e3e"class="kind-link"></uni-link>
				<uni-link href="https://www.fjwyw.com/" text="福建文艺网" fontSize="24rpx" showUnderLine=false color="#3e3e3e" class="kind-link"></uni-link>
			</view>
			
			<view class="tel-email">
				<text class="tel">举报邮箱：FETV2020@163.COM </text>
				<text  class="tel">福建省新闻道德委举报电话：0591-87275327</text>
				<text  class="tel">福建教育网职业道德监督、违法和不良信息举报电话：</text>				<text  class="tel">0591-87091983</text>
				<text  class="tel">传真：0591-87802248</text>
				<text  class="tel"> 涉未成年人不良信息举报电话: 0591-87091983</text>
				<text  class="tel">广播电视节目制作经营许可证（闽）字第00026号</text>
				<text  class="teltitle1">闽ICP备 <text class="tel-number">  05027762号-1 </text> </text>
				<text  class="teltitle">互联网新闻信息服务许可证编号<text class="tel-number">（35120190012）</text></text>
				<text  class="teltitle">信息网络传播视听节目许可证号<text class="tel-number">（1309391）</text></text>
				
				
			</view>
			<view class="footer-img">
				<image class="footer-photosm" src="../../static/教育网图片/图层 642.jpg" mode=""></image>
				<image class="footer-photo" src="../../static/教育网图片/图层 643.jpg" mode=""></image>
				<image class="footer-photo" src="../../static/教育网图片/图层 644.jpg" mode=""></image>
				<image class="footer-photo" src="../../static/教育网图片/图层 645.jpg" mode=""></image>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"index-footer",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.footer{
	    position: relative;
		width: 750rpx;
		height: 989rpx;
		margin-top: 65rpx;
		background-color: #f7f8f9;
		

	.fetv{
		width: 116rpx;
		height: 88rpx;
		margin-left: 29rpx;
		margin-top: 33rpx;
	}
	.title{
		position: absolute;
		width: 346rpx;
		height: 30rpx;
		left: 162rpx;
		top: 33rpx;
		color: #1f1f1f;;
		font-size: 30rpx;

	}
	.supervisor{
		position: absolute;
		left: 165rpx;
		top: 84rpx;
		font-size: 22rpx;
		line-height: 14rpx;
		
		opacity: 0.5;
	}
	.host{
		position: absolute;
		left: 165rpx;
		top: 104rpx;
		font-size: 22rpx;
		
		opacity: 0.5;	
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
	.linktitle{
		display: inline-block;
		margin-top:10rpx ;
		margin-left:24rpx ;
	}
	.link{
		display: flex;
		flex-wrap: wrap;
		margin-left: 23rpx;
		font-size: 24rpx;
		line-height: 68rpx;
		.kind-link{
			color:#3e3e3e;
			font-size: 24rpx;
			width: 30%;
		}
		.kind-link:nth-child(2){
			width: 40%;
		}
		.kind-link:nth-child(5){
			width: 40%;
		}
		
	}
	.tel-email{
		display: flex;
		flex-wrap: wrap;
		
		.tel{
			font-size: 24rpx;
			line-height: 50rpx;
			color: #767676;
			margin-left: 23rpx;
			
		}
		.teltitle1{
			font-size: 24rpx;
			line-height: 50rpx;
			color: #292929;
			margin-left: 23rpx;
			margin-top: 30rpx;
		}
		.teltitle{
			font-size: 24rpx;
			line-height: 50rpx;
			color: #292929;
			margin-left: 23rpx;
			.tel-number{
				color: #1b72cb;
			}
		}
		
		
	}
	
	.footer-img{
		display: flex;
		justify-content: space-around;
		.footer-photosm{
			margin-top: 32rpx;
			width: 61rpx;
			height: 76rpx;
		}	
		.footer-photo{
			width: 170rpx;
			height: 66rpx;
			margin-top: 40rpx;
		}
	}
	
}
</style>