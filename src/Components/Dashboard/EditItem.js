import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import API_URL from '../../config';

const EditItem = ({ item, setModal }) => {

	const [title, setTitle] = useState(`${item.title}`);
	const [image, setImage] = useState(`${item.image}`);
	const [description, setDescription] = useState(`${item.description}`);
	const [zip, setZip] = useState(`${item.zip}`);
    const [loading, setLoading] = useState(false);

	const history = useHistory();

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

	// PUT axios() request to edit user info
	const handleSubmit = async (evt) => {
		evt.preventDefault();
		try {
				// axios post request to send credentials to our backend
			const res = await axios.put(`${API_URL}/api/items/${item._id}`, {
				title: title,
				image: image,
				description: description,
                zip: zip
				});
            history.push('/dashboard');
			console.log(res);
            window.location.reload()
			
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async () => {
		// Write your DELETE fetch() or axios() request here
		const verify = window.confirm('Are you sure you want to delete?');
		if (verify) {
			try {
				const response = await axios.delete(`${API_URL}/api/items/${item._id}`);
                window.location.reload();
                setModal(false);
			} catch (error) {
				console.log(error);
			}
		}
	};
    return (
			<div className='modal-container'>
				{/* {modal ? ( */}
					<div className='modal-container__child'>
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
								onChange={(event) =>
									setDescription(event.target.value)
								}></textarea>
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
								onChange={(event) => setZip(event.target.value)}
							/>
                            <button onClick={(e) => setModal(false)}>Cancel</button>
							<button type='submit' >Save</button>
                            <button onClick={handleDelete}>Delete</button>
						</form>
					</div>
			</div>
		);
};

export default EditItem;