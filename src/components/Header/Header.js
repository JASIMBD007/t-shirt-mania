import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome To T-Shirt Mania</h1>
            <nav>
                <ul>
                    <Link to='/' className='nav-link'>Home</Link>
                    <Link to='/orderreview' className='nav-link'>Order Review</Link>
                    <Link className='nav-link'>Cart</Link>
                    <Link to='/about' className='nav-link'>About</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Header;