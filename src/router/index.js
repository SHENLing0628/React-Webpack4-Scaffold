import React from 'react'
import { Route, Redirect, Switch, HashRouter as Router } from 'react-router-dom'
import Main from 'pages/Main'

console.log(module.hot)

const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" render={() => (
				<Redirect to="/main"/>
			)}/>
			<Route path='/main' component={Main}/>
		</Switch>
	</Router>
)

export default Routes
