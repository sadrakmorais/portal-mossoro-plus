import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Events from '../pages/Events';
import Layout from '../components/Layout';
import SubmitEvents from '../pages/SubmitEvents'
import Home from '../pages/Home'
import PendingEvents from '../pages/PendingEvents'


const authRoutes = ['/login', '/register'];

const ApplicationRoutes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={authRoutes}>
					<Redirect to='/home' />
				</Route>

				<Route exact path='/'>
                <Redirect to='/home' />
				</Route>
				<Route exact path='/home'>
					<Layout>
						<Home />
					</Layout>
				</Route>
				<Route exact path='/events'>
					<Layout>
						<Events />
					</Layout>
				</Route>
				<Route exact path='/events/submit'>
					<Layout>
						<SubmitEvents/>
					</Layout>
				</Route>
				<Route exact path='/events/pending'>
					<Layout>
						<PendingEvents/>
					</Layout>
				</Route>

				<Route exact path='*'>
					<h1>404</h1>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default ApplicationRoutes;
