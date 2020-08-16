import React from 'react';
import UploadButton from './Upload/Upload'
import ReadButton from './Read/Read'
import AboutButton from './About/About'
import TypeButton from './Type/Type'
import './Nav.css'

function Nav(props) {
  return (
    <ul className='navCont'>
      <li className='navItem'><AboutButton /></li>
      <li className='navItem'><UploadButton /></li>
      <li className='navItem'><ReadButton /></li>
      <li className='navItem'><TypeButton /></li>
    </ul>
  );
}

export default Nav;