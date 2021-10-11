import React, { useState } from 'react';
import API_URL from '../../config';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export const LoginForm = ({ setLoggedIn }) => {
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
			console.log(res);
			const token = res.data.token;
			const userId = res.data.user.id
			localStorage.setItem('userId', userId)
			localStorage.setItem('token', token);
			setLoggedIn(true);
			history.push('/home');
			// stopped here because unsure about setting of tokens and where to place. will reach out to Esin tomorrow
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
		<form onSubmit={loginUser}>
			<label htmlFor=''>
				<p>Username:</p>
				<input type='text' name='' id='' onChange={handleUserNameField} />
			</label>
			<label htmlFor=''>
				<p>Password</p>
				<input type='password' name='' id='' onChange={handlePasswordField} />
			</label>
			<div>
				<button type='submit'>Submit</button>
			</div>
		</form>
	);
};
