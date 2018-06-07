export function formatDate(date, fmt) {
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (date.getFullYear()+'').substr(4-RegExp.$1.length));
	}
	let o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds()
	};
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + ''
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length ===1) ? str : padLeftZero (str))
		}
	}
	return fmt;
};
// 补0的技巧 如果str = 9 则009提取09，即从str.length=1的下标开始
//           如果str = 10 则0010提取10，即str.length=2的下标开始
function padLeftZero (str) {
	return ('00'+str).substr(str.length)
}