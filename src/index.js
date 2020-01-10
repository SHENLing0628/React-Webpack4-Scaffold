import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './router'
import { AppContainer } from 'react-hot-loader'

renderWithHotReload(Routes)

/*热更新*/
if (module.hot) {
	module.hot.accept('./router/index.js', () => {
		const Routes = require('./router/index.js').default
		renderWithHotReload(Routes)
	})
}

function renderWithHotReload (Routes) {
	ReactDOM.render(
		<AppContainer>
			<Routes />
		</AppContainer>,
		document.getElementById('root')
	)
}
