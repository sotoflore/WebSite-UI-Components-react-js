import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';

const CardProfile = () => {

    const code = `
    <div class="mx-auto">
        <div class="flex flex-wrap">
            <div class="px-2 lg:w-1/3 md:w-1/2 w-full hover:scale-105 transition duration-150">
                <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                    <h3 class="text-sm tracking-widest mb-1 font-medium">START</h3>
                    <h2 class="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h2>
                    <p class="flex items-center mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Lorem ipsum amet
                    </p>
                    <p class="flex items-center mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Lorem ipsum amet
                    </p>
                    <p class="flex items-center mb-6">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Lorem ipsum amet
                    </p>
                        <button class="flex items-center mt-auto text-white bg-black border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-800 rounded">Subscribe
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="px-2 lg:w-1/3 md:w-1/2 w-full hover:scale-105 transition duration-150">
                <div class="h-full p-6 rounded-lg bg-pink-700 border-2 border-gray-800 flex flex-col relative overflow-hidden">
                    <span class="bg-gray-800 text-white font-extrabold px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                    <h3 class="text-sm tracking-widest mb-1 text-white font-bold">PRO</h3>
                    <h2 class="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>$20</span>
                        <span class="text-lg ml-1 text-white">/mo</span>
                    </h2>
                    <p class="flex items-center text-white mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                             <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Lorem ipsum amet
                    </p>
                    <p class="flex items-center text-white mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Lorem ipsum amet
                    </p>
                    <p class="flex items-center text-white mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Lorem ipsum amet
                    </p>
                    <p class="flex items-center text-white mb-6">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Lorem ipsum amet
                    </p>
                    <button class="flex items-center mt-auto bg-white border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-100 rounded">Subscribe
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="px-2 lg:w-1/3 md:w-1/2 w-full hover:scale-105 transition duration-150">
                <div class="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                    <h3 class="text-sm tracking-widest mb-1 font-medium">BUSINESS</h3>
                    <h2 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                        <span>$40</span>
                        <span class="text-lg ml-1 font-normal text-gray-700">/mo</span>
                    </h2>
                    <p class="flex items-center mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Lorem ipsum amet
                    </p>
                    <p class="flex items-center mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Lorem ipsum amet
                    </p>
                    <p class="flex items-center mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Lorem ipsum amet
                    </p>
                    <p class="flex items-center mb-2">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Lorem ipsum amet
                    </p>
                    <p class="flex items-center mb-6">
                        <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                            <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                        </span>Lorem ipsum amet
                    </p>
                    <button class="flex items-center mt-auto text-white bg-black border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-800 rounded">Subscribe
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;

    return (
        <ComponentCardAndCode>
            <div className="mx-auto">
                <div className="flex flex-wrap">
                    <div className="px-2 lg:w-1/3 md:w-1/2 w-full hover:scale-105 transition duration-150">
                        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            <h3 className="text-sm tracking-widest mb-1 font-medium">START</h3>
                            <h2 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">Free</h2>
                            <p className="flex items-center mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                                </span>Lorem ipsum amet
                            </p>
                            <p className="flex items-center mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                                </span>Lorem ipsum amet
                            </p>
                            <p className="flex items-center mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                                </span>Lorem ipsum amet
                            </p>
                            <button className="flex items-center mt-auto text-white bg-black border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-800 rounded">Subscribe
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="px-2 lg:w-1/3 md:w-1/2 w-full hover:scale-105 transition duration-150 my-5 md:my-0">
                        <div className="h-full p-6 rounded-lg bg-pink-700 border-2 border-gray-800 flex flex-col relative overflow-hidden">
                            <span className="bg-gray-800 text-white font-extrabold px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                            <h3 className="text-sm tracking-widest mb-1 text-white font-bold">PRO</h3>
                            <h2 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>$20</span>
                                <span className="text-lg ml-1 text-white">/mo</span>
                            </h2>
                            <p className="flex items-center text-white mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                                </span>Lorem ipsum amet
                            </p>
                            <p className="flex items-center text-white mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                                </span>Lorem ipsum amet
                            </p>
                            <p className="flex items-center text-white mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                                </span>Lorem ipsum amet
                            </p>
                            <p className="flex items-center text-white mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                                </span>Lorem ipsum amet
                            </p>
                            <button className="flex items-center mt-auto bg-white border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-100 rounded">Subscribe
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="px-2 lg:w-1/3 md:w-1/2 w-full hover:scale-105 transition duration-150 mt-5 lg:mt-0">
                        <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                            <h3 className="text-sm tracking-widest mb-1 font-medium">BUSINESS</h3>
                            <h2 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>$40</span>
                                <span className="text-lg ml-1 font-normal text-gray-700">/mo</span>
                            </h2>
                            <p className="flex items-center mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                                </span>Lorem ipsum amet
                            </p>
                            <p className="flex items-center mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                                </span>Lorem ipsum amet
                            </p>
                            <p className="flex items-center mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                                </span>Lorem ipsum amet
                            </p>
                            <p className="flex items-center mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                                </span>Lorem ipsum amet
                            </p>
                            <p className="flex items-center mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-green-400 text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                                </span>Lorem ipsum amet
                            </p>
                            <button className="flex items-center mt-auto text-white bg-black border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-800 rounded">Subscribe
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default CardProfile;