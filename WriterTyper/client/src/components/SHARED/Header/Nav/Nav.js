import React from 'react';
import UploadButton from './Upload/Upload'
import ReadButton from './Read/Read'
import AboutButton from './About/About'
import './Nav.css'

function Nav(props) {
  return (
    <ul className='navCont'>
      <li><AboutButton /></li>
      <li><UploadButton /></li>
      <li><ReadButton /></li>
    </ul>
  );
}

export default Nav;