<template>
	<view class="layout">
		<view class="navBar">
			<view class="stateBar" :style="{height: getStatusBarHeight() + 'px'}"></view>
			
			<view class="titleBar" 
			:style="{height: getTitleBarHeight() + 'px', marginLeft: getLeftIconLeft() + 'px'}">
				<view class="title">{{ title }}</view>
				<navigator class="search" url="/pages/search/search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>
				</navigator>
			</view>
		</view>
		
		<view class="fill" :style="{height: getNavBarHeight() + 'px'}">
			<!-- 填充区域将状态栏和标题栏的位置填充，避免绝对定位的标题栏盖住下方内容 -->
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {getStatusBarHeight, getTitleBarHeight, getNavBarHeight, getLeftIconLeft} from '@/utils/system.js'

defineProps({
	title: {
		type: String,
		default: "壁纸"
	}
})
	
</script>

<style lang="scss" scoped>
.layout {
	.navBar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 10;
		background:
		 linear-gradient(to bottom, transparent, #fff 400rpx),
		 linear-gradient(to right, #beecd8 20%, #F4E2D8);
			
		.stateBar {
			// border: 1px solid red;
		}
		
		.titleBar {
			display: flex;
			align-items: center;
			padding: 0 30rpx;
			// border: 1px solid green;
			
			.title {
				font-size: 22px;
				font-weight: 700;
				color: $text-font-color-1;
			}
			
			.search {
				width: 220rpx;
				height: 50rpx;
				border-radius: 60rpx;
				background: rgba(255, 255, 255, 0.4);
				border: 1px solid #fff;
				margin-left: 30rpx;
				color: #999;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				
				.text {
					padding-left: 10rpx;
					
				}
				
				.icon {
					margin-left: 5rpx;
				}
			}
		}
	}
	
	.fill {
		
	}
}
</style>