import React from 'react';
import UploadButton from './Upload/Upload'
import ReadButton from './Read/Read'
import './Header.css'

function Header() {
  return (
    <div>
      <header>
        <p className='logo'>WriterTyper</p>
        <ul className='navCont'>
          <li className='navItem'>About</li>
          <li className='navItem'><UploadButton /></li>
          <li className='navItem'><ReadButton /></li>
          <li className='navItem'>Type</li>
        </ul>
      </header>
    </div>
  );
}

export default Header;