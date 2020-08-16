import React from 'react';
import { Link } from 'react-router-dom'
import '../NavButtonDesign/Button.css'

function AboutButton() {
  return (
    <Link to='/about' className='navLink'>
      <button className='navButton'>
        About
      </button>
    </Link>
  );
}
export default AboutButton;