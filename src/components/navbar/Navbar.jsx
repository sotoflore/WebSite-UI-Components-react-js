import { NavLink } from "react-router-dom";
import IconGithub from '../icons/IconGithub';
import IconLinkedin from "../icons/IconLinkedin";

const Navbar = () => {
  return (
    <nav className="py-5 fixed w-full z-20 top-0 start-0 backdrop-blur shadow-2xl">
       <div className="m-auto w-10/12">
            <div className="flex items-center justify-between text-xl">
                <NavLink to="/"  className="text-white bg-black py-2 px-1 rounded-md">
                    <span className="bg-blue-600 p-1 rounded-sm font-bold uppercase">ui</span>
                    <span className="ps-1 pe-2">Components</span>
                </NavLink>
                <div className="inline-flex items-center">
                    <NavLink to="componentes/introduccion" className="pe-5 text-blue-700 font-bold hidden sm:inline-block">Componentes</NavLink>
                    <NavLink to="https://github.com/sotoflore" target="_blank"  rel="noopener noreferrer"><IconGithub/></NavLink>
                    <NavLink to="https://www.linkedin.com/in/francisco-sf/" target="_blank" rel="noopener noreferrer"><IconLinkedin/></NavLink>
                </div>
            </div>
       </div>
    </nav>
  )
}
export default Navbar;