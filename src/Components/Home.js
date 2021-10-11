import React, { useState, useEffect } from 'react';
import Listing from './Listing';
import axios from 'axios';
import API_URL from '../config';

function Listings(props) {
	const [listings, setListings] = useState();
	// const [loading, setLoading] = useState(true);

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
	// On page load a timeout function is called
	// useEffect(() => {
	// 	// const handleLoadingTimeout = setTimeout(() => {
	// 		// if (!listings.length) {
	// 			// setLoading(false);
	// 		}
	// 	// }, 5000);
	// 	// the getListing() function is invoked to make our API call
	// 	getListing();

	// 	// return () => clearTimeout(handleLoadingTimeout);
	// }, []);

	// UX/UI considerations to provide feedback to the user
	if (!listings) {
		// placeholder can do something more dynamic later
		return <h2>Loading...</h2>;
	}
	// if (!loading && !listings.length) {
	// return <h2>Oops, something went wrong. Please try again Later!</h2>;
	// }

	// Our results are displayed below

	return (
		<div>
			<div className='listings'>
				{listings.map((item) => (
					<Listing item={item}/>
				))}
			</div>
		</div>
	);
}

export default Listings;
