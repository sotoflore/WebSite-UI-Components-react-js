import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';

const AlertDanger = () => {
    
    const code = `
    <div role="alert" class="rounded-xl text-red-800 border border-red-300 bg-red-50 p-4 w-full">
        <div class="flex items-start gap-4">
            <span class="text-2xl text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <g fill="none">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M12 7v6" />
                        <circle cx="12" cy="16" r="1" fill="currentColor" />
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
                    </g>
                </svg>
            </span>
            <div class="flex-1">
                <strong class="block font-bold">¡Error!</strong>
                <p class="mt-1 text-sm text-gray-700">
                    No se pudo completar la operación. Por favor, inténtelo de nuevo más tarde.
                </p>
            </div>
            <button class="text-gray-500 transition hover:text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </div>
    `;
    return (
        <ComponentCardAndCode>
            <div role="alert" className="rounded-xl text-red-800 border border-red-300 bg-red-50 p-4 w-full">
                <div className="flex items-start gap-4">
                    <span className="text-2xl text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                            <g fill="none">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 7v6" />
                                <circle cx="12" cy="16" r="1" fill="currentColor" />
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M7 3.338A9.954 9.954 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
                            </g>
                        </svg>
                    </span>
                    <div className="flex-1">
                        <strong className="block font-bold">¡Error!</strong>
                        <p className="mt-1 text-sm text-gray-700">
                            No se pudo completar la operación. Por favor, inténtelo de nuevo más tarde.
                        </p>
                    </div>
                    <button className="text-gray-500 transition hover:text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default AlertDanger;