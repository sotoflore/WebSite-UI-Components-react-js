import { NavLink } from "react-router-dom";

const NavbarItem = ({ to, children }) => {

    const clasHover = "flex items-center gap-2 border-s-[3px] border-transparent px-4 py-3 hover:border-gray-600 hover:bg-gray-300 hover:font-bold text-xs lg:text-base lg:rounded-e-lg";

    return (
        <li className="px-1">
            <NavLink
            to={to}
            style={({ isActive, isTransitioning }) => {
                return {
                    background: isActive ? "#dbeafe" : "",
                    color: isActive ? "#1d4ed8" : "",
                    fontWeight: isActive ? "bold" : "",
                    borderLeft: isActive ? "3px solid #1d4ed8" : "",
                    viewTransitionName: isTransitioning ? "slide" : "",
                    transition: "all 0.7s, color 0.3s",
                };
            }}
            className={clasHover}
            >{children}</NavLink>
        </li>
    )
}
export default NavbarItem;