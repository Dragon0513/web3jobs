import { useState, useEffect } from "react";
import { getAllJobsAndCompaniesInReverseDate } from "../lib/db";
import { isEmpty } from "../util";
import JobsList from "./JobsList";


const AllJobs = passedInJobs => {
    const [jobs, setJobs] = useState([]);
    const [errorText, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isEmpty(passedInJobs)) fetchJobs().catch(console.error);
        else setJobs(passedInJobs);
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

    return (
        <div>
            <div className={"w-screen fixed flex flex-col min-h-screen bg-gray-50"}>
                <header
                    className={
                        "flex justify-between items-center px-4 h-16 bg-gray-900"
                    }
                >
                    <span className={"text-2xl sm:text-4xl text-white border-b font-sans"}>
                        All Jobs Screen
                    </span>
                </header>

                <JobsList jobs={jobs} isLoading={isLoading} />

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
    );
}

export default AllJobs;