import React from 'react'
import './Footer.css'
import { FaRegCopyright } from "react-icons/fa";



const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className="section">
        <h1>Product</h1>
        <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>Solutions</li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
        </ul>
        </div>
        <div className="section">
        <h1>Use cases</h1>
        <ul>
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS centre</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
        </ul>
        </div>
        <div className="section">
        <h1>Social</h1>
        <ul>
            <li>Twiter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribble</li>
        </ul>
        </div>
        <div className="section">
        <h1>Legal</h1>
        <ul>
            <li>Tearm</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
        </ul>
        </div>
    </div>
        <hr className='divider' />
        <div className="last">
            <img src="src/assets/logo.png" alt="logo" />
           <span style={{display:'flex',alignItems:'center', gap:'2px'}}> <FaRegCopyright /> All rights reserved</span>
        </div>
        </>
  )
}

export default Footer