import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';

const Alert = () => {
    
    const code = `
    <div role="alert" class="rounded-xl text-green-800 border border-green-300 bg-green-50 p-4 w-full">
        <div class="flex items-start gap-4">
            <span class="text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </span>
            <div class="flex-1">
                <strong class="block font-bold">¡Éxito!</strong>
                <p class="mt-1 text-sm text-gray-700">Su solicitud se ha completado correctamente. Gracias por su colaboración</p>
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
            <div role="alert" className="rounded-xl text-green-800 border border-green-300 bg-green-50 p-4 w-full">
                <div className="flex items-start gap-4">
                    <span className="text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                    <div className="flex-1">
                        <strong className="block font-bold">¡Éxito!</strong>
                        <p className="mt-1 text-sm text-gray-700">Su solicitud se ha completado correctamente. Gracias por su colaboración</p>
                    </div>
                    <button className="text-gray-500 transition hover:text-gray-800">
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
export default Alert;