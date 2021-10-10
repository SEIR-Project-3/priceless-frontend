import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Nav({ loggedIn, setLoggedIn }) {

	const logOut = () => setLoggedIn(false);

	return (
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
				{loggedIn ? 
					<>
						<Link to='/dashboard'>
							<p>Dashboard</p>
						</Link>
						<button onClick={logOut}>
							<p>Log Out</p>
						</button>
					</>
				:
					<>
						<Link to='/signup'>
							<p>Sign Up</p>
						</Link>
						<Link to='/login'>
							<p>Log In</p>
						</Link>
					</>
				}
			</nav>
		</div>
	);
}

export default Nav;
