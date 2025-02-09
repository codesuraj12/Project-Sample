
import './Button.css'
import { FaRegCirclePlay } from "react-icons/fa6";


const Button = ({ primaryText, secondaryText }) => {
    return (
      <div className="center">
        <button className="white">
          <FaRegCirclePlay /> {primaryText}
        </button>
        <button className="red">{secondaryText}</button>
      </div>
    );
  };

export default Button