import ComponentCardAndCode from "../../container/ComponentCardAndCode";
import CodeBlock from "../../code-block/CodeBlock";

const FormWelcome = () => {

    const code = `
    <div class="w-full flex justify-between items-center shadow border border-gray-300 rounded">
        <div class="w-1/2">
            <img class="w-full" src="https://i.postimg.cc/mZH5YSvN/Welcome.png" alt="imagen welcome" />
        </div>
        <form class="bg-purple-700 w-1/2 px-5 py-10">
            <h2 class="text-white font-bold text-4xl pb-5">Welcome!</h2>
            <div class="w-full flex items-center bg-white mb-5 rounded-3xl justify-between px-3 py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                </svg>
                <input type="text" placeholder="Your name" required class="w-full ms-2 rounded-2xl border-0"/>
            </div>
            <div class="w-full flex items-center bg-white mb-5 rounded-3xl justify-between px-3 py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <input type="email" placeholder="Your email" required class="w-full ms-2 rounded-2xl border-0"/>
            </div>
            <div class="w-full flex items-center bg-white mb-5 rounded-3xl justify-between px-3 py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                </svg>
                <input type="password" placeholder="password" required class="w-full ms-2 rounded-2xl border-0"/>
            </div>
            <div class="flex justify-between">
                <button class="font-bold bg-gradient-to-r from-orange-500 to-yellow-300 px-3 py-1.5 rounded-3xl">Create account</button>
                <button class="text-white font-bold px-4 py-1.5 rounded-3xl border border-white">Sign in</button>
            </div>
        </form>
    </div>
    `;
    return (
        <ComponentCardAndCode>
            <div className="w-full flex flex-wrap md:flex-nowrap justify-between items-center shadow border border-gray-300 rounded">
               <div className="w-full md:w-1/2">
                <img className="w-full" src="https://i.postimg.cc/mZH5YSvN/Welcome.png" alt="imagen welcome" />
               </div>
                <form className="bg-purple-700 w-full md:w-1/2 px-5 py-10">
                    <h2 className="text-white font-bold text-4xl pb-5">Welcome!</h2>
                    <div className="w-full flex items-center bg-white mb-5 rounded-3xl justify-between px-3 py-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                        <input type="text" placeholder="Your name" required className="w-full ms-2 rounded-2xl border-0"/>
                    </div>
                    <div className="w-full flex items-center bg-white mb-5 rounded-3xl justify-between px-3 py-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        <input type="email" placeholder="Your email" required className="w-full ms-2 rounded-2xl border-0"/>
                    </div>
                    <div className="w-full flex items-center bg-white mb-5 rounded-3xl justify-between px-3 py-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                        </svg>
                        <input type="password" placeholder="password" required className="w-full ms-2 rounded-2xl border-0"/>
                    </div>
                    <div className="flex justify-between">
                        <button className="font-bold bg-gradient-to-r from-orange-500 to-yellow-300 px-3 py-1.5 rounded-3xl">Create account</button>
                        <button className="text-white font-bold px-4 py-1.5 rounded-3xl border border-white">Sign in</button>
                    </div>
                </form>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default FormWelcome;