import 'flowbite';
import NavbarItem from "./navbar/NavbarItem";

const Sidebar = () => {

    const paths = [
        { to: "introduccion", label: "Introduccion", quantity: "0"},
        { to: "alertas", label: "Alerts", quantity: "4" },
        { to: "banners", label: "Banners", quantity: "1" },
        { to: "buttons", label: "Buttons", quantity: "4" },
        { to: "button-group", label: "Button Group", quantity: "2" },
        { to: "card", label: "Cards", quantity: "4" },
        { to: "forms", label: "Forms", quantity: "2" },
        { to: "pagination", label: "Pagination", quantity: "2" },
        { to: "navbar", label: "Navbar", quantity: "2" },
        { to: "spinners", label: "Spinners", quantity: "2" },
        { to: "testimonial", label: "Testimonial", quantity: "3" },
    ];
   
    return(
        <aside className="top-24 lg:h-[30rem]  col-span-4 lg:sticky lg:top-32 lg:col-span-1">
            <ul className="h-full w-full flex overflow-x-auto lg:overflow-y-scroll lg:flex-col">
                {
                    paths.map((path, index) => (
                        <NavbarItem key={index} to={path.to}>
                            <div className='flex items-center justify-between w-full'>
                                <div>
                                    <span>{path.label}</span>
                                </div>
                                <span className='bg-red-200 border border-red-800 text-gray-950 px-2 py-0.5 rounded-full text-xs'>
                                    {path.quantity}
                                </span>
                            </div>
                        </NavbarItem>
                    ))
                }
            </ul>
        </aside>
    ) 
}
export default Sidebar;

