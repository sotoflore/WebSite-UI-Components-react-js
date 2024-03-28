import ComponentCardAndCode from "../../container/ComponentCardAndCode";
import CodeBlock from "../../code-block/CodeBlock";

const ButtonHover = () => {

    const code = `
    <div>
        <button class="group relative inline-flex py-3 items-center justify-center overflow-hidden rounded-md bg-red-600 px-6 font-medium text-neutral-50 me-5">
            <span class="absolute h-0 w-0 rounded-full bg-gray-900 transition-all duration-300 group-hover:h-56 group-hover:w-32"></span>
            <span class="relative">Hover me</span>
        </button>
        <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-green-600 px-6 font-medium text-neutral-200">
            <span>Hover me</span>
            <div class="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
                    <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
            </div>
        </button>
    </div>
    `;
    return (
        <ComponentCardAndCode>
            <div>
                <button className="group relative inline-flex py-3 items-center justify-center overflow-hidden rounded-md bg-red-600 px-6 font-medium text-neutral-50 me-5">
                    <span className="absolute h-0 w-0 rounded-full bg-gray-900 transition-all duration-300 group-hover:h-56 group-hover:w-32"></span>
                    <span className="relative">Hover me</span>
                </button>
                <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-green-600 px-6 font-medium text-neutral-200">
                    <span>Hover me</span>
                    <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                        </svg>
                    </div>
                </button>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default ButtonHover;