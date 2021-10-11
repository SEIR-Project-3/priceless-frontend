import React, { useState } from 'react';
import API_URL from '../config';

function NewItemForm(props) {
	const [loading, setLoading] = useState(false);
	const [image, setImage] = useState('');
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [zip, setZip] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const listing = { title, description, image, zip };
		// console.log(listing)

		fetch(`${API_URL}/api/items`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(listing),
		}).then(() => {
			console.log('new listing added');
		});
	};
	const uploadImage = async (event) => {
		const files = event.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'newupload');
		setLoading(true);

		const res = await fetch(
			'https://api.cloudinary.com/v1_1/seiproject3/image/upload',
			{
				method: 'POST',
				body: data,
			}
		);

		const file = await res.json();

		setImage(file.secure_url);
		setLoading(false);
	};
	return (
		<div>
			<h1>Post an item</h1>
			<form onSubmit={handleSubmit}>
				<label>Item title:</label>
				<input
					type='text'
					required
					value={title}
					onChange={(event) => setTitle(event.target.value)}
				/>
				<label>Item description:</label>
				<textarea
					required
					value={description}
					onChange={(event) => setDescription(event.target.value)}></textarea>
				<label>Post Image:</label>
				<input
					type='file'
					name='file'
					required
					placeholder='Upload an image'
					onChange={uploadImage}
				/>

				{loading ? (
					<h3>Loading...</h3>
				) : (
					<img src={image} style={{ width: '300px' }} alt='' />
				)}
				<label>Zip Code:</label>
				<input
					type='text'
					required
					value={zip}
					onChange={(event) => setZip(event.target.value)}
				/>
				<button>Submit Post</button>
			</form>
		</div>
	);
}

export default NewItemForm;
