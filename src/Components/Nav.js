import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Nav() {
	return (
		<Router>
			<div>
				<nav>
					<Link to='/home'>
						<p>Home</p>
					</Link>
					<Link to='/about'>
						<p>About</p>
					</Link>
					<Link to='/resources'>
						<p>Resources</p>
					</Link>
					<Link to='/login'>
						<p>Login</p>
					</Link>
				</nav>
			</div>
		</Router>
	);
}

export default Nav;
