import React, { useContext } from 'react';

import { AuthContext } from '../store/Auth';

import AuthStack from './auth.routes';
import AdminStack from './admin.routes';
import CommomStack from './commom.routes';

const Routes = () => {
	const { isLogged, user } = useContext(AuthContext);

	console.log({isLogged});

	if (!isLogged) {
		return <AuthStack />;
	}

	return user.level === 0 ? <AdminStack /> : <CommomStack />;
};

export default Routes;
