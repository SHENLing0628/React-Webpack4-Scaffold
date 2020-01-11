import request from '@/utils/_http'
import api from '@/api'

export default{
	// 查询作业调度表
	getJobs (param) {
		return async (dispatch) => {
			try {
				// let result = await request.get('http://172.11.11.122/test/getdata', param)
				// if (result && result.code === 10000) {
				// 	dispatch({
				// 		type: 'SET_DATA',
				// 		dataList: result.result
				// 	})
				// }
				let result = 'result'
				return result
			} catch (error) {
				console.log(error)
			}
		}
	}
}
