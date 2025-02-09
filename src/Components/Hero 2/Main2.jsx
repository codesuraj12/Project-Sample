import React from 'react'

import './Main2.css'
import Logo from './Logo'



const Main2 = () => {
  return (
    <>
    <div className="container">
    <img src="/src/assets/Container.png" alt="Background" className="bg-image" />

    <p className="description">
    <span>Join 4000+ companies already to growing</span>
    </p>

    <div className="logo">
      <Logo image="src/assets/company logo.png" />
      <Logo image="src/assets/company logo (1).png" />
      <Logo image="src/assets/company logo (2).png" />
      <Logo image="src/assets/company logo (3).png" />
      <Logo image="src/assets/company logo (4).png" />
      <Logo image="src/assets/company logo (5).png" />
    </div>
  </div>
  
    </>
  )
}

export default Main2