import React from 'react'
import './index.scss'

import Common from 'components/common'
import CommonServiceComponent from 'serviceComponents/CommonServiceComponent'

export default class Main extends React.Component {

	constructor (props) {
		super(props)
		this.state = {
      
		}
	}

	render () {
		return (
			<div className='main'>
				<Common/>
				<CommonServiceComponent/>
			</div>
		)
	}
}
