import React from 'react'
import './index.scss'
import SampleAction from 'actions/sample'
import { Button } from 'antd'
import Common from 'components/common'
import CommonServiceComponent from 'serviceComponents/CommonServiceComponent'

export default class Main extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
      
		}
	}

	componentDidMount () {
		this.requestInfo()
	}

	requestInfo = async () => {
		console.log(SampleAction)
		let res = await SampleAction.getAlgorithmsInfo({ code:'simple2complex' })
		console.log(res)
	}

	render () {
		return (
			<div className='main'>
				<Common/>
				{/* <CommonServiceComponent/> */}
				<Button type='primary'>TEST</Button>
				<button>normal button</button>
			</div>
		)
	}
}
