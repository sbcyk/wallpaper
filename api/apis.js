import {
	request
} from '../utils/request.js'

export function apiGetBanner() {
	return request({
		url: '/homeBanner'
	});
}

export function apiGetDayRadom() {
	return request({
		url: '/randomWall'
	});
}

export function apiGetNotice() {
	return request({
		url: '/wallNewsList'
	})
}