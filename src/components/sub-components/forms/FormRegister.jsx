import ComponentCardAndCode from "../../container/ComponentCardAndCode";
import CodeBlock from "../../code-block/CodeBlock";

const FormRegister= () => {

    const code = `
    <div class="bg-gray-200 rounded-xl">
        <div class="grid grid-cols-12">
            <div class="relative col-span-5 h-full">
                <img alt="" src="https://images.pexels.com/photos/1907098/pexels-photo-1907098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="absolute inset-0 h-full w-full object-cover opacity-6 rounded-s-xl" />
            </div>
            <div class="flex items-center justify-center col-span-7 px-8">
                <div class="max-w-7xl">
                    <form class="mt-8 grid grid-cols-6 gap-6">
                        <div class="col-span-3">
                            <label for="FirstName" class="block text-sm font-medium text-gray-700">First Name</label>
                            <input type="text" id="FirstName" name="first_name" class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                        </div>
                        <div class="col-span-3">
                            <label for="LastName" class="block text-sm font-medium text-gray-700">Last Name</label>
                            <input type="text" id="LastName" name="last_name" class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                        </div>
                        <div class="col-span-6">
                            <label for="Email" class="block text-sm font-medium text-gray-700"> Email </label>
                            <input type="email" id="Email" name="email" class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                        </div>
                        <div class="col-span-3">
                            <label for="Password" class="block text-sm font-medium text-gray-700"> Password </label>
                            <input type="password" id="Password" name="password" class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                        </div>
                        <div class="col-span-3">
                            <label for="PasswordConfirmation" class="block text-sm font-medium text-gray-700">Password Confirmation</label>
                            <input type="password" id="PasswordConfirmation" name="password_confirmation" class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                        </div>
                        <div class="col-span-6">
                            <label for="MarketingAccept" class="flex gap-4">
                                <input type="checkbox" id="MarketingAccept" name="marketing_accept" class="size-5 rounded-md border-gray-200 bg-white shadow-sm" />
                                <span class="text-sm text-gray-700">
                                    I want to receive emails about events, product updates and company announcements.
                                </span>
                            </label>
                        </div>
                        <div class="col-span-6">
                            <p class="text-sm text-gray-500">
                                By creating an account, you agree to our
                                <a href="#" class="text-gray-700 underline ps-1"> terms and conditions </a>
                                and
                                <a href="#" class="text-gray-700 underline ps-1">privacy policy</a>.
                            </p>
                        </div>
                        <div class="col-span-6 mb-5">
                            <button class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none">
                                Create an account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    return (
        <ComponentCardAndCode>
            <div className="bg-gray-200 rounded-xl">
                <div className="grid grid-cols-12">
                    <div className="relative col-span-12 h-full md:col-span-5">
                        <img alt="" src="https://images.pexels.com/photos/1907098/pexels-photo-1907098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="absolute inset-0 h-full w-full object-cover opacity-6 rounded-s-xl" />
                    </div>
                    <div className="flex items-center justify-center col-span-12 px-5 md:px-8 md:col-span-7">
                        <div className="max-w-7xl">
                            <form  className="mt-8 grid grid-cols-6 gap-6">
                                <div className="col-span-3">
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" id="FirstName" name="first_name" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                                </div>
                                <div className="col-span-3">
                                    <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" id="LastName" name="last_name" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>
                                    <input type="email" id="Email" name="email" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                                </div>
                                <div className="col-span-3">
                                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>
                                    <input type="password" id="Password" name="password" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                                </div>
                                <div className="col-span-3">
                                    <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">Password Confirmation</label>
                                    <input type="password" id="PasswordConfirmation" name="password_confirmation" className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm" />
                                </div>
                                <div className="col-span-6">
                                    <label htmlFor="MarketingAccept" className="flex gap-4">
                                        <input type="checkbox" id="MarketingAccept" name="marketing_accept" className="size-5 rounded-md border-gray-200 bg-white shadow-sm" />
                                        <span className="text-sm text-gray-700">
                                            I want to receive emails about events, product updates and company announcements.
                                        </span>
                                    </label>
                                </div>
                                <div className="col-span-6">
                                    <p className="text-sm text-gray-500">
                                        By creating an account, you agree to our
                                        <a href="#" className="text-gray-700 underline ps-1"> terms and conditions </a>
                                        and
                                        <a href="#" className="text-gray-700 underline ps-1">privacy policy</a>.
                                    </p>
                                </div>
                                <div className="col-span-6 mb-5">
                                    <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none">
                                        Create an account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <CodeBlock code={code} language="htmlbars"/>
        </ComponentCardAndCode>
    )
}
export default FormRegister;