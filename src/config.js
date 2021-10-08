const API_URL =
	window.location.hostname === 'localhost'
		? 'http://localhost:7000'
		: 'deployed heroku address';

export default API_URL;
