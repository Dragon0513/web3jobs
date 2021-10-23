import { useState } from "react";
import { Link } from "react-router-dom";
import {
    COMPANIES_URL,
    COMPANY_APPLICATION_URL,
    COMPANY_DESCRIPTION,
    COMPANY_NAME,
    COMPANY_URL
}
    from "../lib/constants";

const CompanyPage = company => {
    const {
        location: {
            state: {
                company: {
                    [COMPANY_NAME]: cName,
                    [COMPANY_DESCRIPTION]: cDesc,
                    [COMPANY_URL]: cUrl
                }
            }
        }
    } = company;

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
                        Company Name: {`${cName}`}
                    </span>
                </header>
                <p>
                    Description: {`${cDesc}`}
                </p>
                <p>
                    Website: {`${cUrl}`}
                </p>

                <Link to={COMPANIES_URL}>Back to All Companies</Link>
            </div>
        </div>
    );
};

export default CompanyPage;
