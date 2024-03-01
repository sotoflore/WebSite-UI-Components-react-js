import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ComponentsPage = () => {
    
    return (
        <section className="grid grid-cols-4 gap-4 mt-32">
            <Sidebar />
            <Outlet/>
        </section>
    )
}
export default ComponentsPage;