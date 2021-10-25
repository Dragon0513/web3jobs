
import { Link } from "react-router-dom";
import { makeFriendlyUrl } from "@util/sanitize";
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

const JobsList = ({ jobs, isLoading }) => {
    return (
        <div
            className={"flex flex-col flex-grow p-4"}
            style={{ height: "calc(100vh - 11.5rem)" }}
        >
            <div>
                <div
                    className={`p-2 border flex-grow grid gap-2 ${jobs.length ? "auto-rows-min" : ""
                        } grid-cols-1 h-2/3 overflow-y-scroll first:mt-8`}
                >
                    {jobs.length ? (
                        jobs.map((job) => (
                            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6" key={job[JOB_ID]} >
                                <Link to={{ pathname: generateLinkURL(job), state: { job } }}><h1 className="text-lg leading-6 font-medium text-gray-900">Job Title: {job[JOB_TITLE]}</h1></Link>
                                <p>Created: {new Date(job[JOB_DATE_POSTED]).toDateString()}</p>
                                <p>Description: {job[JOB_DESCRIPTION]}</p>
                            </div>
                        ))
                    ) : (
                        <span className={"h-full flex justify-center items-center"}>
                            {isLoading ? 'Loading...' : 'You do have any jobs yet!'}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default JobsList;