import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config';

const Preferences = ({ match, user, setUser, setUserModal, setLoggedIn }) => {

	console.log(user);
	const [password, setPassword] = useState();
	const [cPass, setCPass] = useState();

	const id = localStorage.getItem('userId');

	const history = useHistory();

	// function to capture password input -- find a way to combine the two if possible
	const handlePasswordField = (e) => {
		setPassword(e.target.value);
	};
	const handleCPasswordField = (e) => {
		setCPass(e.target.value);
	};

	// PUT axios() request to edit user info
	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
			// Check if password match confirm password
			if (password === cPass) {
				// axios post request to send credentials to our backend
				const res = await axios.patch(`${API_URL}/api/user/${id}`, {
					password: password,
				});
				setUser(res.data);
				setUserModal(false);
				console.log(res);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async () => {
		const verify = window.confirm('Are you sure you want to delete?');
		if (verify) {
			try {
				const res = axios.delete(`${API_URL}/api/items/user/${id}`);
				const response = await axios.delete(`${API_URL}/api/user/${id}`);
				setUserModal(false);
				history.push('/home');
				localStorage.clear();
				// setLoggedIn(false);
			} catch (error) {
				console.log(error);
			}
		}
	}
	
	return (
		<div>
			<section classname='modal-container'>
				<div className='modal-container__child'>
					<h2 className='header'>Editing User</h2>
					<form onSubmit={handleSubmit}>
						<label htmlFor=''>
							<p>New Password</p>
							<input
								type='password'
								onChange={handlePasswordField}
							/>
						</label>
						<label htmlFor=''>
							<p>Confirm Password</p>
							<input
								type='password'
								onChange={handleCPasswordField}
							/>
						</label>
						<button onClick={(e) => setUserModal(false)}>Cancel</button>
						<button type='submit'>Submit</button>
					</form>
					{/* <button onClick={handleDelete}>Delete Acount</button> */}
				</div>
			</section>
		</div>
	);
}

export default Preferences;
