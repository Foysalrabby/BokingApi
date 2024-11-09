import React, { useContext } from 'react';
import './navbar.css';
import { Link } from "react-router-dom";
import { AuthLogincontext } from '../../context/Authentication';

const Navbar = () => {
    const {user}=useContext(AuthLogincontext);
    //console.log(user.data.username);
    return (
        <div className='navbar'>
        <div className='navContainer'>
        <Link to="/" style={{color:'white',textDecoration:'none'}}>
        <span className='logo'>Lamababooking</span>
        </Link>
        {user ? user.data.username :(<div className='navItem'>
        <button className='navButton'> Singup</button>
        <button className='navButton'> LogIn</button>
       
        </div>)}
        </div>
        </div>
    );
};

export default Navbar;