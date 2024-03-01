import CodeBlock from "../../code-block/CodeBlock";
import ComponentCardAndCode from "../../container/ComponentCardAndCode";

const TestimonialText = () => {
    
    const code = `
    <div class="w-1/2 shadow border border-gray-200">
        <div class="h-full text-center px-3 py-2">
            <img alt="testimonial" class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <p class="leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempore eum, 
                blanditiis delectus voluptate eaque voluptates voluptatum, placeat, ad nobis.
            </p>
            <span class="inline-block h-1 w-20 rounded bg-blue-500 mt-3 mb-4"></span>
            <h2 class="text-gray-900 font-medium tracking-wider text-sm uppercase">john doe</h2>
            <p class="text-gray-600">Senior Product Designer</p>
        </div>
    </div>
    `;
    return (
        <ComponentCardAndCode>
            <div className="w-full shadow border border-gray-200 md:w-1/2">
                <div className="h-full text-center px-3 py-2">
                    <img alt="testimonial" className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    <p className="leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempore eum, 
                        blanditiis delectus voluptate eaque voluptates voluptatum, placeat, ad nobis.
                    </p>
                    <span className="inline-block h-1 w-20 rounded bg-blue-500 mt-3 mb-4"></span>
                    <h2 className="text-gray-900 font-medium tracking-wider text-sm uppercase">john doe</h2>
                    <p className="text-gray-600">Senior Product Designer</p>
                </div>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default TestimonialText;