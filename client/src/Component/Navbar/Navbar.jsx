import React from 'react';
import './navbar.css';
const Navbar = () => {
    return (
        <div className='navbar'>
        <div className='navContainer'>
        <span className='logo'>Lamababooking</span>
        <div className='navItem'>
        <button className='navButton'> Singup</button>
        <button className='navButton'> LogIn</button>
       
        </div>
        </div>
        </div>
    );
};

export default Navbar;