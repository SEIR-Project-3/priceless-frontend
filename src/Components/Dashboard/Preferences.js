import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config';

const Preferences = ({ match, setUserModal, setLoggedIn }) => {
	const [password, setPassword] = useState();
	const [cPass, setCPass] = useState();
	const [user, setUser] = useState();
	const id = localStorage.getItem('userId');
	const history = useHistory();

	
	useEffect(() => {
		getUser()
	}, [])

	const getUser = async () => {
		try {
			const res = await axios.get(`${API_URL}/api/user/${id}`);
			setUser(res.data);
		} catch (error) {
			console.log(error)
		}
	};

	// function to capture password input -- find a way to combine the two if possible
	const handlePasswordField = (e) => {
		setPassword(e.target.value);
	};
	const handleCPasswordField = (e) => {
		setCPass(e.target.value);
	};

	// PUT axios() request to edit user info
	const handleSubmit = async (evt, next) => {
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
			}
		} catch (error) {
			next(error);
		}
	};

	const handleDelete = async () => {
		const verify = window.confirm('Are you sure you want to delete?');
		if (verify) {
			try {
				const res = await axios.delete(`${API_URL}/api/user/${id}`);
				setUserModal(false);
				history.push('/home');
				localStorage.clear();
				setLoggedIn(false);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<div>
			<section className='modal-container'>
				<div className='modal-container__child'>
					<h2 className='header'>Change Password</h2>
					<form onSubmit={handleSubmit}>
						<label className='label' htmlFor=''>
							New Password
						</label>
						<input type='password' onChange={handlePasswordField} />
						<label className='label' htmlFor=''>
							Confirm Password
						</label>
						<input type='password' onChange={handleCPasswordField} />
						<span className='modal-buttons'>
							<button onClick={(e) => setUserModal(false)}>Cancel</button>
							<button type='submit'>Submit</button>
							<button onClick={handleDelete}>Delete</button>
						</span>
					</form>
				</div>
			</section>
		</div>
	);
};

export default Preferences;
