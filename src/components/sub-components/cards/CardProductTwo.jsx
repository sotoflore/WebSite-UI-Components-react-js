import ComponentCardAndCode from '../../container/ComponentCardAndCode';
import CodeBlock from '../../code-block/CodeBlock';

const CardProductTwo = () => {

   const code = `
    <div className="w-full md:w-1/2 bg-gradient-to-b from-lime-500 relative mt-12 px-5 rounded-lg shadow-xl">
        <div className='w-full -mt-16 z-20'>
            <img className='w-full' src="https://i.postimg.cc/Y9BsdV3s/slippers.png" alt="imagen producto" />
        </div>
        <div className='flex justify-between items-center mt-4'>
            <h2 className='text-2xl font-bold'>Blue Sandals</h2>
            <button className='bg-gray-100 px-2 py-1 rounded-full font-bold'>$50.00</button>
        </div>
        <p className='py-2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nihil, 
            vel totam facilis, blanditiis tempore distinctio magnam, est possimus.
        </p>
        <h3 className='text-xl font-bold mb-1'>size</h3>
        <button className='bg-gray-100 px-2 py-1 rounded-md'>7</button>
        <button className='bg-gray-100 px-2 py-1 rounded-md mx-3'>8</button>
        <button className='bg-gray-900 text-white px-2 py-1 rounded-md me-3'>9</button>
        <button className='bg-gray-100 px-2 py-1 rounded-md'>10</button>
        <h4 className='text-xl font-bold mt-2'>Color</h4>
        <div className='flex items-center'>
            <div className='w-7 h-7 rounded-full bg-blue-800'></div>
            <div className='w-7 h-7 rounded-full bg-purple-800 mx-3'></div>
            <div className='w-7 h-7 rounded-full bg-gray-950'></div>
        </div>
        <button className='py-1 my-3 bg-gray-300 w-full rounded-full font-bold text-center'>Buy Now</button>
    </div>
    `;

    return (
        <ComponentCardAndCode>
            <div className="w-full md:w-1/2 bg-gradient-to-b from-lime-500 relative mt-12 px-5 rounded-lg shadow-xl">
                <div className='w-full -mt-16 z-20'>
                    <img className='w-full' src="https://i.postimg.cc/Y9BsdV3s/slippers.png" alt="imagen producto" />
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <h2 className='text-2xl font-bold'>Blue Sandals</h2>
                    <button className='bg-gray-100 px-2 py-1 rounded-full font-bold'>$50.00</button>
                </div>
                <p className='py-2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nihil, 
                    vel totam facilis, blanditiis tempore distinctio magnam, est possimus.
                </p>
                <h3 className='text-xl font-bold mb-1'>size</h3>
                <button className='bg-gray-100 px-2 py-1 rounded-md'>7</button>
                <button className='bg-gray-100 px-2 py-1 rounded-md mx-3'>8</button>
                <button className='bg-gray-900 text-white px-2 py-1 rounded-md me-3'>9</button>
                <button className='bg-gray-100 px-2 py-1 rounded-md'>10</button>
                <h4 className='text-xl font-bold mt-2'>Color</h4>
                <div className='flex items-center'>
                    <div className='w-7 h-7 rounded-full bg-blue-800'></div>
                    <div className='w-7 h-7 rounded-full bg-purple-800 mx-3'></div>
                    <div className='w-7 h-7 rounded-full bg-gray-950'></div>
                </div>
                <button className='py-1 my-3 bg-gray-300 w-full rounded-full font-bold text-center shadow'>Buy Now</button>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default CardProductTwo;