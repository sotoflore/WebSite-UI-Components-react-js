import { useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'; 

const ComponentCardAndCode = ( {children} ) => {

    useEffect(()=>{
        AOS.init();
    }, [])

    return (
        <article data-aos="fade-up" data-aos-duration="1000" className='mt-5 mb-8 bg-white px-5 py-10 rounded-xl border-2 border-gray-300 shadow md:px-8'>
            <div className='flex items-center flex-col'>
                {children}
            </div>
        </article>
    )
}
export default ComponentCardAndCode;