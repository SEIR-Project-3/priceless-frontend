import React, { useState } from 'react';
import API_URL from '../../config';
import axios from 'axios';

export const SignUpForm = () => {
	const [username, setUserName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
    const [cPass, setCPass] = useState();

	// function to allow the user to login
	const createUser = async (evt) => {
		evt.preventDefault();
		try {
            // Check if password match confirm password
            if (password === cPass) {
                // axios post request to send credentials to our backend
                const res = await axios.post(`${API_URL}/api/signup`, {
                    username: username,
                    email: email,
                    password: password,
                });
                console.log(res);  
            }
		} catch (error) {
			console.log(error);
		}
	};

	// function to capture username input
	const handleUserNameField = (e) => {
		setUserName(e.target.value);
	};
	// function to capture email input
	const handleEmailField = (e) => {
		setEmail(e.target.value);
	};
	// function to capture password input -- find a way to combine the two if possible
	const handlePasswordField = (e) => {
		setPassword(e.target.value);
	};
    const handleCPasswordField = (e) => {
		setCPass(e.target.value);
	};

	return (
		<form onSubmit={createUser}>
			<label htmlFor=''>
				<p>Username:</p>
				<input type='text' name='' id='' onChange={handleUserNameField} />
			</label>
			<label htmlFor=''>
				<p>Email:</p>
				<input type='text' name='' id='' onChange={handleEmailField} />
			</label>
			<label htmlFor=''>
				<p>Password</p>
				<input type='password' name='' id='' onChange={handlePasswordField} />
			</label>
			<label htmlFor=''>
				<p>Confirm Password</p>
				<input type='password' name='' id='' onChange={handleCPasswordField} />
			</label>
			<div>
				<button type='submit'>Create Account</button>
			</div>
		</form>
	);
};
