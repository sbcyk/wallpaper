<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item in 5">
				<image @click="maskChange" src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		
		<view class="mask" v-show="maskState">
			<view class="goBack"></view>
			<view class="count">3 / 9</view>
			<view class="time">
				<uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat>
			</view>
			<view class="date">
				<uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat>
			</view>
			<view class="footer">
				<view class="box" @click="clickInfo">
					<uni-icons type="info" size="28"></uni-icons>
					<view class="text">信息</view>
				</view>
				
				<view class="box" @click="clickScore">
					<uni-icons type="star" size="28"></uni-icons>
					<view class="text">5分</view>
				</view>
				
				<view class="box">
					<uni-icons type="download" size="23"></uni-icons>
					<view class="text">下载</view>
				</view>
			</view>
		</view>
		
		<uni-popup ref="infoPopup" type="bottom">
			<view class="infoPopup">
				<view class="popHeader">
					<view></view>
					<view class="title">壁纸信息</view>
					<view class="close" @click="clickInfoClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				
				<scroll-view scroll-y>
					<view class="content">
						<view class="row">
							<view class="label">壁纸ID：</view>
							<text class="value" selectable>123523asdas4</text>
						</view>
						
						<view class="row">
							<view class="label">分类：</view>
							<text class="value class">明星美女</text>
						</view>
						
						<view class="row">
							<text class="label">发布者：</text>
							<view class="value">大鸡巴</view>
						</view>
						
						<view class="row">
							<text class="label">评分：</text>
							<view class="value roteBox">
								<uni-rate value="3.5" size="16" @change="onChange" readonly />
								<text class="score">5分</text>
							</view>
						</view>
						
						<view class="row">
							<text class="label">摘要：</text>
							<view class="value">
								大鸡巴大鸡巴巴大鸡巴大鸡巴大鸡巴大鸡巴大鸡巴大鸡大鸡巴大鸡大鸡巴大大鸡巴大
								鸡巴巴大鸡巴大鸡巴大鸡巴大鸡巴大鸡巴大鸡大鸡巴大鸡大鸡巴大
							</view>
						</view>
						
						<view class="row">
							<text class="label">标签：</text>
							<view class="value tabs">
								<view class="tab" v-for="item in 3">标签名</view>
							</view>
						</view>
						
						<view class="copyright">
							声明：本图片来自用户投稿，非商业使用，用于免费学习交流，如侵犯了您的权益，
							您可以拷贝壁纸ID举报至平台，邮箱1174773265@qq.com，管理将删除侵权壁纸，维护您的权益
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>
		
		<uni-popup ref="scorePopup">
			<view class="scorePopup">
				<view class="popHeader">
					<view></view>
					<view class="title">壁纸评分</view>
					<view class="close" @click="clickScoreClose">
						<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
					</view>
				</view>
				
				
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const maskState = ref(true);
const infoPopup = ref(null);
const scorePopup = ref(null)


// 点击info弹窗
const clickInfo = () => {
	infoPopup.value.open();
}
// 点击关闭info弹窗
const clickInfoClose = () => {
	infoPopup.value.close();
}

// 打开评分弹窗
const clickScore = () => {
	scorePopup.value.open();
}
// 关闭评分弹窗
const clickScoreClose = () => {
	scorePopup.value.close();
}

// 切换遮罩状态
const maskChange = () => {
	maskState.value = !maskState.value
}
</script>

<style lang="scss" scoped>
.preview {
	width: 100%;
	height: 100vh;
	position: relative;
	
	swiper {
		width: 100%;
		height: 100%;
		
		image {
			width: 100%;
			height: 100%;
		}
	}
	
	.mask {
		&>view {
			//mask紧邻的子元素
			color: #fff;
			position: absolute;
			left: 0;
			right: 0;
			margin: auto;
			width: fit-content;	//内容自适应宽度
		}
		
		.goBack {
			
		}
		
		.count {
			top: 10vh;
			background: rgba(0, 0, 0, 0.3);
			font-size: 28rpx;
			border-radius: 40rpx;
			padding: 8rpx 28rpx;
			backdrop-filter: 10rpx;
		}
		
		.time {
			font-size: 140rpx;
			top: calc(10vh + 80rpx);
			font-weight: 100;
			line-height: 1em;
			text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
		}
		
		.date {
			font-size: 34rpx;
			top: calc(10vh + 230rpx);
			text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
		}
		
		.footer {
			background: rgba(255, 255, 255, 0.8);
			bottom: 10vh;
			width: 65vw;
			height: 120rpx;
			border-radius: 120rpx;
			color: #000;
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
			
			.box {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 2rpx 12rpx;	// 更好点击,因为没有添加box大小，当增加内边距，box会向外撑大
				// border: red solid 1px;
				
				.text {
					font-size: 26rpx;
					color: $text-font-color-2;
				}
			}
		}
	}
	
	.infoPopup {
		background: #fff;
		padding: 30rpx;
		border-radius: 30rpx 30rpx 0 0;
		overflow: hidden;
		
		.popHeader {
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			.title {
				color: $text-font-color-2;
				font-size: 26rpx;
			}
			
			.close {
				// border: 1px solid red;
				padding: 6rpx;
			}
		}
		
		scroll-view {
			max-height: 60vh;
			
			.content {
				.row {
					display: flex;
					padding: 16rpx 0;
					font-size: 32rpx;
					line-height: 1.7em;
					
					.label {
						color: $text-font-color-3;
						width: 140rpx;
						text-align: right;
						font-size: 30rpx;
					}
					
					.value {
						flex: 1;
						width: 0;
					}
					
					.roteBox {
						display: flex;
						align-items: center;
						
						.score {
							font-size: 26rpx;
							color: $text-font-color-2;
							padding: 10rpx;
						}
					}
					
					.tabs {
						display: flex;
						flex-wrap: wrap;
						
						.tab {
							border: 1px solid $brand-theme-color;
							color: $brand-theme-color;
							font-size: 22rpx;
							padding: 10rpx 30rpx;
							border-radius: 40rpx;
							line-height: 1em;
							margin: 0 10rpx 10rpx 0;
							
						}
					}
					
					.class {
						color: $brand-theme-color;
					}
				}
				
				.copyright {
					font-size: 28rpx;
					padding: 20rpx;
					background: #F6F6F6;
					color: $text-font-color-2;
					border-radius: 10rpx;
					margin: 20rpx 0;
					line-height: 1.6em;
				}
			}
		}
	}
}	       
</style>
