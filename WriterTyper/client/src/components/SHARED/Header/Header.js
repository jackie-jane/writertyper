import React from 'react';
import './Header.css'

function Header() {
  return (
    <div>
      <header>
        <p className='logo'>WriterTyper</p>
        <ul className='navCont'>
          <li className='navItem'>About</li>
          <li className='navItem'>Upload</li>
          <li className='navItem'>Read</li>
          <li className='navItem'>Type</li>
        </ul>
      </header>
    </div>
  );
}

export default Header;