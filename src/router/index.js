import React from 'react'
import { Route, Redirect, Switch, HashRouter as Router } from 'react-router-dom'
import Test from 'pages/Test'

const Routes = () => (
<Router>
		<Switch>
			<Route exact path="/" render={() => (
				<Redirect to="/main"/>
			)}/>
			<Route path='/main' component={Test}/>
		</Switch>
	</Router>
)

export default Routes
