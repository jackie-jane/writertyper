import React from 'react';
import { Link } from 'react-router-dom'


function TypeButton() {
  return (
    <Link to='/about' className='navLink'>
      <button className='navButton'>
        Type
      </button>
    </Link>
  );
}
export default TypeButton;