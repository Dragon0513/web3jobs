import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../PageContainer";
import {
    COMPANY_NAME,
    COMPANY_URL,
    JOBS_URL,
    JOB_DESCRIPTION,
    JOB_TITLE,
    COMPANY_ICON_URL,
    COMPANIES_URL,
    JOB_APPLICATION_URL,
    REFER_URL
} from "@constants/";
import { makeFriendlyUrl } from "@util/sanitize";
import { getLinkCard } from "@util/genLinkCard";
import { getJobAndCompanyFromId } from "@db/";

const JobItemPage = job => {
    const [currJob, setJob] = useState(job);
    const [currCompany, setCompany] = useState(job?.location?.state?.job?.companies || {
        cApplicationUrl: '',
        cDescription: '',
        cEmail: '',
        cFeatured: false,
        cIconUrl: '',
        cId: -1,
        cName: '',
        cUrl: '',
        created_at: '',
    });

    const headerInfo = {
        title: `Web3 ${currJob[JOB_TITLE]}`,
        imageURL: (currCompany[COMPANY_ICON_URL]),
        description: `Web3 Job: ${currJob[JOB_DESCRIPTION]}`
    }

    useEffect(() => {
        populateData().catch(console.error)
    }, []);

    const populateData = async () => {
        if (job?.location?.state?.job) {
            setJob(job.location.state.job)
            setCompany(job.location.state.job.companies)
        }
        else {
            const id = job.match.params.jid;
            let { data: jobAndCompany, error } = await getJobAndCompanyFromId(id);
            setJob(jobAndCompany[0])
            setCompany(jobAndCompany[0].companies)
        }

        // TODO NEED TO IMPLEMENT!
        // setIsLoading(false);
    }

    const generateLinkURL = () => {
        return `${COMPANIES_URL}/${makeFriendlyUrl(currCompany[COMPANY_NAME])}`
    }

    const genUrlWithRefer = () => {
        return `${currJob[JOB_APPLICATION_URL]}${REFER_URL}`;
    }

    const getContent = () => {
        return (
            <div className="bg-gray-50 overflow-hidden">
                {getLinkCard(headerInfo)}
                <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
                    <div className="text-base max-w-prose mx-auto lg:max-w-none text-white">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Work with us at {currCompany[COMPANY_NAME]}</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            {currJob[JOB_TITLE]}
                        </p>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start ">
                        <div className="relative z-10">
                            <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none text-white">
                                {currJob[JOB_DESCRIPTION]}
                            </div>
                            <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                                <div className="rounded-md shadow">
                                    <a href={genUrlWithRefer()}>
                                        <button
                                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Apply
                                        </button>
                                    </a>
                                </div>
                                <div className="rounded-md shadow ml-4">
                                    <Link to={JOBS_URL}>
                                        <button
                                            className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                                        >
                                            Back To Jobs
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* THE PICTURE PART */}
                        <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none shadow-2xl">
                            <blockquote className="relative bg-white rounded-lg shadow-lg">
                                <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                                    <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-indigo-600 sm:text-4xl"> {`${currCompany[COMPANY_NAME]}`}</h3>
                                    <div className="relative text-lg text-gray-700 font-medium mt-8">
                                        <p className="relative">
                                            🔗 <a href={`${currCompany[COMPANY_URL]}`}>{currCompany[COMPANY_URL]}</a>
                                        </p>
                                        {/* <p>
                                            🐦 twitter@
                                        </p> */}
                                    </div>
                                    <div className="pt-5">
                                        <a href={genUrlWithRefer()}>
                                            <button className="hidden w-full lg:block items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                Apply
                                            </button>
                                        </a>
                                    </div>
                                    <div className="pt-5">
                                        <Link to={{ pathname: generateLinkURL(currCompany), state: { company: currCompany } }} >
                                            <button className="hidden w-full lg:block items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-light hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                                All {currCompany[COMPANY_NAME]} Jobs
                                            </button>
                                        </Link>
                                    </div>

                                </div>
                                <cite className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                                    <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                                        <img
                                            className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                                            src={currCompany[COMPANY_ICON_URL]}
                                            alt={currCompany[COMPANY_NAME]}
                                        />
                                    </div>
                                    <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                                        <p className="text-white font-semibold sm:inline">{currJob[JOB_TITLE]}</p>{' '}
                                        {/* <p className="sm:inline">at {cName}</p> */}
                                    </span>
                                </cite>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        PageContainer(getContent(), { isShown: false })
    )
};

export default JobItemPage;
