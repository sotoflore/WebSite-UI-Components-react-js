import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';

const CardProduct = () => {
    const code = `
    <div class="max-w-sm bg-white border border-gray-300 rounded-lg shadow-2xl">
        <a href="#">
            <img class="rounded-lg" src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image product" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">Artificial Intelligence Tools</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ex ante. Vivamus id posuere lacus, ac tristique risus.
            </p>
            <a href="#" class="inline-flex items-center px-3 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none">
                Read more
                <svg class="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>     
        </div>
    </div>
    `;

    return (
        <ComponentCardAndCode>
            <div className="max-w-sm bg-white border border-gray-300 rounded-lg shadow-2xl">
                <a href="#">
                    <img className="rounded-lg" src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image product" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Artificial Intelligence Tools</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel ex ante. Vivamus id posuere lacus, ac tristique risus. 
                    </p>
                    <a href="#" className="inline-flex items-center px-3 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:outline-none">
                        Read more
                        <svg className="w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>     
                </div>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default CardProduct;