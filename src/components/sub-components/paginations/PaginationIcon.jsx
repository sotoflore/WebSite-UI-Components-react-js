import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';

const PaginationIcon = () => {
    
    const code = `
    <div class="flex">
        <a href="#" class="flex items-center justify-center px-4 h-10 me-3 text-base font-bold text-black bg-blue-200 border border-blue-600 rounded-lg hover:bg-gray-100 hover:text-gray-700">
            <svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
            Previous
        </a>
        <a href="#" class="flex items-center justify-center px-4 h-10 text-base font-bold text-black bg-blue-200 border border-blue-600 rounded-lg hover:bg-gray-100 hover:text-gray-700">
            Next
            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
    `;
    return (
        <ComponentCardAndCode>
            <div className="flex">
                <a href="#" className="flex items-center justify-center px-4 h-10 me-3 text-base font-bold text-black bg-blue-200 border border-blue-600 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                    <svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                    </svg>
                    Previous
                </a>
                <a href="#" className="flex items-center justify-center px-4 h-10 text-base font-bold text-black bg-blue-200 border border-blue-600 rounded-lg hover:bg-gray-100 hover:text-gray-700">
                    Next
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default PaginationIcon;