import '../navbar/Navbar.css';
import { NavLink } from 'react-router-dom';
import React from 'react';



const Navbar = () => {

   return(
		<div className='navigation'>
			<div className='navigation__name'>
				<p>Beans Love Beers</p>
			</div>
			<div className='navigation__links'>
			   <ul>
				   <li>
					   <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")}>Home</NavLink>
				   </li>
				   <li>
					   <NavLink to="/favourites" className={({ isActive }) => (isActive ? "link-active" : "link")}>Favourites</NavLink>
				   </li>
			   </ul>
			</div>
		</div>
	)
}

export default Navbar;