import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../assets/images/logo.jpg';
import './Navbar.scss';
const Navbar = () => {
  return (
    <nav className='nav-bar-wrapper mb-0'>
      <Link to='/'>
        <p className='p-3 font-weight-bold mb-0 pb-0'>
          PhotoStore <img src={logo}/>
        </p>
      </Link>
    </nav>
  )
}

export default Navbar;