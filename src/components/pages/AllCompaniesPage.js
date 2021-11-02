import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageContainer from "../PageContainer";
import {
    getAllCompaniesInAlphabetic,
    getFeaturedCompanies
} from "@db/";
import {
    COMPANIES_URL,
    COMPANY_DESCRIPTION,
    COMPANY_ID,
    COMPANY_NAME,
    COMPANIES_PAGE_SUBTITLE,
    COMPANIES_PAGE_TITLE,
    COMPANY_FEATURED,
    FEATURED_STYLE,
    REGULAR_STYLE,
    COMPANY_ICON_URL,
    FEATURED_TEXT_STYLE,
    REGULAR_TEXT_STYLE
} from "@constants/";
import { makeFriendlyUrl } from "@util/sanitize";
import { loading } from "@util/loading";
import { genListIcon } from "@util/genListIcon";

const AllCompaniesPage = () => {
    const [companies, setCompanies] = useState([]);
    const [featuredCompanies, setFeaturedCompanies] = useState([]);
    const [errorText, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchCompanies().catch(console.error);
    }, []);

    const fetchCompanies = async () => {
        let { data: companies, error } = await getAllCompaniesInAlphabetic();
        let { data: featuredCompanies, featuredError } = await getFeaturedCompanies();
        if (error || featuredError) setError(error || featuredError);
        else {
            setFeaturedCompanies(featuredCompanies)
            setCompanies(companies)
            setIsLoading(false);
        };
    };

    // function that will destructure the company object
    const generateLinkURL = company => {
        const { [COMPANY_NAME]: cName } = company;
        return `${COMPANIES_URL}/${makeFriendlyUrl(cName)}`
    }

    const genCompanies = companyData => {
        return (
            companyData.map(company => (
                <Link key={company[COMPANY_ID]} to={{ pathname: generateLinkURL(company), state: { company } }} className={`${company[COMPANY_FEATURED] ? FEATURED_STYLE : REGULAR_STYLE}`}>
                    <div className="lg:px-4 py-4 flex items-center">
                        {genListIcon(company[COMPANY_ICON_URL], "", company[COMPANY_FEATURED])}
                        <div className="flex-1 lg:pl-8 pl-5 flex items-center justify-between">
                            <div>
                                <h1 className={`${company[COMPANY_FEATURED] ? FEATURED_TEXT_STYLE : REGULAR_TEXT_STYLE}`}>{company[COMPANY_NAME]}</h1>
                                <p className="text-white lg:ml-1 flex-shrink-0 font-normal overflow-hidden">{company[COMPANY_DESCRIPTION]}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            ))
        )
    }

    const getContent = () => {
        return (
            <div className={`${isLoading ? "" : "shadow-2xl"} bg-gray-dark overflow-hidden rounded-md`}>
                <span className={"h-full justify-center items-center"} >
                    {isLoading ? loading() : ''}
                </span>
                {genCompanies(featuredCompanies)}
                {genCompanies(companies)}
                {!!errorText && (
                    <div className={"border max-w-sm self-center px-4 py-2 mt-4 text-center text-sm bg-red-100 border-red-300 text-red-400"}>
                        {errorText}
                    </div>
                )}
            </div>
        )
    }

    return (
        PageContainer(getContent(), {title: COMPANIES_PAGE_TITLE, subtitle: COMPANIES_PAGE_SUBTITLE, isShown: true})
    );
}

export default AllCompaniesPage;