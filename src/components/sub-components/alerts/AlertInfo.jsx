import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';

const AlertInfo = () => {
    
    const code = `
    <div role="alert" class="rounded-xl text-blue-800 border border-blue-300 bg-blue-50 p-4 w-full">
        <div class="flex items-start gap-4">
            <div class="flex-1">
                <strong class="block font-medium text-blue-900">¡Atención!</strong>
                <p class="mt-1 text-sm text-gray-700">
                    Se ha detectado actividad sospechosa en su cuenta. Por favor, inicie sesión y cambie su contraseña.
                </p>
                <div class="mt-4 flex gap-2">
                    <a href="#" class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                        <span class="text-sm">Inicia Sesión</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
    `;
    return (
        <ComponentCardAndCode>
            <div role="alert" className="rounded-xl text-blue-800 border border-blue-300  bg-blue-50 p-4 w-full">
                <div className="flex items-start gap-4">
                    <div className="flex-1">
                        <strong className="block font-medium text-blue-900">¡Atención!</strong>
                        <p className="mt-1 text-sm text-gray-700">
                            Se ha detectado actividad sospechosa en su cuenta. Por favor, inicie sesión y cambie su contraseña.
                        </p>
                        <div className="mt-4 flex gap-2">
                            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                                <span className="text-sm">Inicia Sesión</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default AlertInfo;