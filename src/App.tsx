import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthLayout } from './pages/AuthLayout';
import { MainLayout } from './pages/MainLayout/MainLayout';
import { PrivateRoute } from './pages/PrivateRouting';

export const App: React.FC = () => (
	<>
		<Switch>
			<Redirect exact from="/" to="/home" />
			<Route path={['/login', '/register']}>
				<AuthLayout>
					<Route path="/login" component={() => <h1>Login</h1>} />
					<Route path="/register" component={() => <h1>Register</h1>} />
				</AuthLayout>
			</Route>
			<PrivateRoute exact path={['/home', '/topics', '/topics/:topicId']}>
				<MainLayout>
					<Route exact path="/home" component={() => <h1>Home</h1>} />
					<Route exact path="/topics" component={() => <h1>/TOPICS</h1>} />
					<Route
						exact
						path="/topics/:topicId"
						component={() => <h1>/TOPICWITHID</h1>}
					/>
				</MainLayout>
			</PrivateRoute>
			<Route path="*" component={() => <h1>Not Found</h1>} />
		</Switch>
	</>
);
