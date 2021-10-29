import { Popover } from '@headlessui/react'
import {
    HOME_LINK,
    COMPANIES_LINK,
    JOBS_LINK,
    POST_JOB_LINK,
    COMPANIES_URL,
    JOBS_URL,
    POST_A_JOB_URL
} from "@constants/";
import { genLinks, genLink } from '@util/';

const linkData = [
    { linkText: HOME_LINK, path: '/' },
    { linkText: COMPANIES_LINK, path: COMPANIES_URL },
    { linkText: JOBS_LINK, path: JOBS_URL }
]

const linkStyle = "text-base text-2xl font-medium text-white hover:text-white";

export default function Header() {
    return (
        <header className="bg-gray-dark">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
                    <div className="flex items-center">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-10 w-auto"
                                src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                                alt=""
                            />
                        </a>
                        <div className="hidden ml-10 space-x-8 lg:block">
                            {genLinks(linkData, linkStyle)}
                        </div>
                    </div>
                    <div className="ml-10 space-x-4">
                        {genLink(
                            POST_JOB_LINK,
                            POST_A_JOB_URL,
                            "ml-8 inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base text-2xl font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        )}
                    </div>
                </div>
                <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
                    {genLinks(linkData, linkStyle)}
                </div>
            </nav>
        </header>
    )
}
