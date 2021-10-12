import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../assets/Priceless-logo.png';

function Nav({ loggedIn, setLoggedIn }) {
	const history = useHistory();

	const logOut = () => {
		setLoggedIn(false);
		history.push('/home');
	};

	return (
		<div>
			<nav>
				<Link to='/home' className='navLink'>
					<img id='logo' src={Logo} alt='Priceless logo' />
				</Link>
				<Link to='/about' className='navLink'>
					<p>About</p>
				</Link>
				<Link to='/resources' className='navLink'>
					<p>Resources</p>
				</Link>
				{loggedIn ? (
					<>
						<Link to='/dashboard' className='navLink'>
							<p>Dashboard</p>
						</Link>
						<Link to='/newpost' className='navLink'>
							<p>Post Item</p>
						</Link>
						<button onClick={logOut} className='logOutBtn'>
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
