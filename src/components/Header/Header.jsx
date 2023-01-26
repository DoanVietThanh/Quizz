import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
  return (
    <div className='header'>
      <Link to='/' className='title'>
        Home
      </Link>
      <hr className='divider' />
    </div>
  );
}

export default Header;
