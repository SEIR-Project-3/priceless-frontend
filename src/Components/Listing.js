import { logRoles } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function ListItem({ item }) {



	return (
		<div className='listing'>
			<img src={item.image} alt={item.title}/>
			<h2 className='title'>{item.title}</h2>

			<div className='details'>
				<p className='description'>{item.description}</p>
				<p className='zip'>ZIP: {item.zip}</p>
				<a href={`mailto: ${item.owner?.email}`} className='contactBtn'>Contact to claim!</a>
				
			</div>
		</div>
	);
}

export default ListItem;
