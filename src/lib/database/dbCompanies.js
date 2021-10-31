import { getAll, getAllJobsAndLinkedCompanies } from './dbCommon';
import {
    COMPANY_ID,
    COMPANY_NAME,
    COMPANY_TABLE,
    COMPANY_FEATURED
} from "@constants/";

//*********COMPANIES SECTION

/**
 * function to get all the companies
 * @returns Array full of all company objects
 */
export const getAllCompanies = () => {
    return getAll(COMPANY_TABLE);
}

/**
 * function to get all the companies in alphabetic order: A-Z
 * @returns Array full of all company objects
 */
export const getAllCompaniesInAlphabetic = () => {
    return getAllCompanies().order(COMPANY_NAME, { ascending: true }).not(COMPANY_FEATURED, 'eq', true);
}

/**
 * function to get the companies that are featured
 * @returns Array full of all company objects
 */
 export const getFeaturedCompanies = () => {
    return getAllCompanies().is(COMPANY_FEATURED, true)
}

/**
 * 
 * @param {int} companyId 
 * @returns 
 */
export const getLinkedJobs = companyId => {
    return getAllJobsAndLinkedCompanies().match({ [COMPANY_ID]: companyId });
}

//*********END OF COMPANIES SECTION