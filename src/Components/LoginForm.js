import React, { useState } from 'react';
import API_URL from '../../config';

export const LoginForm = () => {
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();

	// function to allow the user to login
	const loginUser = async () => {
		try {
			// axios post request to send credentials to our backend
			const res = await axios.post(`${API_URL}/signin`, {
				username: username,
				password: password,
			});
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
		<form>
			<label htmlFor=''>
				<p>Username:</p>
				<input type='text' name='' id='' onChange={handleUserNameField} />
			</label>
			<label htmlFor=''>
				<p>Password</p>
				<input type='text' name='' id='' onChange={handlePasswordField} />
			</label>
			<div>
				<button type='submit'>Submit</button>
			</div>
		</form>
	);
};
