import './style.css';
import { Link } from "react-router-dom";

const Button = ({link, label}) => {
  return ( 
    <Link href={link} target="_blank" rel="noreferrer" className="btn-outline">
      {label}
    </Link>
   );
}
 
export default Button;