import { useState } from "react";
import { CheckCircleIcon, XIcon } from '@heroicons/react/solid'
import {HOME_PAGE_FETCH_URL, HOME_PAGE_API_KEY} from "@constants/"

export default function HomePage() {
    const [email, setEmail] = useState("");
    const [thankYouVisible, setThankYouVisible] = useState(false);


    const formSubmission = event => {
        event.preventDefault();
        const data = {
            formName: 'formName', formEmail: email, formMessage: 'New Web3 Signup'
        }
        data.formEmail.length === 0 ? console.log('Fill in the field') :
        fetch(HOME_PAGE_FETCH_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Api-Key': HOME_PAGE_API_KEY
            },
            body: JSON.stringify(data)
        }).then(result => {
            
            setThankYouVisible(true);
            setEmail("");

            return true;
        }).catch(err => {
            return false;
        })
        
    }

    const thankYou = () => {
        return (
            <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <CheckCircleIcon className="lg:h-10 h-8 lg:w-10 w-8 text-green-400" aria-hidden="true" />
                    </div>
                    <div className="ml-3">
                        <p className="lg:text-3xl text-2xl font-medium text-green-800">Thank you!</p>
                    </div>
                    <div className="ml-auto pl-3">
                        <div className="-mx-1.5 -my-1.5">
                            <button
                                type="button"
                                className="inline-flex bg-green-50 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
                                onClick={() => setThankYouVisible(false)}
                            >
                                <span className="sr-only">Dismiss</span>
                                <XIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const getEmailSection = () => {
        return (
            <form onSubmit={formSubmission} className="sm:max-w-xl sm:mx-auto lg:mx-0">
                <div className="sm:flex">
                    <div className="min-w-0 flex-1">
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                        <button
                            type="submit"
                            className="block w-full py-3 px-4 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                        >
                            Sign up for free
                        </button>
                    </div>
                </div>
            </form>
        )
    }

    return (
        <div className="relative overflow-hidden">
            <main>
                <div className="pt-10 bg-gray sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left ">
                                <div className="lg:py-24">
                                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                        <span className="block">Web3Jobs</span>
                                        <span className="block text-indigo-400">help build the decentralized web</span>
                                    </h1>
                                    <p className="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                                        Be part of the future of the web 👇
                                    </p>
                                    <div className="mt-10 sm:mt-12">
                                        {thankYouVisible ? thankYou() : getEmailSection()}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 sm:-mb-48 lg:m-0 lg:relative">
                                <div className="px-4 sm:max-w-2xl sm:px-6 ">
                                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                                    <img
                                        className="w-full md:w-auto lg:absolute lg:inset-y-0"
                                        src="https://yhsyqsnormpfxbbippdb.supabase.in/storage/v1/object/public/assets/heroimage.svg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* More main page content here... */}
            </main>
        </div>
    )
}