import { Link } from "react-router-dom";
import PageContainer from "../PageContainer";
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

    const getContent = () => {
        return (
            <div>
                <p>Description: {`${jDesc}`}</p>
                <p>Apply URL: {`${cAppUrl}`}</p>
                <Link to={JOBS_URL}>Back to All Jobs</Link>
                <p>
                    {/*UPDATE THIS URL PATH TO POINT TO COMPANY PAGE*/}
                    <Link to={COMPANY_URL}>More jobs with {`${cName}`}</Link>
                </p>
            </div>
        )
    }

    return (
        PageContainer(getContent(), jTitle, jDesc)
    )
};

export default JobItemPage;
