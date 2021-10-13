import React, { useState } from 'react';
import API_URL from '../../config';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const NewItemForm = () => {
	const [loading, setLoading] = useState(false);
	const [image, setImage] = useState();
	const [title, setTitle] = useState();
	const [description, setDescription] = useState();
	const [zip, setZip] = useState();

	const history = useHistory();
	const id = localStorage.getItem('userId');

	const handleSubmit = async (e, next) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${API_URL}/api/items`, {
				title: title,
				description: description,
				image: image,
				zip: zip,
				owner: id,
			});
			history.push('/home');
			response.status(201);
		} catch (error) {
			next(error);
		}
	};
	const uploadImage = async (e) => {
		const files = e.target.files;
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
			<h1 className='header'>Post an item</h1>
			<form className='postItem' onSubmit={handleSubmit}>
				<label>Item title:</label>
				<input
					type='text'
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Item description:</label>
				<textarea
					required
					value={description}
					onChange={(e) => setDescription(e.target.value)}></textarea>
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
					type='number'
					required
					value={zip}
					onChange={(e) => setZip(e.target.value)}
				/>
				<button type='submit'>Submit Post</button>
			</form>
		</div>
	);
};

export default NewItemForm;
