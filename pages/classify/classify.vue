<template>
	<view class="classifyLayout pageBg">

		<custom-nav-bar title="分类"></custom-nav-bar>

		<view class="classify">
			<theme-item v-for="item in classifyList" :key="item._id" :item="item"></theme-item>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		apiGetClassify
	} from '../../api/apis.js';
	import {
		onShareAppMessage,
		onShareTimeline
	} from '@dcloudio/uni-app';

	const classifyList = ref([])

	const getClassify = async () => {
		let res = await apiGetClassify({
			pageSize: 20
		});
		console.log(res)
		classifyList.value = res.data
	}
	
	onShareAppMessage((e) => {
		return {
			title: 'iKe精选分类',
			path: '/pages/classify/classify'
		}
	});
	
	onShareTimeline(() => {
		return {
			title: 'iKe精选分类'
		}
	});

	getClassify();
</script>

<style lang="scss" scoped>
	.classify {
		padding: 30rpx;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 15rpx;
	}
</style>