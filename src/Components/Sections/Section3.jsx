import React from 'react'
import { CiCircleMinus ,  CiCirclePlus} from "react-icons/ci";

const Section3 = () => {
    return (
        <div style={{maxWidth:'500px', margin:'auto',padding:'40px'
        }}>
            <h1>Frequently asked questions</h1>
            <p>Everything you need to know about the product and billing.</p>
            <div className="item" style={{ display: 'flex ', alignItems: 'center', justifyContent: 'space-between',   }}>
                <h4>Is there a free trial available? </h4>
                <CiCircleMinus />
                
            </div>
            <div style={{fontSize:'12px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae velit blanditiis sapiente labore, voluptatibus odit veritatis excepturi repellat praesentium quaerat?</div>

            <div className="bar"></div>
            <div className="item" style={{ display: 'flex ', alignItems: 'center', justifyContent: 'space-between',   }}>
                <h4>Can I change my plan later?</h4>
                <CiCirclePlus/>
            </div>
            <div className="item" style={{ display: 'flex ', alignItems: 'center', justifyContent: 'space-between',  }}>
                <h4>What is your cancellation policy? </h4>
                <CiCirclePlus/>
            </div>
            <div className="item" style={{ display: 'flex ', alignItems: 'center', justifyContent: 'space-between',  }}>
                <h4>Can other info be added to an invoice?</h4>
                <CiCirclePlus/>
            </div>
            <div className="item" style={{ display: 'flex ', alignItems: 'center', justifyContent: 'space-between',  }}>
                <h4>How does billing work?</h4>
                <CiCirclePlus/>
            </div>
        </div>
    )
}

export default Section3