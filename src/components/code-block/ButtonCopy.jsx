import { useState } from "react";
import IconCopy from "../icons/IconCopy";
import IconCheck from "../icons/IconCheck";

const ButtonCopy = ( {code} ) => {
    const [copy, setCopy] = useState(false);

    const handleCopyCode = () => {
        navigator.clipboard.writeText(code);
        setCopy(true);
        setTimeout(() => { setCopy(false) }, 1000);
    }
    return (
        <div className='flex justify-between items-center text-white px-5 bg-black pt-3 rounded-t-lg'>
            <p className='uppercase font-bold'>html</p>
            {!copy ? (
                <button  onClick={handleCopyCode} className='flex items-center hover:bg-blue-600 px-2 rounded-md'>
                    <IconCopy/>
                    <span className='ps-1'>Copiar</span>
                </button>
                ) : (
                <button className='flex items-center'>
                    <IconCheck/>
                    <span className='ps-1'>Copiado</span>
                </button>
            )}
        </div>
    )
}
export default ButtonCopy;