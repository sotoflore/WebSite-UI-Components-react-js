import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const [annioActual, setAnnioActual] = useState(new Date().getFullYear());

    useEffect(() => {
        setAnnioActual(new Date().getFullYear());
    }, []);

    return (
        <footer className="bg-blue-800 mt-20">
            <div className="m-auto lg:w-10/12">
                <p className="text-center py-5 text-white">
                    &copy; {annioActual} - Realizado por 
                    <Link to="https://francisco-soto-flores.web.app/" target="_blank"  rel="noopener noreferrer" className="underline underline-offset-4 ps-2">Francisco Soto Flores</Link>
                </p>
            </div>
        </footer>
    )
}
export default Footer;