import {
	request
} from '../utils/request.js'

export function apiGetBanner(data = {}) {
	return request({
		url: '/homeBanner',
		data
	});
}

export function apiGetDayRadom(data = {}) {
	return request({
		url: '/randomWall',
		data
	});
}

export function apiGetNotice(data = {}) {
	return request({
		url: '/wallNewsList',
		data
	})
}

export function apiGetClassify(data = {}) {
	return request({
		url: '/classify',
		data
	})
}

export function apiGetClassList(data = {}) {
	return request({
		url: '/wallList',
		data
	})
}
