import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';
import IconMenu from '../../icons/IconMenu';

const NavMenu = () => {
    
    const code = `
    <div class="text-gray-600 w-full">
        <div class="flex flex-wrap items-center">
            <a class="flex font-medium items-center text-white bg-black p-1 rounded-md">
                <span class='bg-blue-600 px-1 rounded-md uppercase'>ui</span>
                <span class="ml-1 text-xl">Components</span>
            </a>
            <nav class="ml-auto mr-auto py-1 pl-4 flex flex-wrap items-center text-base justify-center">
                <a class="mr-5 hover:text-gray-900">Link</a>
                <a class="mr-5 hover:text-gray-900">Link</a>
                <a class="mr-5 hover:text-gray-900">Link</a>
                <a class="mr-5 hover:text-gray-900">Link</a>
            </nav>
            <button class="inline-flex items-center text-white bg-blue-600 border border-blue-600 py-1 px-3 focus:outline-none hover:bg-blue-900 rounded-md text-base">
                Login
            </button>
            <button class="inline-flex items-center text-black bg-blue-200 border border-blue-500 py-1 px-3 focus:outline-none rounded-md text-base ms-2">
                Register
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
                    <nav className="ml-auto mr-auto py-1 pl-4 flex-wrap items-center text-base justify-center hidden md:flex">
                        <a className="mr-5 hover:text-gray-900">Link</a>
                        <a className="mr-5 hover:text-gray-900">Link</a>
                        <a className="mr-5 hover:text-gray-900">Link</a>
                        <a className="mr-5 hover:text-gray-900">Link</a>
                    </nav>
                    <button className="items-center text-white bg-blue-600 border py-1 px-3 focus:outline-none hover:bg-blue-900 rounded-md text-base hidden md:inline-flex">
                        Login
                    </button>
                    <button className="items-center text-black bg-blue-200 border border-blue-500 py-1 px-3 focus:outline-none rounded-md text-base ms-2 hidden md:inline-flex">
                        Register
                    </button>
                    <button className='inline-block md:hidden'><IconMenu/></button>
                </div>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default NavMenu;