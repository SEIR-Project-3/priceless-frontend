import React, { useState, useEffect } from 'react';
import Listing from './Listing';
import axios from 'axios';
import API_URL from '../config';

const Listings = (props) => {
	const [listings, setListings] = useState([]);

	const getListing = async () => {
		try {
			const res = await axios.get(`${API_URL}/api/items`);
			setListings(res.data);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getListing();
	}, []);

	if (!listings) {
		// placeholder can do something more dynamic later
		return <h2>Loading...</h2>;
	}

	// Our results are displayed below
	return (
		<div>
			<div className='listings'>
				{listings.map((item) => (
					<Listing item={item} key={item._id} />
				))}
			</div>
		</div>
	);
};

export default Listings;
