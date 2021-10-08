import React from 'react';
import { LoginForm } from './LoginForm';

function Login({ setLoggedIn }) {
	return (
		<div>
			<LoginForm setLoggedIn={setLoggedIn} />
		</div>
	);
}

export default Login;
