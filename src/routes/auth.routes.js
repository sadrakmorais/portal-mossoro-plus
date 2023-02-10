import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import LadingPage from '../pages/LandingPage';


const ApplicationRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<LadingPage/>
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
                <Route path='/register'>
					<Register/>
				</Route>

				<Route exact path='*'>
					<h1>404</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default ApplicationRoutes;
