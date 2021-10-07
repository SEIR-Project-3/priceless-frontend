import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Resources from './Resources';
import Login from './Login';

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
                <main>
                    <Route
                    exact path='/home'
                    component={Home}
                    />
                    <Route
                    exact path='/about'
                    component={About}
                    />
                    <Route
                    exact path='/resources'
                    component={Resources}
                    />
                    <Route
                    exact path='/login'
                    component={Login}
                    />
                </main>
            </div>
        </Router>
    );
}

export default Nav;