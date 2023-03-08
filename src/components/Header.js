import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <a className='header__logo' href="#">
            Logo
        </a>
        <nav className='header__links'>
            <a href="#">Home</a>
            <a href="#">Topics</a>
            <a href="#">Case Studies</a>
            <a href="#">News & Updates</a>
            <a href="#">Resources</a>
        </nav>
      </div>
    </div>
  )
}

export default Header