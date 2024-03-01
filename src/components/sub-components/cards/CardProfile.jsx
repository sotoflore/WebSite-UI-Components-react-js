import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';

const CardProfile = () => {

    const code = `
    <a href="#" class="relative w-96 overflow-hidden rounded-lg border border-gray-400 p-6">
        <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-purple-300 via-blue-500 to-red-600"></span>
        <div class="flex justify-between gap-4">
            <div>
                <h3 class="text-xl font-bold text-gray-900">Building a SaaS product as a software developer</h3>
                <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
            </div>
            <div class="shrink-0">
                <img alt="" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="size-16 rounded-lg object-cover shadow-sm" />
            </div>
        </div>
        <div class="mt-4">
            <p class="text-pretty text-sm text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                maiores deleniti consectetur nobis et eaque.
            </p>
        </div>
        <dl class="mt-6 flex gap-4 sm:gap-6">
            <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">Published</dt>
                <dd class="text-xs text-gray-500">20 February, 2024</dd>
            </div>
            <div class="flex flex-col-reverse">
                <dt class="text-sm font-medium text-gray-600">Reading time</dt>
                <dd class="text-xs text-gray-500">4 minutes</dd>
            </div>
        </dl>
    </a>
    `;

    return (
        <ComponentCardAndCode>
            <a href="#" className="relative overflow-hidden rounded-lg border border-gray-400 p-6 md:w-96">
                <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-purple-300 via-blue-500 to-red-600" />
                <div className="flex justify-between gap-4">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">Building a SaaS product as a software developer</h3>
                        <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
                    </div>
                    <div className="shrink-0">
                        <img alt="" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="size-16 rounded-lg object-cover shadow-sm" />
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-pretty text-sm text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa
                        maiores deleniti consectetur nobis et eaque.
                    </p>
                </div>
                <dl className="mt-6 flex gap-4 sm:gap-6">
                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Published</dt>
                        <dd className="text-xs text-gray-500">20 February, 2024</dd>
                    </div>
                    <div className="flex flex-col-reverse">
                        <dt className="text-sm font-medium text-gray-600">Reading time</dt>
                        <dd className="text-xs text-gray-500">4 minutes</dd>
                    </div>
                </dl>
            </a>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default CardProfile;