import ComponentCardAndCode from "../../container/ComponentCardAndCode";
import CodeBlock from "../../code-block/CodeBlock";

const ButtonPrimary = () => {

    const code = `
    <div>
        <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center">
            Button 1
        </button>
        <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center ms-5">
            Button 2
        </button>
    </div>
    `;
    return (
        <ComponentCardAndCode>
            <div>
                <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center">
                    Button 1
                </button>
                <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:outline-none font-medium rounded-lg px-5 py-2.5 text-center ms-5">
                    Button 2
                </button>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default ButtonPrimary;