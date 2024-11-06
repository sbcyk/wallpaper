// 获取系统信息
const SYSTEM_INFO = uni.getSystemInfoSync();

// 状态栏高度
export const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 10;

// 标题栏高度（胶囊按钮 + 上下小边距）
export const getTitleBarHeight = () => {
	if (uni.getMenuButtonBoundingClientRect) {
		const {top, height} = uni.getMenuButtonBoundingClientRect();
		return (top - getStatusBarHeight()) * 2 + height;
	} else {
		return 50;
	}
}

// 返回标题栏+状态栏的高度
export const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight();

// 抖音小程序处理左侧的图标
export const getLeftIconLeft = () => {
	// #ifdef MP-TOUTIAO
		let {leftIcon:{left, width}} = tt.getCustomButtonBoundingClientRect();
		return left + parseInt(width);
	// #endif
	
	// #ifndef MP-TOUTIAO
		return 0;
	// #endif
	
	return 0;
}