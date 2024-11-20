<template>
	<view class="classlist">
		<view class="loadingLayout" v-if="!classlist.length && !noData">
			<uni-load-more status="loading"></uni-load-more>
		</view>

		<view class="content">
			<navigator :url="`/pages/preview/preview?id=${item._id}`" class="item" v-for="item in classlist"
				:key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>

		<view class="loadingLayout" v-if="noData || classlist.length">
			<uni-load-more :status="noData ? 'noMore' : 'loading'"></uni-load-more>
		</view>

		<view class="safe-area-inset-bottom"></view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';

	import {
		apiGetClassList,
		apiHistoryWallList
	} from "../../api/apis.js"
	import {
		onLoad,
		onReachBottom,
		onShareAppMessage,
		onShareTimeline,
		onUnload
	} from "@dcloudio/uni-app"
	import {
		gotoHome
	} from "@/utils/common.js"

	const queryParams = {
		pageNum: 1,
		pageSize: 12
	}
	let pageName;

	const noData = ref(false)

	onLoad((e) => {
		// console.log(e)
		let {id = null, name = null, type = null} = e;
		if (type) queryParams.type = type;
		if(id) queryParams.classid = id;
		// if (!id) gotoHome();
		
		pageName = name;

		uni.setNavigationBarTitle({
			title: name
		})

		getClassList();
	})

	onReachBottom(() => {
		if (noData.value) return;

		queryParams.pageNum++;
		getClassList();
	})

	const classlist = ref([])

	const getClassList = async () => {
		let res;
		if (queryParams.classid) {
			 res = await apiGetClassList(queryParams);
		} else if (queryParams.type) {
			console.log(queryParams)
			 res = await apiHistoryWallList(queryParams);
		}
		
		classlist.value = [...classlist.value, ...res.data] // 向下拼接
		// 触底数据不足则不再请求
		if (res.data.length < queryParams.pageSize) noData.value = true

		// 缓存图片
		uni.setStorageSync('storageClassList', classlist.value)
	}

	onShareAppMessage((e) => {
		return {
			title: 'iKe精选@',
			path: `/pages/classlist/classlist?id=${queryParams.classid}&name=${pageName}`
		}
	});

	onShareTimeline(() => {
		return {
			title: 'iKe精选@'
		}
	});
	
	
	onUnload(() => {
		uni.removeStorageSync('storageClassList')
	})
</script>

<style lang="scss" scoped>
	.classlist {
		.content {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 5rpx;
			padding: 5rpx 5rpx;

			.item {
				height: 440rpx;

				image {
					width: 100%;
					height: 100%;
					display: block;
				}
			}
		}
	}
</style>