import React from 'react';
import { Link } from 'react-router-dom'
import './Logo.css'

function Logo(props) {
  return (

    <Link to='/' className='logoLink'>
      <p className='logo'>
        WriterTyper
      </p>
    </Link>
  );
}

export default Logo;
