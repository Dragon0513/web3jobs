import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../PageContainer";
import { getLinkedJobs } from "@db/";
import {
    COMPANIES_URL,
    COMPANY_DESCRIPTION,
    COMPANY_ID,
    COMPANY_NAME,
    COMPANY_URL
} from "@constants/";
import JobsList from "../JobsList";

const CompanyPage = company => {
    const [linkedJobs, setJobs] = useState([]);
    const [errorText, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    const {
        location: {
            state: {
                company: {
                    [COMPANY_NAME]: cName,
                    [COMPANY_DESCRIPTION]: cDesc,
                    [COMPANY_URL]: cUrl,
                    [COMPANY_ID]: cId
                }
            }
        }
    } = company;

    useEffect(() => {
        getJobs().catch(console.error);
    }, []);

    const getJobs = async () => {
        let { data: linkedJobs, error } = await getLinkedJobs(cId);
        if (error) setError(error);
        else {
            setJobs(linkedJobs)
            setIsLoading(false);
        };
    };

    const getContent = () => {
        return (
            <div>
                <p>Description: {`${cDesc}`}</p>
                <p>Website: {`${cUrl}`}</p>
                <Link to={COMPANIES_URL}>Back to All Companies</Link>
                <h1>Current jobs 👇</h1>
                <JobsList jobs={linkedJobs} isLoading />
            </div>
        )
    }

    return (
        PageContainer(getContent(), cName, cDesc)
    );
};

export default CompanyPage;
