import ComponentCardAndCode from "../../container/ComponentCardAndCode";
import CodeBlock from "../../code-block/CodeBlock";

const Form = () => {

    const code = `
    <div class="w-full flex justify-center py-20 px-5 md:px-0 bg-center bg-cover bg-[url('https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
        <form class="w-full md:w-1/2 flex flex-col items-center p-5 md:p-10 backdrop-filter backdrop-blur-sm shadow-2xl border border-gray-50 rounded-lg">
            <div class="bg-blue-600 w-16 h-16 rounded-full flex justify-center items-center -mt-12 md:-mt-16">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>
            <h2 class="font-extrabold text-2xl py-2">Sign in</h2>
            <div class="w-full flex items-center bg-white mb-5 rounded-md justify-between px-3 py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <input type="email" placeholder="username" required class="w-full ms-2 rounded-md"/>
            </div>
            <div class="w-full flex items-center bg-white rounded-md justify-between px-3 py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                <input type="password" placeholder="password" required class="w-full ms-2 rounded-md"/>
            </div>
            <button class="bg-blue-600 w-full text-white mt-7 rounded-md py-1.5 font-bold">Login</button>
            <div class="w-full flex flex-col md:flex-row items-center justify-between mt-5">
                <div class="text-sm text-white">
                    <input type="checkbox" />
                    <span class="ps-1">Remember me</span>
                </div>
                <a href="" class="text-sm text-white underline">forgot password</a>
            </div>
        </form>
    </div>
    `;
    return (
        <ComponentCardAndCode>
            <div className="w-full flex justify-center py-20 px-5 md:px-0 bg-center bg-cover bg-[url('https://images.pexels.com/photos/1714341/pexels-photo-1714341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                <form className="w-full md:w-1/2 flex flex-col items-center p-5 md:p-10 backdrop-filter backdrop-blur-sm shadow-2xl border border-gray-50 rounded-lg">
                    <div className="bg-blue-600 w-16 h-16 rounded-full flex justify-center items-center -mt-12 md:-mt-16">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </div>
                    <h2 className="font-extrabold text-2xl py-2">Sign in</h2>
                    <div className="w-full flex items-center bg-white mb-5 rounded-md justify-between px-3 py-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <input type="email" placeholder="username" required className="w-full ms-2 rounded-md"/>
                    </div>
                    <div className="w-full flex items-center bg-white rounded-md justify-between px-3 py-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                        <input type="password" placeholder="password" required className="w-full ms-2 rounded-md"/>
                    </div>
                    <button className="bg-blue-600 w-full text-white mt-7 rounded-md py-1.5 font-bold">Login</button>
                    <div className="w-full flex flex-col md:flex-row items-center justify-between mt-5">
                        <div className="text-sm text-white">
                            <input type="checkbox" />
                            <span className="ps-1">Remember me</span>
                        </div>
                        <a href="" className="text-sm text-white underline">forgot password</a>
                    </div>
                </form>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default Form;