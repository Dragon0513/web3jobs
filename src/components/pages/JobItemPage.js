import { Link } from "react-router-dom";
import {
    COMPANY_APPLICATION_URL,
    COMPANY_NAME,
    COMPANY_URL,
    JOBS_URL,
    JOB_DESCRIPTION,
    JOB_TITLE
} from "@constants/";

const JobItemPage = job => {
    const {
        location: {
            state: {
                job: {
                    [JOB_TITLE]: jTitle,
                    [JOB_DESCRIPTION]: jDesc,
                    companies: {
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
                <header className={"flex justify-between items-center px-4 h-16 bg-gray-900"}>
                    <span className={"text-2xl sm:text-4xl text-white border-b font-sans"}>
                        Job Title:{`${jTitle}`}
                    </span>
                </header>
                <p>
                    Description: {`${jDesc}`}
                </p>
                <p>
                    Apply URL: {`${cAppUrl}`}
                </p>

                <Link to={JOBS_URL}>Back to All Jobs</Link>
                {/*UPDATE THIS URL PATH TO POINT TO COMPANY PAGE*/}
                <Link to={COMPANY_URL}>More jobs with {`${cName}`}</Link>
            </div>
        </div>
    );
};

export default JobItemPage;
