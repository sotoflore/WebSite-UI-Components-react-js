import CodeBlock from "../../code-block/CodeBlock";
import ComponentCardAndCode from "../../container/ComponentCardAndCode";


const Banner = () => {

    const code = `
    <div class="relative w-full bg-[url(https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat rounded-xl">
        <div class="absolute inset-0 bg-black/30 from-black/95 bg-gradient-to-r rounded-xl"></div>
        <div class="relative mx-auto max-w-screen-xl py-20 flex items-center px-8">
            <div class="max-w-full">
                <h1 class="text-5xl text-start font-extrabold text-white">
                    <strong class="block font-extrabold text-red-700">¡Oferta especial!</strong>
                    por tiempo limitado
                </h1>
                <p class="mt-4 max-w-lg text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                </p>
                <div class="mt-8 flex flex-wrap gap-4 text-center">
                    <a href="#" class="block rounded bg-red-600 px-12 py-3 text-sm font-bold text-white shadow hover:bg-red-700 focus:outline-none w-auto">Ver Oferta</a>
                    <a href="#" class="block rounded bg-white px-12 py-3 text-sm font-medium text-gray-800 shadow hover:text-gray-900 focus:outline-none w-auto">productos</a>
                </div>
            </div>
        </div>
    </div>
    `;
    return (
        <ComponentCardAndCode>
            <div className="relative w-full bg-[url(https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat rounded-xl">
                <div className="absolute inset-0 bg-black/30 from-black/95 bg-gradient-to-r rounded-xl" />
                <div className="relative mx-auto max-w-screen-xl py-20 flex items-center px-8">
                    <div className="max-w-full">
                        <h1 className="text-5xl text-start font-extrabold text-white">
                            <strong className="block font-extrabold text-red-700">¡Oferta especial!</strong>
                            por tiempo limitado
                        </h1>
                        <p className="mt-4 max-w-lg text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                            numquam ea!
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a href="#" className="block rounded bg-red-600 px-12 py-3 text-sm font-bold text-white shadow hover:bg-red-700 focus:outline-none w-auto">
                                Ver Oferta
                            </a>
                            <a href="#" className="block  rounded bg-white px-12 py-3 text-sm font-medium text-gray-800 shadow hover:text-gray-900 focus:outline-none w-auto">
                                productos
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default Banner;