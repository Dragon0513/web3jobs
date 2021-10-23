import { useState } from "react";
import { Link } from "react-router-dom";
import { COMPANY_APPLICATION_URL, COMPANY_NAME, JOB_DESCRIPTION, JOB_TITLE } from "../lib/constants";

const JobPage = job => {
    const [isLoading, setIsLoading] = useState(true);
    // const [data, setData] = useState();

    console.log(job);

    const {
        location: {
            state: {
                job: {
                    [JOB_TITLE]: jTitle,
                    [JOB_DESCRIPTION]: jDesc,
                    companies:{
                        [COMPANY_APPLICATION_URL]: cAppUrl,
                        [COMPANY_NAME]: cName
                    }
                }
            }
        }
    } = job;

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
                        Job Title:{`${jTitle}`}
                    </span>
                </header>
                <p>
                    Description: {`${jDesc}`}
                </p>
                <p>
                    Apply URL: {`${cAppUrl}`}
                </p>

                <Link to="/web3-jobs">Back to All Jobs</Link>
                <Link to="/web3-jobs">More jobs with {`${cName}`}</Link>
            </div>
        </div>
    );
};

export default JobPage;
