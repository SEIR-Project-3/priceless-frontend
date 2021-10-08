import React from 'react';

function ListItem({ item }) {
	return (
		<div>
			{item.title}
			{item.description}
			<img src={item.image} alt='' />
			{item.zip}
		</div>
	);
}

export default ListItem;
