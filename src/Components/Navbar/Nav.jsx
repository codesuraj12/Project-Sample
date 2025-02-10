import React from 'react'
import { useState } from 'react';
import './Nav.css'
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from '/src/assets/logo.png'
import Profile from '/src/assets/profiles.png'


const Nav = () => {
const [isopen, setIsopen] = useState(false)

const toggle=()=>{
  setIsopen(prevState => !prevState)
 
}

  return (

    <div className="header">

      <ul className={`nav-links ${isopen ? 'active': '' }`}>
        <li>
          <img src= {Logo} alt="logo" />
        </li>
        <li>Home</li>
        <li>Products</li>
        <li>Resources</li>
        <li>Pricing</li>

      </ul>
      <img src={Profile} alt="profile" className='profile-img' />
   <GiHamburgerMenu onClick={toggle} className='hamburger-menu' />
    </div>

  )
}

export default Nav