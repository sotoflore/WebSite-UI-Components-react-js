import ComponentCardAndCode from "../../container/ComponentCardAndCode";
import CodeBlock from "../../code-block/CodeBlock";

const FormIcon = () => {

    const code = `
    <form class="w-full md:w-1/2 border border-gray-300 shadow p-5 rounded-lg">
        <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48" class="stroke-current">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 29H6v14h14zm4-25l10 17H14zm12 40a8 8 0 1 0 0-16a8 8 0 0 0 0 16" />
            </svg>
            <h2 class="text-base md:text-3xl text-center font-bold">Welcome 🖐️</h2>
        </div>
        <div class="mt-3">
            <label for="" class="block w-full">Email:</label>
            <div class="flex items-center w-full justify-between border border-black rounded">
                <input type="email" placeholder="example@email.com" class="w-full border-0" />
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256" class="fill-current">
                    <path fill="currentColor" d="M128 24a104 104 0 0 0 0 208c21.51 0 44.1-6.48 60.43-17.33a8 8 0 0 0-8.86-13.33C166 210.38 146.21 216 128 216a88 88 0 1 1 88-88c0 26.45-10.88 32-20 32s-20-5.55-20-32V88a8 8 0 0 0-16 0v4.26a48 48 0 1 0 5.93 65.1c6 12 16.35 18.64 30.07 18.64c22.54 0 36-17.94 36-48A104.11 104.11 0 0 0 128 24m0 136a32 32 0 1 1 32-32a32 32 0 0 1-32 32" />
                </svg>
            </div>
        </div>
        <div class="mt-3">
            <label for="" class="block w-full">Password</label>
            <div class="flex items-center w-full justify-between border border-black rounded">
                <input type="password" placeholder="......" class="w-full border-0 outline-none" />
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" class="fill-current">
                    <path fill="currentColor" d="M24 14h-2V8a6 6 0 0 0-12 0v6H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2M12 8a4 4 0 0 1 8 0v6h-8Zm12 20H8V16h16Z" />
                </svg>
            </div>
        </div>
        <div class="mt-6">
            <button class="w-full py-1.5 bg-black text-white rounded-lg font-bold" type="button">Login</button>
            <button class="flex items-center justify-center w-full py-1.5 mt-3 bg-gray-300 rounded-lg font-bold" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 262" class="fill-current">
                    <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
                    <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
                    <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" />
                    <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                </svg>
                <span class="ps-2">Log in with Google</span>
            </button>
            <p class="text-center mt-1">Don't have an account? <a href="#" class="text-blue-500 font-bold underline">Sign Up</a></p>
        </div>
    </form>
    `;
    return (
        <ComponentCardAndCode>
            <form className="w-full md:w-1/2 border border-gray-300 shadow p-5 rounded-lg">
                <div className="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M20 29H6v14h14zm4-25l10 17H14zm12 40a8 8 0 1 0 0-16a8 8 0 0 0 0 16" />
                    </svg>
                    <h2 className="text-base md:text-3xl text-center font-bold">Welcome 🖐️</h2>
                </div>
                <div className="mt-3">
                    <label htmlFor="" className="block w-full">Email:</label>
                    <div className="flex items-center w-full justify-between border border-black">
                        <input type="email" placeholder="example@email.com" className="w-full border-0" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 256 256">
                            <path fill="currentColor" d="M128 24a104 104 0 0 0 0 208c21.51 0 44.1-6.48 60.43-17.33a8 8 0 0 0-8.86-13.33C166 210.38 146.21 216 128 216a88 88 0 1 1 88-88c0 26.45-10.88 32-20 32s-20-5.55-20-32V88a8 8 0 0 0-16 0v4.26a48 48 0 1 0 5.93 65.1c6 12 16.35 18.64 30.07 18.64c22.54 0 36-17.94 36-48A104.11 104.11 0 0 0 128 24m0 136a32 32 0 1 1 32-32a32 32 0 0 1-32 32" />
                        </svg>
                    </div>
                </div>
                <div className="mt-3">
                    <label htmlFor="" className="block w-full">Password</label>
                    <div className="flex items-center w-full justify-between border border-black">
                        <input type="password" placeholder="......" className="w-full border-0 outline-none" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32">
                            <path fill="currentColor" d="M24 14h-2V8a6 6 0 0 0-12 0v6H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2M12 8a4 4 0 0 1 8 0v6h-8Zm12 20H8V16h16Z" />
                        </svg>
                    </div>
                </div>
                <div className="mt-6">
                    <button className="w-full py-1.5 bg-black text-white rounded-lg font-bold" type="button">Login</button>
                    <button className="flex items-center justify-center w-full py-1.5 mt-3 bg-gray-300 rounded-lg font-bold" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 262">
                            <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
                            <path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
                            <path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z" />
                            <path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
                        </svg>
                        <span className="ps-2">Log in with Google</span>
                    </button>
                    <p className="text-center mt-1">Don't have an account? <a href="#" className="text-blue-500 font-bold underline">Sign Up</a></p>
                </div>
            </form>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default FormIcon;