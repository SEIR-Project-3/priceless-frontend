import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Charities(props) {
	const [charity, setCharity] = useState();

	const searchOptions = {
		key: process.env.CHARITY_API_KEY,
		api: 'https://api.data.charitynavigator.org/v2/Organizations?app_id=2b49579f&',
	};
	// const url = `${searchOptions.api}app_key=${searchOptions.key}&rated=true`;
	const url = `${searchOptions.api}app_key=c65806689af634aed9515d296a36d2b0&rated=true`;

	const getCharity = async (params) => {
		try {
			const res = await axios.get(url);
			console.log(res);
			setCharity(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCharity();
	}, []);

	if (!charity) {
		return <h2>Loading...</h2>;
	}
	return (
		<div>
			{charity.map((item) => (
				<ul>
					<li>{item.charityNavigatorURL}</li>
				</ul>
			))}
		</div>
	);
}

export default Charities;
