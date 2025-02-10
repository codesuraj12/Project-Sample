import React from 'react'

import './Main2.css'
import Logo from './Logo'
import Container from '/src/assets/Container.png'
import Companylogo from '/src/assets/company logo.png'
import Companylogo1 from '/src/assets/company logo (1).png'
import Companylogo2 from '/src/assets/company logo (2).png'
import Companylogo3 from '/src/assets/company logo (3).png'
import Companylogo4 from '/src/assets/company logo (4).png'
import Companylogo5 from '/src/assets/company logo (5).png'


const Main2 = () => {
  return (
    <>
    <div className="container">
    <img src={Container} alt="Background" className="bg-image" />

    <p className="description">
    <span>Join 4000+ companies already to growing</span>
    </p>

    <div className="logo">
      <Logo image={Companylogo} />
      <Logo image={Companylogo1} />
      <Logo image={Companylogo2} />
      <Logo image={Companylogo3} />
      <Logo image={Companylogo4} />
      <Logo image={Companylogo5} />
    </div>
  </div>
  
    </>
  )
}

export default Main2