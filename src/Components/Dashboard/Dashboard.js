import { getNodeText } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Preferences from './Preferences';
import API_URL from '../../config';
import EditItem from './EditItem';
import axios from 'axios';

const Dashboard = () => {
	const [user, setUser] = useState();
	const [userModal, setUserModal] = useState(false);

	const [items, setItems] = useState([]);
	const [activeItem, setActiveItem] = useState(null);
	const [modal, setModal] = useState(false);

	const id = localStorage.getItem('userId');

	const getUser = async () => {
		try {
			const res = await axios.get(`${API_URL}/api/user/${id}`);
			setUser(res.data);
		} catch (error) {
			console.log(error)
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	const getItems = async () => {
		try {
			const res = await axios.get(`${API_URL}/api/items/user/${id}`);
			setItems(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getItems();
	}, []);

	return (
		<div>
			<h1 className='header'>Dashboard</h1>
			<button
				onClick={(e) => {
					setUserModal(true);
				}}>
				Edit User
			</button>

			<div className='card-container'>
				{items.map((item) => (
					<div
						className='card-container__item'
						onClick={(e) => {
							setModal(true);
							setActiveItem(item);
						}}>
						<img src={item.image} alt={item.title} />
						<p className='title'>{item.title}</p>
						<p className='description'>{item.description}</p>
						<p className='zip'>{item.zip}</p>
					</div>
				))}

				{/* Display modal for editing items info */}
				{modal && <EditItem item={activeItem} setModal={setModal} />}

				{/* Display modal for editing user info */}
				{userModal && (
					<Preferences
						setUserModal={setUserModal}
					/>
				)}
			</div>
		</div>
	);
};
export default Dashboard;
