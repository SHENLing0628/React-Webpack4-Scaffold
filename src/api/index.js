// 开发环境
const Host = 'http://localhost/dev'

const service = '/platform'

const apiList = {
	apilist: {
		query: Host + service + '/query', 
		call: Host +service + '/call', 
		uploadFile: Host + service + '/file/upload', 
		downloadFile: Host + service + '/file/downloadFile', 
	}
}

export default apiList
