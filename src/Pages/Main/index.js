import React from 'react'
import './index.scss'
import SampleAction from 'actions/sample'
import { Button } from 'antd'
import Common from 'components/common'
import IconComponent from 'components/IconComponent'

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
				<Common/>
				{/* 使用Iconfont组件 */}
				<IconComponent className='icon' icon='#iconLogininvalidx'/>
				<Button type='primary'>TEST123</Button>
				<img className='imageIcon' src={require('../../assets/images/logo.png')}/>
				<button>normal button</button>
			</div>
		)
	}
}
