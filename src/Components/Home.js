import React, { useState, useEffect } from 'react';
import Listing from './Listing';
import axios from 'axios';
import API_URL from '../config';

const Listings = (props) => {
	const [listings, setListings] = useState();
	const [loading, setLoading] = useState(true);

	const getListing = async (next) => {
		try {
			const res = await axios.get(`${API_URL}/api/items`);
			setListings(res.data);
		} catch (error) {
			next(error);
		}
	};

	useEffect(() => {
		getListing();
	}, []);

	// UX/UI considerations to provide feedback to the user

	if (!listings) {
		return <h2>Loading...</h2>;
	}

	if (!loading && !listings.length) {
	return <h2>Oops, something went wrong. Please try again Later!</h2>;
	}

	// Our results are displayed below

	return (
		<div>
			<div className='listings'>
				{listings.map((item) => (
					<Listing item={item} key={item._id}/>
				))}
			</div>
		</div>
	);
}

export default Listings;
