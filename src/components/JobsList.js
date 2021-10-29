
import { Link } from "react-router-dom";
import { capitalize, makeFriendlyUrl } from "@util/sanitize";
import {
    COMPANY_NAME,
    JOBS_URL,
    JOB_DATE_POSTED,
    JOB_DESCRIPTION,
    JOB_ID,
    JOB_TITLE
} from "@constants/";

// function that will destructure the job object
// it pulls out the title, id and company name to be used in the URL
const generateLinkURL = job => {
    const { [JOB_TITLE]: title, [JOB_ID]: id, companies: { [COMPANY_NAME]: cName } } = job;
    return `${JOBS_URL}/${makeFriendlyUrl(title)}-${makeFriendlyUrl(cName)}/${id}`
}

const JobsList = ({ jobs, isLoading, tag }) => {
    return (
        <div>
            <div
                className={`p-2 flex-grow grid gap-2 ${jobs.length ? "auto-rows-min" : ""
                    } grid-cols-1 h-2/3 first:mt-8`}
            >
                {jobs.length ? (
                    jobs.map((job) => (
                        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6" key={job[JOB_ID]} >
                            <Link to={{ pathname: generateLinkURL(job), state: { job } }}><h1 className="text-lg leading-6 font-medium text-gray-900">Job Title: {job[JOB_TITLE]}</h1></Link>
                            <p className="mt-1 text-sm text-gray-500">Created: {new Date(job[JOB_DATE_POSTED]).toDateString()}</p>
                            <p className="mt-1 text-sm text-gray-500">Description: {job[JOB_DESCRIPTION]}</p>
                        </div>
                    ))
                ) : (
                    <span className={"h-full flex justify-center items-center"}>
                        {isLoading ? 'Loading...' : `There are no ${capitalize(tag)} jobs yet!`}
                    </span>
                )}
            </div>
        </div>
    );
}

export default JobsList;