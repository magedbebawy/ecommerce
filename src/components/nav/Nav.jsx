import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';

function MyNav() {
    return (
        <div className='nav'>
            <Link to="/cart" className='link'><AiOutlineShoppingCart size={25}/></Link>
            <Link to="/profile" className='link'>Profile</Link>
            <Link to="/orders" className='link'>Orders</Link>
            <Link to="/" className='link'>Home</Link>
            <Link to="/" className='logo'>Logo</Link>
        </div>
    )
}

export default MyNav;