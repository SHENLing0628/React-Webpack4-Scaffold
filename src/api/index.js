// 开发环境
const Host = 'http://10.1.119.13/ai/dev'
// 测试环境
// const Host = 'http://10.1.119.13/ai/test'
// 本地环境
// const Host = 'http://localhost:8083'

const alogorithmService = '/cetc-AI-platform'

const apiList = {
	algorithm: {
		query: Host + alogorithmService + '/algorithm/query', //算法查询
		call: Host +alogorithmService + '/algorithm/call', //算法调用
		uploadFile: Host + alogorithmService + '/file/upload', //文件上传
		downloadFile: Host + alogorithmService + '/file/downloadFile', //文件下载
	}
}

export default apiList
