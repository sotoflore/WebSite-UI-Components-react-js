import { NavLink } from "react-router-dom";

const ComponentCard = ({to, text, src, colSpan, rowSpan}) => {

    return (
        <NavLink to={to} className={`${colSpan} ${rowSpan} bg-white h-full text-center rounded-xl shadow border border-gray-400 transition ease-in-out duration-500 hover:-translate-y-2 col-span-4 lg:order-none`}>
            <div className="flex flex-col justify-center items-center">
                <h3 className="pt-3 font-extrabold text-xl">{text}</h3>
                <img src={src} className="h-auto max-w-full p-5" alt="image components" />
            </div>
        </NavLink>
    )
}
export default ComponentCard;