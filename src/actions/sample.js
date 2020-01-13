import request from 'src/utils/_http'
import api from 'api'

export default{
	// 查询作业调度表
	async getAlgorithmsInfo (param) {
		try {
			let result = await request.get(api.algorithm.query, param)
			return result
		} catch (error) {
			console.log(error)
		}
	}
}
