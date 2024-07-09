import React from 'react';
import './navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='navbar'>
        <div className='navContainer'>
        <Link to="/" style={{color:'white',textDecoration:'none'}}>
        <span className='logo'>Lamababooking</span>
        </Link>
        <div className='navItem'>
        <button className='navButton'> Singup</button>
        <button className='navButton'> LogIn</button>
       
        </div>
        </div>
        </div>
    );
};

export default Navbar;