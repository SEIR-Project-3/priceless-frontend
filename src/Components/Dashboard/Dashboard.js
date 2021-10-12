import { getNodeText } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import Listings from '../Home';
import { Link } from 'react-router-dom';
import API_URL from '../../config';
import axios from 'axios';

const Dashboard = (props) => {
	const [items, setItems] = useState([]);

	const id = localStorage.getItem('userId');
	
	const getItems = async (next) => {
		try {
			const res = await axios.get(`${API_URL}/api/items/user/${id}`);
			setItems(res.data);
		} catch (error) {
			next(error);
		}
	};

	useEffect(() => {
		getItems();
	}, []);

	return (
		<div>
			<h1 className='header'>Hello From Dashboard</h1>
			<Link to='/dashboard/preferences'>
				<p>Preferences</p>
			</Link>
			<div className='listings'>
				{items.map((item) => (
					<div>
						<img src={item.image} alt={item.title} />
						<p className='title'>{item.title}</p>
						<p className='description'>{item.description}</p>
						<p className='zip'>{item.zip}</p>
					</div>
				))}
			</div>
		</div>
	);
}
export default Dashboard;
