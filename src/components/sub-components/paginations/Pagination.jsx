import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';

const Pagination = () => {
    
    const code = `
    <ol class="flex justify-center gap-1 font-medium">
        <li>
            <a href="#" class="inline-flex items-center justify-center rounded border border-gray-300 bg-gray-200 text-gray-900 size-8">
                <span class="sr-only">Prev Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
            </a>
        </li>
        <li>
            <a href="#" class="block rounded border border-gray-300 bg-gray-200 text-center leading-8 text-gray-900 size-8">1</a>
        </li>
        <li>
            <a href="#" class="block rounded border border-gray-950 bg-gray-800 text-center leading-8 text-white size-8">2</a>
        </li>
        <li>
            <a href="#" class="block rounded border border-gray-300 bg-gray-200 text-center leading-8 text-gray-900 size-8">3</a>
        </li>
        <li>
            <a href="#" class="block rounded border border-gray-300 bg-gray-200 text-center leading-8 text-gray-900 size-8">4</a>
        </li>
        <li>
            <a href="#" class="inline-flex items-center justify-center rounded border border-gray-300 bg-gray-200 text-gray-900 size-8 rtl:rotate-180">
                <span class="sr-only">Next Page</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                </svg>
            </a>
        </li>
    </ol>
    `;
    return (
        <ComponentCardAndCode>
            <ol className="flex justify-center gap-1 font-medium">
                <li>
                    <a href="#" className="inline-flex size-8 items-center justify-center rounded border border-gray-300 bg-gray-200 text-gray-900">
                        <span className="sr-only">Prev Page</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="#" className="block size-8 rounded border border-gray-300 bg-gray-200 text-center leading-8 text-gray-900">1</a>
                </li>
                <li>
                    <a href="#" className="block size-8 rounded border border-gray-950 bg-gray-800 text-center leading-8 text-white">2</a>
                </li>
                <li>
                    <a href="#" className="block size-8 rounded border border-gray-300 bg-gray-200 text-center leading-8 text-gray-900">3</a>
                </li>
                <li>
                    <a href="#" className="block size-8 rounded border border-gray-300 bg-gray-200 text-center leading-8 text-gray-900">4</a>
                </li>
                <li>
                    <a href="#" className="inline-flex size-8 items-center justify-center rounded border border-gray-300 bg-gray-200 text-gray-900 rtl:rotate-180">
                        <span className="sr-only">Next Page</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </li>
            </ol>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default Pagination;