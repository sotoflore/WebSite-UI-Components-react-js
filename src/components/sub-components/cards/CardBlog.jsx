import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';

const CardBlog = () => {

   const code = `
    <div class="w-full shadow border border-gray-100 mt-10 rounded-lg px-5">
        <div class='md:flex'>
            <div>
                <img class='-mt-10 rounded-lg shadow-lg shadow-gray-900/40' src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen de inteligencia artificial" />
                <div class='flex justify-between'>
                    <div class='py-3'>
                        <h2 class='text-4xl text-gray-400 font-bold'>12</h2>
                        <h3 class='text-4xl text-gray-400 font-bold'>March</h3>
                    </div>
                    <div class='flex items-end pb-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48">
                            <g fill="none">
                                <path d="M29 24.048a5 5 0 1 1-1.748-3.798a1.5 1.5 0 1 0 .547.547A4.98 4.98 0 0 1 29 24.046z" fill="currentColor"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M44 24.048s-11-12-19.947-12c-8.948 0-20.053 12-20.053 12s11.105 12 20.053 12c8.947 0 19.947-12 19.947-12zM7.255 23.62c-.158.15-.306.292-.444.427a59.368 59.368 0 0 0 5.08 4.416a43.151 43.151 0 0 0 3.518 2.455A10.954 10.954 0 0 1 13 24.048c0-2.6.902-4.988 2.41-6.87a43.176 43.176 0 0 0-3.518 2.454a59.368 59.368 0 0 0-4.637 3.989zm28.9 4.846a42.227 42.227 0 0 1-3.64 2.546A10.955 10.955 0 0 0 35 24.048c0-2.643-.932-5.068-2.485-6.965a42.227 42.227 0 0 1 3.64 2.545a58.582 58.582 0 0 1 5.047 4.42l-.446.433a58.582 58.582 0 0 1-4.6 3.986zM24 33.047a9 9 0 1 0 0-18a9 9 0 0 0 0 18z" fill="currentColor"/>
                            </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" class='mx-3'>
                            <path fill="currentColor" d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62m-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" class='me-3'>
                            <path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 464 488">
                            <path fill="currentColor" d="M164 232v5l165 82q22-19 52-19q34 0 57.5 23.5T462 381t-23.5 57.5T381 462t-57.5-23.5T300 381v-5l-165-82q-22 19-52 19q-34 0-57.5-23.5T2 232t23.5-57.5T83 151q30 0 52 19l165-82v-5q0-34 23.5-57.5T381 2t57.5 23.5T462 83t-23.5 57.5T381 164q-30 0-52-19l-165 82z"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class='w-full'>
                <div class='ps-5 pt-4'>
                    <h2 class='text-xl font-extrabold'>The Era of Artificial Intelligence</h2>
                    <div class='flex items-center bg-blue-300 rounded-full my-1'>
                        <img class='w-7 h-7 object-cover rounded-full' src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="foto" />
                        <p class='ps-2 font-bold text-xs'>Francisco Soto</p>
                    </div>
                    <p class='text-justify pb-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, saepe quae! Nesciunt aliquid 
                        repellat alias, error tenetur placeat doloribus similique, recusandae velit distinctio, 
                        natus corrupti. Vel neque quidem saepe quia?
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;

    return (
        <ComponentCardAndCode>
            <div className="w-full shadow border border-gray-100 mt-10 rounded-lg px-5">
                <div className='md:flex'>
                    <div>
                        <img className='-mt-10 rounded-lg shadow-lg shadow-gray-900/40' src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen de inteligencia artificial" />
                        <div className='flex justify-between'>
                            <div className='py-3'>
                                <h2 className='text-4xl text-gray-400 font-bold'>12</h2>
                                <h3 className='text-4xl text-gray-400 font-bold'>March</h3>
                            </div>
                            <div className='flex items-end pb-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48">
                                    <g fill="none">
                                        <path d="M29 24.048a5 5 0 1 1-1.748-3.798a1.5 1.5 0 1 0 .547.547A4.98 4.98 0 0 1 29 24.046z" fill="currentColor"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M44 24.048s-11-12-19.947-12c-8.948 0-20.053 12-20.053 12s11.105 12 20.053 12c8.947 0 19.947-12 19.947-12zM7.255 23.62c-.158.15-.306.292-.444.427a59.368 59.368 0 0 0 5.08 4.416a43.151 43.151 0 0 0 3.518 2.455A10.954 10.954 0 0 1 13 24.048c0-2.6.902-4.988 2.41-6.87a43.176 43.176 0 0 0-3.518 2.454a59.368 59.368 0 0 0-4.637 3.989zm28.9 4.846a42.227 42.227 0 0 1-3.64 2.546A10.955 10.955 0 0 0 35 24.048c0-2.643-.932-5.068-2.485-6.965a42.227 42.227 0 0 1 3.64 2.545a58.582 58.582 0 0 1 5.047 4.42l-.446.433a58.582 58.582 0 0 1-4.6 3.986zM24 33.047a9 9 0 1 0 0-18a9 9 0 0 0 0 18z" fill="currentColor"/>
                                    </g>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" className='mx-3'>
                                    <path fill="currentColor" d="M178 32c-20.65 0-38.73 8.88-50 23.89C116.73 40.88 98.65 32 78 32a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 220.66 240 164 240 94a62.07 62.07 0 0 0-62-62m-50 174.8C109.74 196.16 32 147.69 32 94a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className='me-3'>
                                    <path fill="currentColor" d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 464 488">
                                    <path fill="currentColor" d="M164 232v5l165 82q22-19 52-19q34 0 57.5 23.5T462 381t-23.5 57.5T381 462t-57.5-23.5T300 381v-5l-165-82q-22 19-52 19q-34 0-57.5-23.5T2 232t23.5-57.5T83 151q30 0 52 19l165-82v-5q0-34 23.5-57.5T381 2t57.5 23.5T462 83t-23.5 57.5T381 164q-30 0-52-19l-165 82z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='ps-5 pt-4'>
                            <h2 className='text-xl font-extrabold'>The Era of Artificial Intelligence</h2>
                            <div className='flex items-center bg-blue-300 rounded-full my-1'>
                                <img className='w-7 h-7 object-cover rounded-full' src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="foto" />
                                <p className='ps-2 font-bold text-xs'>Francisco Soto</p>
                            </div>
                            <p className='text-justify pb-3'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, saepe quae! Nesciunt aliquid 
                                repellat alias, error tenetur placeat doloribus similique, recusandae velit distinctio, 
                                natus corrupti. Vel neque quidem saepe quia?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default CardBlog;