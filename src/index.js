import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './router'
import 'src/assets/iconfont/iconfont.js'

ReactDOM.render(
	<Routes/>,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept()
}
