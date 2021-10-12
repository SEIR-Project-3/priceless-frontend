import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config';

const Preferences = ({ match, user, setUser }) => {
	const [username, setUserName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [cPass, setCPass] = useState();
	const [modal, setModal] = useState(null);

	const id = localStorage.getItem('userId');

	const history = useHistory();

	const openEdit = () => {
		setModal(true);
	};

	const closeEdit = () => {
		setModal(false);
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
	// PUT axios() request to edit user info
	const handleSubmit = async (next, e) => {
		e.preventDefault();
		try {
			// Check if password match confirm password
			if (password === cPass) {
				// axios post request to send credentials to our backend
				const res = await axios.put(`${API_URL}/api/user/${id}`, {
					username: username,
					email: email,
					password: password,
				});
                setUser(res.data);
                history.push('/dashboard/preferences');
			}
		} catch (error) {
			next(error);
		}
	};

	const handleDelete = async (next) => {
		// Write your DELETE fetch() or axios() request here
		const verify = window.confirm('Are you sure you want to delete?');
		if (verify) {
			try {
				const response = await axios.delete(`${API_URL}/api/user/${id}`);
				const res = await axios.delete(`${API_URL}/api/items/user/${id}`);
				response.status === 200 && history.push('/');
			} catch (error) {
				next(error);
			}
		}
	};

	return (
		<div>
			<div>
				<h1 className='header'>Hello From Preferences</h1>
			</div>
			<section>
				{modal ? (
					<div className='modal'>
						<h2 className='header'>Editing User</h2>
						<form onSubmit={handleSubmit}>
							<label htmlFor=''>
								<p>Username</p>
								<input
									type='text'
									name=''
									id=''
									onChange={handleUserNameField}
								/>
							</label>
							<label htmlFor=''>
								<p>Email</p>
								<input type='text' name='' id='' onChange={handleEmailField} />
							</label>
							<label htmlFor=''>
								<p>New Password</p>
								<input
									type='password'
									name=''
									id=''
									onChange={handlePasswordField}
								/>
							</label>
							<label htmlFor=''>
								<p>Confirm Password</p>
								<input
									type='password'
									name=''
									id=''
									onChange={handleCPasswordField}
								/>
							</label>
							<button onClick={closeEdit}>Cancel</button>
							<button type='submit'>Submit</button>
						</form>
					</div>
				) : (
					<>
						<h2 className='header'>User Info</h2>
						<p>User Name: {user['username']}</p>
						<p>Email: {user.email}</p>

						<button onClick={openEdit}>Edit</button>
						<button onClick={handleDelete}>Delete</button>
					</>
				)}
			</section>
		</div>
	);
}

export default Preferences;
