import React from 'react';
import { Link } from 'react-router-dom'
import './Logo.css'

function Logo(props) {
  return (
    <p className='logo'>
      <Link to='/'>
        WriterTyper
      </Link>
    </p>
  );
}

export default Logo;
