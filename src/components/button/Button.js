import './style.css';
import { Link } from "react-router-dom";

const Button = ({ link, label }) => {
  return ( 
    <Link to={link} className="btn-outline">
      {label}
    </Link>
   );
} 

export default Button;