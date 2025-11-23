import React from 'react'
import brandLogo from '../assets/brand_logo.png'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__logo">
            <img src={brandLogo} alt="brandlogo" />
        </div>
        <ul className="navbar__links">
          <li className="navbar__item">Menu</li>
          <li className="navbar__item">Location</li>
          <li className="navbar__item">About</li>
          <li className="navbar__item">Contact</li>
        </ul>
        <button className="navbar__button">Login</button>
      </div>
    </div>
  )
}

export default Navbar
