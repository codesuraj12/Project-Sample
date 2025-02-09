import React from 'react'
import Section2 from './Section2'
import Section3 from './Section3'
const Section1 = () => {
  return (
    <>
    <Section2/>
    <Section3/>
    <div style={{backgroundColor:'rgb(131 127 127 / 22%)',padding:'45px'}}>

    <h1>Start your free trial</h1>
    <p>Join  over 4,000+ startups already growing with Untitled.</p>
    <div className="center">

    <button style={{padding:'14px 18px', borderRadius:'4px'}}>Learn more</button>
    <button style={{padding:'14px 18px',backgroundColor:'#ff0b0b',borderRadius:'4px',
color:'white'
}}>Get started</button>
</div>
</div>
    
    </>
  )
}

export default Section1