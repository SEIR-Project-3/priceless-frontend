import './App.css';
import Nav from './Components/Nav';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Resources from './Components/Resources';
import Login from './Components/Authentication/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import NewItemForm from './Components/Dashboard/NewItemForm';
import Preferences from './Components/Dashboard/Preferences';

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);
	return (
		<div className='app'>
			<Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
			<main>
				<Route exact path='/home' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/resources' component={Resources} />
				<Route exact path='/newpost' component={NewItemForm} />
				<Route exact path='/dashboard/preferences' component={Preferences} />
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
