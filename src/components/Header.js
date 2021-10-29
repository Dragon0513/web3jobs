/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
    ChartBarIcon,
    CursorClickIcon,
    DocumentReportIcon,
    MenuIcon,
    RefreshIcon,
    ShieldCheckIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import {
    HOME_LINK,
    COMPANIES_LINK,
    JOBS_LINK,
    POST_JOB_LINK,
    COMPANIES_URL,
    JOBS_URL,
    POST_A_JOB_URL
} from "@constants/";
import {genLinks, genLink} from '@util/';

const solutions = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: ChartBarIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
    {
        name: 'Reports',
        description: 'Get detailed reports that will help you make more informed decisions ',
        href: '#',
        icon: DocumentReportIcon,
    },
]
const resources = [
    {
        name: 'Help Center',
        description: 'Get all of your questions answered in our forums or contact support.',
        href: '#',
    },
    { name: 'Guides', description: 'Learn how to maximize our platform to get the most out of it.', href: '#' },
    { name: 'Events', description: 'See what meet-ups and other events we might be planning near you.', href: '#' },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#' },
]

const linkData = [
    { linkText: HOME_LINK, path: '/' },
    { linkText: COMPANIES_LINK, path: COMPANIES_URL },
    { linkText: JOBS_LINK, path: JOBS_URL }
]

const linkStyle = "text-base text-2xl font-medium text-white hover:text-white";

export default function Header() {
    return (
        <Popover className="relative bg-gray-dark">
            <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
                <div>
                    <a href="#" className="flex">
                        <span className="sr-only">Workflow</span>
                        <img
                            className="h-8 w-auto sm:h-10"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt=""
                        />
                    </a>
                </div>
                <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                    <Popover.Group as="nav" className="flex space-x-10">
                        {genLinks(linkData, linkStyle)}
                    </Popover.Group>
                    <div className="flex items-center md:ml-12">
                        {genLink(
                            POST_JOB_LINK,
                            POST_A_JOB_URL,
                            "ml-8 inline-flex items-center justify-center px-4 py-2 rounded-md shadow-sm text-base text-2xl font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                        )}
                    </div>
                </div>
            </div>
        </Popover>
    )
}
