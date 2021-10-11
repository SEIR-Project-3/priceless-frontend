import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function ListItem({ item }) {
	return (
		<div className='listing'>
			<img src={item.image} alt={item.title}/>
			<p className='title'>{item.title}</p>
			<p className='description'>{item.description}</p>
			<p className='zip'>{item.zip}</p>
			<a href="" className='contactBtn'>Contact to claim!</a>
		</div>
	);
}

export default ListItem;
