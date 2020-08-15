import React from 'react';
import { Link } from 'react-router-dom'
import './Read.css'

function ReadButton() {
  return (
    <Link to='/read' className='navLink'>
      <button className='navButton'>
        Read
      </button>
    </Link>
  );
}
export default ReadButton;