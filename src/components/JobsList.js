
import { Link } from "react-router-dom";
import { capitalize, makeFriendlyUrl } from "@util/sanitize";
import {
    COMPANY_NAME,
    JOBS_URL,
    JOB_DATE_POSTED,
    JOB_ID,
    JOB_TITLE
} from "@constants/";
import { JOB_TAGS } from "@config/constants";

// function that will destructure the job object
// it pulls out the title, id and company name to be used in the URL
const generateLinkURL = job => {
    const { [JOB_TITLE]: title, [JOB_ID]: id, companies: { [COMPANY_NAME]: cName } } = job;
    return `${JOBS_URL}/${makeFriendlyUrl(title)}-${makeFriendlyUrl(cName)}/${id}`
}

const sepratetags = tags => {
    return tags.map(tag => (
        <span className="flex-1 items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
            {tag}
        </span>
    ))
}

const companyName = job => {
    const { companies: { [COMPANY_NAME]: cName } } = job;
    return cName
}

const JobsList = ({ jobs, isLoading, tag }) => {
    return (
        <div className="bg-gray-dark shadow-2xl overflow-hidden sm:rounded-md">
                {jobs.length ? (
                    jobs.map((job) => (
                        <li key={job[JOB_ID]} className="border-b-2 border-white">
                            <Link to={{ pathname: generateLinkURL(job), state: { job } }} className="text-white block px-8 py-2 hover:bg-red-800 bg-opacity-95">
                                <div className="px-4 py-4 flex items-center sm:px-6">
                                    <span className="inline-block relative">
                                        <img
                                            className="inline-block h-12 w-12 rounded-md"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <span className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400" />
                                    </span>
                                    <div className="flex-1 pl-8 flex items-center justify-between">
                                        <div className="truncate">
                                            <Link to={{ pathname: generateLinkURL(job), state: { job } }}><h1 className="font-medium text-xl text-indigo-600 hover:text-red-500 truncate">{job[JOB_TITLE]}</h1></Link>
                                            <p className="ml-1 flex-shrink-0 font-normal text-gray-500 font-medium"> {companyName(job)}</p>
                                            <p className="ml-1 flex-shrink-0 font-normal text-gray-500 ">📅 {new Date(job[JOB_DATE_POSTED]).toDateString()}</p>
                                        </div>
                                        <div className="inline-flex space-x-2 hidden lg:block">
                                            {sepratetags(job[JOB_TAGS])}
                                        </div>
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hidden lg:block"
                                        >
                                            Apply
                                        </button>
                                    </div>


                                    {/* <div className="ml-5 flex-shrink-0">
                                        <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div> */}

                                </div>
                            </Link>
                        </li>
                    ))
                ) : (
                    <span className={"h-full flex justify-center items-center"}>
                        {isLoading ? 'Loading...' : `There are no ${capitalize(tag)} jobs yet!`}
                    </span>
                )}
        </div >

    );
}

export default JobsList;