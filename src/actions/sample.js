import request from 'src/utils/_http'
import api from 'api'

export default{
	async getInfo (param) {
		try {
			let result = await request.get(api.apilist.query, param)
			return result
		} catch (error) {
			console.log(error)
		}
	}
}
