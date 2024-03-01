import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'; 
import ImageHome from '../assets/image-section-home2.png'
import Button from '../components/Button';
import IconReact from '../components/icons/IconReact';
import IconVue from '../components/icons/IconVue';
import IconNext from '../components/icons/IconNext';
import IconAngular from '../components/icons/IconAngular';
import TechnologyCard from '../components/home/TechnologyCard';
import ComponentCard from '../components/home/ComponentCard';

const HomePage = () => {

    useEffect(()=>{
        AOS.init();
    }, [])

    return (
        <>
            <section className="flex items-center justify-center mt-36 mb-10 flex-col md:flex-row lg:mt-32 lg:mb-20">
                <div data-aos="fade-right" data-aos-duration="1000" className="w-full lg:w-1/2">
                    <h4 className="text-blue-600 font-semibold text-2xl">20+ UI Components</h4>
                    <h1 className='text-gray-900 text-4xl font-black lg:text-6xl'>Listos Para usar en Cualquier Proyecto Web.</h1>
                    <p className='mb-5 my-2 text-xl text-gray-600'>Todos los componentes están basados en Tailwind CSS.</p>
                    <Button/>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="w-full pt-5 md:pt-0 md:ps-4 lg:w-1/2 lg:ps-10">
                    <img src={ImageHome} className='w-full h-full' alt="imagen de personas programando" />
                </div>
            </section>
            <section>
                <div className="flex flex-wrap w-full mb-10 lg:mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h2 className="sm:text-3xl text-2xl font-medium mb-2 text-gray-900">Tecnologías de Uso</h2>
                        <div className="h-1 w-28 bg-blue-500 rounded" />
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-600">
                        Estos componentes pueden ser utilizados con estas Tecnologías para crear
                        páginas web tradicionales y  desarrollo de aplicaciones web. 
                    </p>
                </div>
                <div data-aos="fade-up"  data-aos-duration="1000" className="flex flex-wrap -m-4 text-center">
                    <TechnologyCard borderColor="border-sky-400" icon={<IconReact />} title="React" textColor="text-sky-400" bgColor="bg-sky-100"/>
                    <TechnologyCard borderColor="border-green-400" icon={<IconVue />} title="Vue" textColor="text-green-500" bgColor="bg-green-100" />
                    <TechnologyCard borderColor="border-gray-400" icon={<IconNext />} title="Next" textColor="text-black" bgColor="bg-gray-100" />
                    <TechnologyCard borderColor="border-red-400" icon={<IconAngular />} title="Angular" textColor="text-red-600" bgColor="bg-red-100" />
                </div>
            </section>
            <section>
                <div className="text-center my-14 md:my-16 lg:mt-24 lg:mb-20">
                    <h2 className="sm:text-3xl text-2xl font-bold text-gray-900 mb-4">Componentes Tailwind CSS</h2>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                        Descubre la colección de componentes de código abierto, todos ellos creados utilizando las versátiles clases de utilidad de Tailwind CSS.
                    </p>
                    <div className="flex mt-3 justify-center">
                        <div className="w-24 h-1 rounded-full bg-blue-500 inline-flex" />
                    </div>
                </div>
                <div className="grid grid-cols-1 grid-rows-1 gap-5 md:grid-cols-4">
                    <ComponentCard to="componentes/banners" text="Banners" src="https://i.postimg.cc/NFsKV49R/banners.jpg" colSpan="md:col-span-2 md:order-2 lg:col-span-2" rowSpan="lg:row-span-2"/>
                    <ComponentCard to="componentes/alertas" text="Alerts" src="https://i.postimg.cc/vZk6Bfkd/alerts.jpg" colSpan="md:col-span-2 md:order-5" rowSpan="row-span-1"/>
                    <ComponentCard to="componentes/navbar" text="Navbar" src="https://i.postimg.cc/0QpShjt1/navs.jpg" colSpan="md:col-span-2 md:order-4" rowSpan="row-span-1"/>
                    <ComponentCard to="componentes/card" text="Cards" src="https://i.postimg.cc/B6c8My6q/cards.jpg" colSpan="md:col-span-1 md:order-1 lg:col-span-1" rowSpan="lg:row-span-1"/>
                    <ComponentCard to="componentes/spinners" text="Spinners" src="https://i.postimg.cc/zXpCJLqJ/spinners.jpg" colSpan="col-span-4 md:col-span-1 md:order-7 lg:col-span-1" rowSpan="row-span-1"/>
                    <ComponentCard to="componentes/forms" text="Forms" src="https://i.postimg.cc/JnWD3mR6/forms.jpg" colSpan="md:col-span-1 md:order-3 lg:col-span-2" rowSpan="lg:row-span-2"/>
                    <ComponentCard to="componentes/testimonial" text="Testimonials" src="https://i.postimg.cc/fbdS0kQS/testimonials.jpg" colSpan="md:col-span-4 md:order-6 lg:col-span-2" rowSpan="row-span-1"/>
                    <ComponentCard to="componentes/button-group" text="Buttons Group" src="https://i.postimg.cc/QdycTRBw/buttons-Groups.jpg" colSpan="md:col-span-1 md:order-8" rowSpan="row-span-1"/>
                    <ComponentCard to="componentes/buttons" text="Buttons" src="https://i.postimg.cc/7LJ0Mm06/buttons.jpg" colSpan="md:col-span-1 md:order-9 lg:col-span-2" rowSpan="row-span-1"/>
                    <ComponentCard to="componentes/pagination" text="Paginations" src="https://i.postimg.cc/vHG7F7Fq/paginations.jpg" colSpan="md:col-span-1 md:order-10" rowSpan="row-span-1"/>
                </div>
            </section>
        </>
    )
}
export default HomePage;