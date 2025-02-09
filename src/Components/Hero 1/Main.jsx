import React from 'react'
import './Main.css'
import { FaArrowRight } from "react-icons/fa";
import Button from '../Button/Button';

const Main = () => {
  return (
    <>
      <div class="button-container">
        <div className="large">
          <button class="small-button">New Feature
          </button>
          <span>Check out the team Dashboard
            </span> <FaArrowRight cl/>
        </div>

      </div>
      <h1>Beautiful Analytics to Grow smarter</h1>
      <p>Powerful, sel-serve product and growth analytics to help you convert,engage,and retain more users. Trusted by over 4000 startups.</p>
<div>
<Button primaryText='Demo' secondaryText='Sign up'/>
</div>

    </>

  )
}

export default Main