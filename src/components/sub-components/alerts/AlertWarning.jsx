import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';

const AlertWarning = () => {
    
    const code = `
    <div role="alert" class="rounded-xl text-yellow-800 border border-yellow-300 bg-yellow-50 p-4 w-full">
        <div class="flex items-start gap-4">
            <span class="text-2xl text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                    <path fill="currentColor" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12" />
                </svg>
            </span>
            <div class="flex-1">
                <strong class="block font-bold">¡Advertencia!</strong>
                <p class="mt-1 text-sm text-gray-700">
                    El archivo que está a punto de eliminar es irreversible. ¿Está seguro de que desea continuar?
                </p>
                <div class="flex mt-2">
                    <button class="bg-red-600 px-3 text-gray-100 me-3 rounded-md">Si</button>
                    <button class="bg-gray-600 px-3 text-gray-100 rounded-md">No</button>
                </div>
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
            <div role="alert" className="rounded-xl text-yellow-800 border border-yellow-300 bg-yellow-50 p-4 w-full">
                <div className="flex items-start gap-4">
                    <span className="text-2xl text-yellow-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
                            <path fill="currentColor" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72m-13.87 15.71a8.5 8.5 0 0 1-7.48 4.2H40.55a8.5 8.5 0 0 1-7.48-4.2a7.59 7.59 0 0 1 0-7.72l87.45-151.87a8.75 8.75 0 0 1 15 0l87.45 151.87a7.59 7.59 0 0 1-.04 7.72M120 144v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0m20 36a12 12 0 1 1-12-12a12 12 0 0 1 12 12" />
                        </svg>
                    </span>
                    <div className="flex-1">
                        <strong className="block font-bold">¡Advertencia!</strong>
                        <p className="mt-1 text-sm text-gray-700">
                            El archivo que está a punto de eliminar es irreversible. ¿Está seguro de que desea continuar?
                        </p>
                        <div className="flex mt-2">
                            <button className="bg-red-600 px-3 text-gray-100 me-3 rounded-md">Si</button>
                            <button className="bg-gray-600 px-3 text-gray-100 rounded-md">No</button>
                        </div>
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
export default AlertWarning;