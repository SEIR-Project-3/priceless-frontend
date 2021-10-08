import React, { useState, useEffect } from 'react';
import Listing from './Listing';
import axios from 'axios';
import API_URL from '../config';

function Listings(props) {
	// const [listings, setListings] = useState(null);
	// const [loading, setLoading] = useState(true);

	// const getListing = async () => {
	// 	try {
	// 		const res = await axios.get(`${API_URL}/api/items`);
	// 		setListings(res.data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// On page load a timeout function is called
	// useEffect(() => {
	// 	const handleLoadingTimeout = setTimeout(() => {
	// 		if (!listings.length) {
	// 			setLoading(false);
	// 		}
	// 	}, 5000);
	// the getListing() function is invoked to make our API call
	// getListing();

	// return () => clearTimeout(handleLoadingTimeout);
	// }, []);0

	// UX/UI considerations to provide feedback to the user
	// if (loading && !listings.length) {
	// placeholder can do something more dynamic later
	// 	return <h2>Loading...</h2>;
	// }
	// if (!loading && !listings.length) {
	// 	return <h2>Oops, something went wrong. Please try again Later!</h2>;
	// }

	// Our results are displayed below
	return (
		<div>
			<div>
				{/* {listings.map((item) => (
					<Listing key={item.id} />
				))} */}
			</div>
		</div>
	);
}

export default Listings;
