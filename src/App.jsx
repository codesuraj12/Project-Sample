import { useState } from 'react'

import './App.css'
import Nav from './Components/Navbar/Nav'
import Main from './Components/Hero 1/Main'
import Main2 from './Components/Hero 2/Main2'
import Disc from './Components/CardComponent/Disc'
import Footer from './Components/Footer/Footer'
import Section1 from './Components/Sections/Section1'



function App() {


  return (
    <>
      <Nav />
      <hr className='divider' />
      <div className='space'>

      </div>
      <Main />
      <div className='space'>

      </div>
      <Main2 />
      <hr className='divider' />
      <Disc />
      
      <hr className='divider' />
      <Section1/>
<Footer/>
    </>
  )
}

export default App
