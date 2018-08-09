import React from 'react';
import './Navigation.css'
const Navigation = ({ onRouteChange }) => {
	return(<nav>
				<p onClick={() => onRouteChange('SignIn')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
				<p onClick={() => onRouteChange('Register')} className='f3 link dim black underline pa3 pointer'>Register</p>
				<p onClick={() => onRouteChange('Portfolio')} className='f3 link dim black underline pa3 pointer'>Portfolio</p>
				<p onClick={() => onRouteChange('SignOut')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
				</nav>)
}

export default Navigation;

