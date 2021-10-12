import './App.css';
import Nav from './Components/Nav';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import API_URL from './config';
import Home from './Components/Home';
import About from './Components/About';
import Resources from './Components/Resources';
import Login from './Components/Authentication/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import NewItemForm from './Components/Dashboard/NewItemForm';
import Preferences from './Components/Dashboard/Preferences';
import SignUpForm from './Components/Authentication/SignUpForm';
import Charities from './Components/Charities';

function App() {
	const [user, setUser] = useState();
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);

	const id = localStorage.getItem('userId');

	const getUser = async () => {
		try {
			const res = await axios.get(`${API_URL}/api/user/${id}`);
			setUser(res.data);
			console.log(res.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div className='app'>
			<Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
			<main>
				<Route exact path='/home' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/resources' component={Resources} />
				<Route exact path='/newpost' component={NewItemForm} />
				<Route exact path='/signup' component={SignUpForm} />
				{/* <Route exact path='/dashboard/preferences' component={Preferences} /> */}
				<Route
					exact
					path='/dashboard'
					render={() => <Dashboard user={user} setUser={setUser} />}
				/>
				<Route
					exact
					path='/dashboard/preferences'
					render={() => <Preferences user={user} setUser={setUser} />}
				/>
				{/* <Route exact path='/dashboard' component={Dashboard} /> */}
				<Route exact path='/charities' component={Charities} />
				<Route exact path='/dashboard' component={Dashboard} />
				<Route
					exact
					path='/login'
					render={() => <Login setLoggedIn={setLoggedIn} />}
				/>
			</main>
		</div>
	);
}

export default App;
