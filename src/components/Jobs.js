import { useState, useEffect } from "react";
import { sampleJobs } from "../mockData/genJobs";
import { supabase } from "../lib/api";
import { isLocal } from "../util/local";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [errorText, setError] = useState("");

    useEffect(() => {
        fetchJobs().catch(console.error);
    }, []);

    const fetchJobs = async () => {
        let { data: jobs, error } = isLocal ? sampleJobs() :
            await supabase
                .from("jobs")
                .select("*")
                .order("id", { ascending: false });

        if (error) setError(error);
        else setJobs(jobs);
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
                            jobs.map((job) => (
                                <div>
                                    <h1 key={job.jobId}>Job Title: {job.title}</h1>
                                    <p>Created: {new Date(job.datePosted).toDateString()}</p>
                                    <p>Description: {job.description}</p>
                                </div>
                            ))
                        ) : (
                            <span
                                className={
                                    "h-full flex justify-center items-center"
                                }
                            >
                                You do have any jobs yet!
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

export default Jobs;