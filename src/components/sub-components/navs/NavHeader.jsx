import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';
import IconMenu from '../../icons/IconMenu';

const NavHeader = () => {
    
    const code = `
    <div class="text-gray-600 w-full">
        <div class="flex flex-wrap items-center">
            <a class="flex font-medium items-center text-white bg-black p-1 rounded-md">
                <span class='bg-blue-600 px-1 rounded-md uppercase'>ui</span>
                <span class="ml-1 text-xl">Components</span>
            </a>
            <nav class="mr-auto ml-4 py-1 pl-4 border-l border-gray-500 flex flex-wrap items-center text-base justify-center">
                <a class="mr-5 hover:text-gray-900">Link</a>
                <a class="mr-5 hover:text-gray-900">Link</a>
                <a class="mr-5 hover:text-gray-900">Link</a>
                <a class="mr-5 hover:text-gray-900">Link</a>
            </nav>
            <button class="inline-flex items-center text-white bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-900 rounded-md text-base">
                Login
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
    `;
    return (
        <ComponentCardAndCode>
            <div className="text-gray-600 w-full">
                <div className="flex flex-wrap items-center justify-between md:justify-start">
                    <a className="flex font-medium items-center text-white bg-black p-1 rounded-md">
                        <span className='bg-blue-600 px-1 rounded-md uppercase'>ui</span>
                        <span className="ml-1 text-xl">Components</span>
                    </a>
                    <nav className="mr-auto ml-4 py-1 pl-4 border-l border-gray-500 flex-wrap items-center text-base justify-center hidden md:flex">
                        <a className="mr-5 hover:text-gray-900">Link</a>
                        <a className="mr-5 hover:text-gray-900">Link</a>
                        <a className="mr-5 hover:text-gray-900">Link</a>
                        <a className="mr-5 hover:text-gray-900">Link</a>
                    </nav>
                    <button className="items-center text-white bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-blue-900 rounded-md text-base hidden md:inline-flex">
                        Login
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                    <button className='inline-block md:hidden'><IconMenu/></button>
                </div>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default NavHeader;