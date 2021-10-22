import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { COMPANY_NAME, JOB_ID, JOB_TITLE } from "../lib/constants";

import { getAllJobsAndCompaniesInReverseDate} from "../lib/database";
import { removeWhiteSpace } from "../util/rmSpace";

const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [errorText, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchJobs().catch(console.error);
    }, []);

    // function to pull the data from the DB
    const fetchJobs = async () => {
        let { data: jobs, error } = await getAllJobsAndCompaniesInReverseDate();
        if (error) setError(error);
        else {
            setJobs(jobs)
            setIsLoading(false);
        };
    };

    // function that will destructure the job object
    // it pulls out the title, id and company name to be used in the URL
    const generateLinkURL = job => {
        const {[JOB_TITLE]: title, [JOB_ID]: id, companies: {[COMPANY_NAME]: cName}} = job;
        return `/web3-jobs/${removeWhiteSpace(title)}-${removeWhiteSpace(cName)}/${id}`
    }

    return (
        <div>
            <div className={"w-screen fixed flex flex-col min-h-screen bg-gray-50"}>
                <header
                    className={
                        "flex justify-between items-center px-4 h-16 bg-gray-900"
                    }
                >
                    <span
                        className={
                            "text-2xl sm:text-4xl text-white border-b font-sans"
                        }
                    >
                        All Jobs Screen
                    </span>
                </header>
                <div
                    className={"flex flex-col flex-grow p-4"}
                    style={{ height: "calc(100vh - 11.5rem)" }}
                >
                    <div
                        className={`p-2 border flex-grow grid gap-2 ${jobs.length ? "auto-rows-min" : ""
                            } grid-cols-1 h-2/3 overflow-y-scroll first:mt-8`}
                    >
                        {jobs.length ? (
                            jobs.map((job) =>(
                                <div key={job.jobId}>
                                    {/* // TODO: Fix the Company Name path  */}
                                    <Link to={{pathname:generateLinkURL(job), state:{job:job}}}><h1>Job Title: {job.jobTitle}</h1></Link>
                                    <p>Created: {new Date(job.jobDatePosted).toDateString()}</p>
                                    <p>Description: {job.jobDescription}</p>
                                </div>
                            ))
                        ) :(
                            <span
                                className={
                                    "h-full flex justify-center items-center"
                                }
                            >
                                {isLoading ? 'Loading...' : 'You do have any jobs yet!'}
                            </span>
                        )}
                    </div>
                    {!!errorText && (
                        <div
                            className={
                                "border max-w-sm self-center px-4 py-2 mt-4 text-center text-sm bg-red-100 border-red-300 text-red-400"
                            }
                        >
                            {errorText}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AllJobs;