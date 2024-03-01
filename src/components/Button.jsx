import { NavLink } from "react-router-dom";
import IconArrow from '../components/icons/IconArrow';

const Button = () => {
  return (
    <NavLink to="componentes/introduccion" className="bg-blue-700 text-white py-2 rounded-md flex items-center text-xl justify-center lg:w-1/3">
        <span className="font-normal">Get Started</span>
        <span className="ps-1"><IconArrow/></span>
    </NavLink>
  )
}
export default Button;