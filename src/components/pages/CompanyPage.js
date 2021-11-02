import { useState, useEffect} from "react";
import PageContainer from "../PageContainer";
import { getLinkedJobs } from "@db/";
import {
    COMPANY_DESCRIPTION,
    COMPANY_ID,
    COMPANY_NAME,
    COMPANY_URL
} from "@constants/";
import JobsList from "../JobsList";
import { COMPANY_APPLICATION_URL, COMPANY_ICON_URL } from "@config/constants";

const CompanyPage = company => {
    const [linkedJobs, setJobs] = useState([]);
    const [errorText, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState("");

    const {
        location: {
            state: {
                company: {
                    [COMPANY_NAME]: cName,
                    [COMPANY_DESCRIPTION]: cDesc,
                    [COMPANY_URL]: cUrl,
                    [COMPANY_ID]: cId,
                    [COMPANY_ICON_URL]: cIconUrl,
                    [COMPANY_APPLICATION_URL]: cAppUrl
                }
            }
        }
    } = company;

    useEffect(() => {
        getJobs().catch(console.error);
    }, []);

    const getJobs = async () => {
        let { data: linkedJobs, error } = await getLinkedJobs(cId);
        if (error) setError(error);
        else {
            setJobs(linkedJobs)
            setIsLoading(false);
        };
    };

    const stats = [
        { name: 'You\'ll be working with', stat: 'React' },
        { name: 'Avg. Open Rate', stat: 'XX.XX%' },
        { name: 'Avg. Click Rate', stat: 'XX.XX%' },
    ]

    const cards = () => {
        return (
            <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
                <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                    {stats.map((item) => (
                        <div key={item.name} className="px-4 py-5 shadow-2xl bg-gray-light rounded-lg overflow-hidden sm:p-6">
                            <dt className="text-sm font-medium text-gray-500 truncate">{item.name}</dt>
                            <span className="mt-1 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-white text-black">
                                {item.stat}
                            </span>
                            {/* <dd className="mt-1 text-3xl font-semibold text-gray-900">{item.stat}</dd> */}
                        </div>
                    ))}
                </dl>
            </div>
        )
    }

    const formSubmission = event => {
        event.preventDefault();
        const data = {
            formName: 'formName', formEmail: email, formMessage: 'New Web3 Signup'
        }

        fetch('https://behcfjv89k.execute-api.us-east-1.amazonaws.com/default/contact', {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Api-Key': '0vSWfAWdLV38saVPNuShf9tMNzvHfEgs29PMxU9L'
            },
            body: JSON.stringify(data)
        }).then(result => {
            setEmail('')
            return true;
        }).catch(err => {
            return false;
        })
    }

    const getEmailSection = () => {
        return (
            <div className="bg-gray-800">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
                    <div className="lg:w-0 lg:flex-1">
                        <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl" id="newsletter-headline">
                            Get weekly alerts for web3 jobs at {cName} and others 👉
                        </h2>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:ml-8">
                        <form className="sm:flex" onSubmit={formSubmission}>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={email}
                                required
                                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white text-black sm:max-w-xs rounded-md"
                                placeholder="Enter your email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                                >
                                    Sign up for free
                                </button>
                            </div>
                        </form>
                        {/* <p className="mt-3 text-sm text-gray-300">
                            We care about the protection of your data. Read our{' '}
                            <a href="#" className="text-white font-medium underline">
                                Privacy Policy.
                            </a>
                        </p> */}
                    </div>
                </div>
            </div>
        )
    }

    const getContent = () => {
        return (
            <div className="relative text-white overflow-hidden">
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="text-lg max-w-prose mx-auto">
                        <h1>
                            {/* <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                                Introducing
                            </span> */}
                            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                <div><img
                                    className="inline-block h-24 w-24 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt=""
                                /></div>
                                {cName}
                            </span>
                        </h1>
                        <p className="mt-8 text-2xl text-gray-500 leading-8">
                            {cDesc}
                        </p>
                        <p className="mt-8 text-2xl text-gray-500 leading-8">
                            <p>Website: {`${cUrl}`}</p>
                        </p>
                        {cards()}
                    </div>
                    <h1 className="mt-8 text-2xl leading-8 mb-5">Current jobs 👇</h1>
                    <div className="overflow-hidden">
                        <JobsList jobs={linkedJobs} isLoading />
                    </div>
                </div>
                {getEmailSection()}
            </div>
        )
    }

    return (
        PageContainer(getContent(), {isShown: false })
    );
};

export default CompanyPage;
