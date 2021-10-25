import { useState, useEffect } from "react";
import { getAllJobsAndCompaniesInReverseDate } from "@db/";
import JobsList from "../JobsList";


const AllJobsPage = passedInJobs => {
    const [jobs, setJobs] = useState([]);
    const [errorText, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    console.log('passed ', passedInJobs)

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

    return (
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div>
                <header className={"flex justify-between items-center px-4 h-16 bg-gray-900"} >
                    <span className={"text-2xl sm:text-4xl text-white border-b font-sans"}>
                        All Jobs Screen
                    </span>
                </header>

                <JobsList jobs={jobs} isLoading={isLoading} />

                {!!errorText && (
                    <div className={"border max-w-sm self-center px-4 py-2 mt-4 text-center text-sm bg-red-100 border-red-300 text-red-400"}>
                        {errorText}
                    </div>
                )}
            </div>
        </div>
    );
}

export default AllJobsPage;