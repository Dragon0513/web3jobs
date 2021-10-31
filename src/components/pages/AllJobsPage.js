import { useState, useEffect } from "react";
import PageContainer from "../PageContainer";
import {
    getAllJobsAndCompaniesInReverseDate,
    getJobAndCompanyFromTag
} from "@db/";
import JobsList from "../JobsList";
import {
    JOBS_URL,
    ALL_JOBS_PAGE_TITLE,
    ALL_JOBS_PAGE_SUBTITLE
} from "@config/constants";
import { loading } from "@util/loading";


const AllJobsPage = passedInTag => {
    const [jobs, setJobs] = useState([]);
    const [errorText, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchJobs().catch(console.error);
    }, []);

    const isATag = () => {
        const { location: { pathname } } = passedInTag
        return pathname.length > JOBS_URL.length;
    }

    /**
     * Starting with /web3-jobs/blockchain-jobs
     * then split -> ['', 'web3-jobs', 'cool-blockchain-jobs' ]
     * then last item -> 'cool-blockchain-jobs'
     * then slice -> 'cool-blockchain'
     * then replace -> 'cool blockchain'
     * @returns string that is just a tag
     */
    const parseURLForTag = () => {
        const { location: {
            pathname: pathname
        } } = passedInTag
        const sectioned = pathname.split('/');
        let lastItem = sectioned[sectioned.length - 1];
        lastItem = lastItem.slice(0, lastItem.length - 5);
        return lastItem.replace(/-/g, ' ');
    }

    // function to pull the data from the DB
    const fetchJobs = async () => {
        let { data: jobs, error } = isATag() ?
            await getJobAndCompanyFromTag(parseURLForTag()) :
            await getAllJobsAndCompaniesInReverseDate();
        if (error) setError(error);
        else {
            setJobs(jobs)
            setIsLoading(false);
        };
    };

    const getContent = () => {
        return (
            <div className={`${isLoading ? "" : "shadow-2xl"} overflow-hidden rounded-md`} >
                <span className={"h-full justify-center items-center"} >
                    {isLoading ? loading() : ''}
                </span>
                <JobsList jobs={jobs} isLoading={isLoading} tag={parseURLForTag()} />

                {!!errorText && (
                    <div className={"border max-w-sm self-center px-4 py-2 mt-4 text-center text-sm bg-red-100 border-red-300 text-red-400"}>
                        {errorText}
                    </div>
                )}
            </div>
        )
    }

    return (
        PageContainer(getContent(), ALL_JOBS_PAGE_TITLE, ALL_JOBS_PAGE_SUBTITLE)
    );
}

export default AllJobsPage;