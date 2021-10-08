import './App.css';
import Nav from './Components/Nav';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Resources from './Components/Resources';
import Login from './Components/Login';

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);
	return (
		<div>
			<Nav />
			<main>
				<Route exact path='/home' component={Home} />
				<Route exact path='/about' component={About} />
				<Route exact path='/resources' component={Resources} />
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
