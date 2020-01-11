import http from 'http'
import https from 'https'

export default {
	headers: {
		'Content-Type': 'application/json;charset=GB2312;',
		'X-Requested-With': 'XMLHttpRequest',
		'Accept-Language': 'zh-CN',
	},
	// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL
	baseURL: process.env.NODE_ENV === 'development' ? 'http://172.10.10.232:8083/' : 'http://172.10.10.232:8083/',
	// 超时设置
	timeout: 120000000,
	// 跨域是否带token
	withCredentials: true,
	// 响应的数据格式 json/blob/document/arraybuffer/text/stream
	responseType: 'json',
	// `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
	xsrfCookieName: 'XSRF-TOKEN',
	// `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
	xsrfHeaderName: 'X-XSRF-TOKEN',
	// `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
	validateStatus: function (status) {
		return status >= 200 && status < 300 // 默认的
	},
	// 用于node.js
	// 在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理
	httpAgent: new http.Agent({
		keepAlive: true
	}),
	httpsAgent: new https.Agent({
		keepAlive: true
	})
}
