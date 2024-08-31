import React from 'react'

const Footer = () => {
  return (
    <div className='mt-auto '>
    <footer className=  "  bg-white  dark:bg-gray-900 w-full ">
        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-md">
                <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                    Want us to email you with the latest blockbuster news?
                </strong>

                <form className="mt-6">
                    <div className="relative max-w-lg">
                        <label className="sr-only" htmlFor="email"> Email </label>
                        <input
                            className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                            id="email" type="email" placeholder="john@doe.com" />
                        <button
                            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
                <div className="mx-auto max-w-sm lg:max-w-none">
                    <p className="mt-4 text-center text-gray-500 lg:text-left lg:text-lg dark:text-gray-400">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet
                        aut perferendis distinctio iusto repudiandae, provident velit earum?
                    </p>

                    <div className="mt-6 flex justify-center gap-4 lg:justify-start">
                        {/* Social Media Icons */}
                        <span className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                              target="_blank" rel="noreferrer">
                            <span className="sr-only"> Facebook </span>
                            <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd"
                                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                      clipRule="evenodd" />
                            </svg>
                        </span>
                        {/* Other social media icons */}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
                    <div>
                        <strong className="font-medium text-gray-900 dark:text-white"> Services </strong>
                        <ul className="mt-6 space-y-1">
                            {/* List of services */}
                        </ul>
                    </div>

                    <div>
                        <strong className="font-medium text-gray-900 dark:text-white"> About </strong>
                        <ul className="mt-6 space-y-1">
                            {/* List of about items */}
                        </ul>
                    </div>

                    <div>
                        <strong className="font-medium text-gray-900 dark:text-white"> Support </strong>
                        <ul className="mt-6 space-y-1">
                            {/* List of support items */}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
                <p className="text-center text-xs/relaxed text-gray-500 dark:text-gray-400">
                    © Company 2024. All rights reserved.
                    <br />
                    Created with
                    <span className="text-gray-700 underline transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">Laravel</span>
                    and
                    <span className="text-gray-700 underline transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">Laravel Livewire</span>.
                </p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
