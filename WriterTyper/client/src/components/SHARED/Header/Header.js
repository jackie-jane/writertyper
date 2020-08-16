import React from 'react';
import Nav from './Nav/Nav'
import Logo from './Logo/Logo'
import './Header.css'

export default function Header() {
  return (
    <header>
      <Logo />
      <Nav />
    </header>
  );
}