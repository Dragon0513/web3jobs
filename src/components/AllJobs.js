import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAllJobsInReverseDate, getAllLinkedCompanies, getJobAndCompanyFromId } from "../lib/database";
import { sampleJobs } from "../mockData/genJobs";
import { isLocal } from "../util/local";
import { removeWhiteSpace } from "../util/rmSpace";

const AllJobs = ({ match }) => {
    const [jobs, setJobs] = useState([]);
    const [errorText, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchJobs().catch(console.error);
    }, []);

    const fetchJobs = async () => {
        let { data: jobs, error } = false ? sampleJobs() : await getAllJobsInReverseDate();
        let { data: companies, err } = false ? sampleJobs() : await getAllLinkedCompanies();
        let { data: filtered, er } = false ? sampleJobs() : await getJobAndCompanyFromId(1, 1)

        console.log('Jobs', jobs, err)
        console.log('companies', companies, err)
        console.log('filtered', filtered, er)
        
        if (error) setError(error);
        else {
            setJobs(jobs)
            setIsLoading(false);
        };
    };

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
                                <div key={job.jId}>
                                    {/* // TODO: Fix the Company Name path  */}
                                    <Link to={`/web3-jobs/${removeWhiteSpace(job.jobTitle)}-cbd/${job.jId}`}><h1>Job Title: {job.jobTitle}</h1></Link>
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