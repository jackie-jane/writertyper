import React from 'react';
import { Link } from 'react-router-dom'
import './StartButton.css'

function StartButton(props) {
  return (
    <Link to='/read'>
      <button className='startButton'>
        Start
      </button>
    </Link>
  );
}

export default StartButton;