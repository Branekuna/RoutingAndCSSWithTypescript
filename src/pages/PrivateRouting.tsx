import { RouteProps, Redirect, Route } from 'react-router';
//import { useContext } from 'react';
//import { AuthContext } from './AuthProvider'; // simple React.Context

export const PrivateRoute: React.FC<RouteProps> = ({ children, ...props }) => {
	//const { authenticated } = useContext(AuthContext);
	const authenticated = true;
	return (
		<Route
			{...props}
			render={() => {
				if (!authenticated) return <Redirect to="/login" />;
				return children;
			}}
		/>
	);
};
