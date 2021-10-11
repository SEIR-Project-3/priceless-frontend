import { getNodeText } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API_URL from '../config';
import axios from 'axios';

function Dashboard(props) {

	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
			.get(`${API_URL}/api/users`)
			.then((res) => setUsers(res.data))
	
		})

	return (
		<div>
				<h1>Hello From Dashboard</h1>
			<Link to='/dashboard/preferences'>
				<h4>Preff</h4>
			</Link>
		</div>
	);
}
export default Dashboard;
