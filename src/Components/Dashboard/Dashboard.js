import { getNodeText } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import Listings from '../Home';
import { Link } from 'react-router-dom';
import API_URL from '../../config';
import axios from 'axios';

function Dashboard(props) {


	const [items, setItems] = useState([]);

	const id = localStorage.getItem('userId');
	
	const getItems = async () => {
		try {
			const res = await axios.get(`${API_URL}/api/items/user/${id}`);
			setItems(res.data);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getItems();
	}, []);

	console.log(items);

	return (
		<div>
			<h1>Hello From Dashboard</h1>
			<Link to='/dashboard/preferences'>
				<h4>Preferences</h4>
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
