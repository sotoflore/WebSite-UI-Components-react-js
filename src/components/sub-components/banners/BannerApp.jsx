import CodeBlock from "../../code-block/CodeBlock";
import ComponentCardAndCode from "../../container/ComponentCardAndCode";


const BannerApp = () => {

    const code = `
    <div class="flex items-center flex-wrap md:flex-nowrap shadow border border-gray-200">
        <div class="ps-3 pb-4 md:pb-0">
            <h2 class="text-4xl font-extrabold">
                Simple App that we <span class="uppercase text-yellow-300">create</span>
            </h2>
            <p class="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Explicabo necessitatibus.
            </p>
            <button class="bg-yellow-300 mt-3 px-3 py-2 rounded-md w-auto flex items-center font-extrabold">
                <span class="pe-1">Download</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                </svg>
            </button>
        </div>
        <div class="pb-5 order-first md:order-last">
            <img src="https://i.postimg.cc/nr2pcCWR/banner.png" alt="imagen de app" />
        </div>
    </div>
    `;
    return (
        <ComponentCardAndCode>
            <div className="flex items-center flex-wrap md:flex-nowrap shadow border border-gray-200">
                <div className="ps-3 pb-4 md:pb-0">
                    <h2 className="text-4xl font-extrabold">
                        Simple App that we <span className="uppercase text-yellow-300">create</span>
                    </h2>
                    <p className="py-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Explicabo necessitatibus.
                    </p>
                    <button className="bg-yellow-300 mt-3 px-3 py-2 rounded-md w-auto flex items-center font-extrabold">
                        <span className="pe-1">Download</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                        </svg>
                    </button>
                </div>
                <div className="pb-5 order-first md:order-last">
                    <img src="https://i.postimg.cc/nr2pcCWR/banner.png" alt="imagen de app" />
                </div>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default BannerApp;