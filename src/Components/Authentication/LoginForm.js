import React, { useState } from 'react';
import API_URL from '../../config';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginForm = ({ setLoggedIn }) => {
	const history = useHistory();
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();

	// function to allow the user to login
	const loginUser = async (e) => {
		e.preventDefault();
		try {
			// axios post request to send credentials to our backend
			const res = await axios.post(`${API_URL}/api/signin`, {
				username: username,
				password: password,
			});
			const token = res.data.token;
			const userId = res.data.user.id;
			localStorage.setItem('userId', userId);
			localStorage.setItem('token', token);
			setLoggedIn(true);
			history.push('/home');
		} catch (error) {
			console.log(error);
		}
	};

	// function to capture username input
	const handleUserNameField = (e) => {
		setUserName(e.target.value);
	};

	// function to capture password input -- find a way to combine the two if possible
	const handlePasswordField = (e) => {
		setPassword(e.target.value);
	};

	return (
		<form className='login-form' onSubmit={loginUser}>
			<label className='label' htmlFor=''>
				Username
			</label>
				<input type='text' name='' id='' onChange={handleUserNameField} />
			<label className='label' htmlFor=''>
				Password
			</label>
				<input type='password' name='' id='' onChange={handlePasswordField} />
			<div>
				<button type='submit'>Submit</button>
			</div>
		</form>
	);
};

export default LoginForm;
