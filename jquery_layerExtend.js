/*
 * @Author: Share 
 * @Date: 2018-04-16 15:50:17 
 * @Last Modified by: Share
 * @Last Modified time: 2018-04-16 16:24:18
 */


/*
 * 
 * 
 * @param {any} text 
 * @param {any} icon 
 * @param {any} func 
 * @param {any} title 
 * @returns 
 */
function alert(text, icon, func, title) {
	return "123";
}


(function ($) {


	$.layer = {

		//简单弹出 
		//param
		//text: 显示内容
		//icon：显示图标 可选，默认-1，-1 无图标 0 警告 1 成功 2 失败
		//func: 确认回调函数
		//title: 显示标题 可选，默认提示信息

		alert: function (text, icon, func, title) {
			var titleText = title ? title : "提示信息";
			var iconStyle = icon ? icon : -1;
			layer.alert(text, { title: titleText, icon: iconStyle }, function (index) {
				func();
				layer.close(index);
			});
		},

		//弹窗跳转
		//param
		//text: 显示内容
		//url: 跳转链接

		alertHref: function (text, url) {
			layer.alert(text, { icon: 1 }, function () {
				window.location.href = url;
			})
		},

		//确认弹窗
		//param
		//text: 显示文本
		//func：确认回调函数
		confirm: function (text, func) {
			layer.confirm(text, { icon: 0 }, function (index) {
				func();
				layer.close(index);
			})
		},

		//加载提示
		load: function () {
			var index = layer.load(2, {
				time: 60 * 1000,
				shade: [0.2, '#000']
			});
			return index;
		},

		//关闭所有layer弹层
		closeAll: function () {
			layer.closeAll();
		}

	};

})(jQuery)