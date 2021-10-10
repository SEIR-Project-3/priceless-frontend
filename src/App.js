import './App.css';
import Nav from './Components/Nav';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Resources from './Components/Resources';
import Login from './Components/Authentication/Login';
import Dashboard from './Components/Dashboard';
import { SignUpForm } from './Components/Authentication/SignUpForm';

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);
	return (
		<div>
			<Nav loggedIn={loggedIn} />
			<main>
				<Route exact path='/home' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/resources' component={Resources} />
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/signup' component={SignUpForm} />
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
