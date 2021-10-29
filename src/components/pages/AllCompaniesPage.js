import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../PageContainer";
import { getAllCompaniesInAlphabetic } from "@db/";
import {
    COMPANIES_URL,
    COMPANY_DESCRIPTION,
    COMPANY_ID,
    COMPANY_NAME,
    COMPANIES_PAGE_SUBTITLE, 
    COMPANIES_PAGE_TITLE
} from "@constants/";
import { makeFriendlyUrl } from "@util/sanitize";

const AllCompaniesPage = () => {
    const [companies, setCompanies] = useState([]);
    const [errorText, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCompanies().catch(console.error);
    }, []);

    const fetchCompanies = async () => {
        let { data: companies, error } = await getAllCompaniesInAlphabetic();
        if (error) setError(error);
        else {
            setCompanies(companies)
            setIsLoading(false);
        };
    };

    // function that will destructure the company object
    const generateLinkURL = company => {
        const { [COMPANY_NAME]: cName } = company;
        return `${COMPANIES_URL}/${makeFriendlyUrl(cName)}`
    }

    const getContent = () => {
        return (
            <div>
                <div className={`p-2 flex-grow grid gap-2 ${companies.length ? "auto-rows-min" : ""} grid-cols-1 h-2/3 first:mt-8`} >
                    {companies.length ? (
                        companies.map(company => (
                            <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6" key={company[COMPANY_ID]} >
                                <Link to={{ pathname: generateLinkURL(company), state: { company } }}>
                                    <h1 className="text-lg leading-6 font-medium text-gray-900">Company Name: {company[COMPANY_NAME]}</h1>
                                </Link>

                                <p className="mt-1 text-sm text-gray-500">Description: {company[COMPANY_DESCRIPTION]}</p>
                            </div>
                        ))
                    ) : (
                        <span className={"h-full flex justify-center items-center"} >
                            {isLoading ? 'Loading...' : 'No companies! 👀'}
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
        )
    }

    return (
        PageContainer(getContent(), COMPANIES_PAGE_TITLE, COMPANIES_PAGE_SUBTITLE)
    );
}

export default AllCompaniesPage;