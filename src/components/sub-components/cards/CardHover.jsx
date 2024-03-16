import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';

const CardHover = () => {

   const code = `
    <div class="w-full flex flex-wrap md:flex-nowrap bg-gray-100 rounded-lg shadow border border-gray-200">
        <div class="flex flex-col items-center text-center p-4 group hover:bg-zinc-900 transition ease-in-out duration-700 rounded-lg">
            <div class="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-t-3xl rounded-b-md text-white font-extrabold flex items-center justify-center -mt-9 mb-5">1</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 group-hover:text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
            </svg>
            <h2 class="text-2xl py-1 group-hover:text-white font-bold">Lorem ipsum</h2>
            <p class="text-sm group-hover:text-white mb-5 md:mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cum corrupti impedit laboriosam minima.
            </p>
        </div>
        <div class="flex flex-col items-center text-center p-4 group hover:bg-zinc-900 transition ease-in-out duration-700 rounded-lg">
            <div class="bg-gradient-to-r from-sky-500 to-indigo-500 w-12 h-12 rounded-t-3xl rounded-b-md text-white font-extrabold flex items-center justify-center -mt-9 mb-5">2</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 group-hover:text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
            <h2 class="group-hover:text-white py-1 text-2xl font-bold">Lorem ipsum</h2>
            <p class="text-sm group-hover:text-white mb-5 md:mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cum corrupti impedit laboriosam minima.
            </p>
        </div>
        <div class="flex flex-col items-center text-center p-4 group hover:bg-zinc-900 transition ease-in-out duration-700 rounded-lg">
            <div class="bg-gradient-to-r from-cyan-500 to-green-500 w-12 h-12 rounded-t-3xl rounded-b-md text-white font-extrabold flex items-center justify-center -mt-9 mb-5">3</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 group-hover:text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
            </svg>
            <h2 class="group-hover:text-white py-1 text-2xl font-bold">Lorem ipsum</h2>
            <p class="text-sm group-hover:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Cum corrupti impedit laboriosam minima.
            </p>
        </div>
    </div>
    `;

    return (
        <ComponentCardAndCode>
            <div className="w-full flex flex-wrap md:flex-nowrap bg-gray-100 rounded-lg shadow border border-gray-200">
                <div className='flex flex-col items-center text-center p-4 group hover:bg-zinc-900 transition ease-in-out duration-700 rounded-lg'>
                    <div className='bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-t-3xl rounded-b-md text-white font-extrabold flex items-center justify-center -mt-9 mb-5'>1</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 group-hover:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                    </svg>
                    <h2 className='text-2xl py-1 group-hover:text-white font-bold'>Lorem ipsum</h2>
                    <p className='text-sm group-hover:text-white mb-5 md:mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum corrupti impedit laboriosam minima.
                    </p>
                </div>
                <div className='flex flex-col items-center text-center p-4 group hover:bg-zinc-900 transition ease-in-out duration-700 rounded-lg'>
                    <div className='bg-gradient-to-r from-sky-500 to-indigo-500 w-12 h-12 rounded-t-3xl rounded-b-md text-white font-extrabold flex items-center justify-center -mt-9 mb-5'>2</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 group-hover:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                    </svg>
                    <h2 className='group-hover:text-white py-1 text-2xl font-bold'>Lorem ipsum</h2>
                    <p className='text-sm group-hover:text-white mb-5 md:mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum corrupti impedit laboriosam minima.
                    </p>
                </div>
                <div className='flex flex-col items-center text-center p-4 group hover:bg-zinc-900 transition ease-in-out duration-700 rounded-lg'>
                    <div className='bg-gradient-to-r from-cyan-500 to-green-500 w-12 h-12 rounded-t-3xl rounded-b-md text-white font-extrabold flex items-center justify-center -mt-9 mb-5'>3</div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 group-hover:text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
                    </svg>
                    <h2 className='group-hover:text-white py-1 text-2xl font-bold'>Lorem ipsum</h2>
                    <p className='text-sm group-hover:text-white'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Cum corrupti impedit laboriosam minima.
                    </p>
                </div>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default CardHover;