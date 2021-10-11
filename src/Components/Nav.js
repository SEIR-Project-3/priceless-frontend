import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

function Nav({ loggedIn, setLoggedIn }) {

	const logOut = () => setLoggedIn(false);

	return (
		<div>
			<nav>
				<Link to='/home' className='navLink'>
					<p>Home</p>
				</Link>
				<Link to='/about' className='navLink'>
					<p>About</p>
				</Link>
				<Link to='/resources' className='navLink'>
					<p>Resources</p>
				</Link>
				<Link to='/newpost' className='navLink'>
					<p>Post Item</p>
				</Link>
				{loggedIn ? (
					<>
						<Link to='/dashboard' className='navLink'>
							<p>Dashboard</p>
						</Link>
						<button onClick={logOut}  className='logOutBtn'>
							<p>Log Out</p>
						</button>
					</>
				) : (
					<>
						<Link to='/signup' className='navLink'>
							<p>Sign Up</p>
						</Link>
						<Link to='/login' className='navLink'>
							<p>Log In</p>
						</Link>
					</>
				)}
			</nav>
		</div>
	);
}

export default Nav;
