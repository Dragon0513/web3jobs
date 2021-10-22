import { supabase } from "./api";
import {
    JOBS_TABLE,
    JOBS_POST_TABLE,
    COMPANY_TABLE,
    PRICE_TABLE,
    JOB_TITLE,
    JOB_DATE_POSTED,
    COMPANY_NAME,
    JOB_ID,
} from "./constants";

//*********JOBS SECTION

/**
 * function to get all the jobs
 * @returns Array full of all job objects
 */
export const getAllJobs = () => {
    return supabase
        .from(JOBS_TABLE)
        .select("*");
}

/**
 * function to get all the jobs in reverse chronology
 * ie. newest first ;) 
 * @returns Array full of all job objects
 */
export const getAllJobsInReverseDate = () => {
    return getAllJobs().order(JOB_DATE_POSTED, { ascending: false });
}

/**
 * function to get all companies that are assocaited with a job
 * @returns Array full of all Jobs and All companies
 */
export const getAllLinkedCompanies = () => {
    return supabase
        .from(JOBS_TABLE)
        .select(`
        ${COMPANY_TABLE}(
            *
        )`)
}

/**
 * function to get a specific job AND the company associated with it
 * @param {int} jobId 
 * @returns Array with a Job + Company object
 */
export const getJobAndCompanyFromId = jobId => {
    return supabase
        .from(JOBS_TABLE)
        .select(`
        *,
        ${COMPANY_TABLE}(
            *
        )
    `)
        .match({ [JOB_ID]: jobId })
}

//*********END OF JOBS SECTION
