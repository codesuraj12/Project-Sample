import React from 'react'
import './Disc.css'
import Card from './Card'
import { TbMessageCircle  } from "react-icons/tb";
import { BsLightningCharge } from "react-icons/bs";
import { VscReport } from "react-icons/vsc";


const Disc = () => {
  return (
    <div>
        <div className="desc">

        <h1 className='h1'>Features</h1>
        <h1 className='title'>Analytics that feels like its from the future</h1>
        <p className='p'>Powerful, self-serve product and growth analytics to help you convert,engage,and retain more users. Trusted by over 4,000 startups.</p>
        </div>

       <div className="cards">
 
         <Card Icon={ TbMessageCircle } text='Share team inboxes' desc='   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellat!
         '
         />
    
         <Card Icon={ BsLightningCharge } text='Share team inboxes' desc='   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellat!
         '
         />
    
         <Card Icon={ VscReport } text='Share team inboxes' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellat!
         '
         />
    
         <Card Icon={ TbMessageCircle } text='Share team inboxes' desc='   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellat!
         '
         />
         <Card Icon={ TbMessageCircle } text='Share team inboxes' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellat!
         '
         />
         <Card Icon={ TbMessageCircle } text='Share team inboxes' desc=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, repellat!
         '
         />
        

     
    </div>
    </div>
  )
}

export default Disc