import { supabase } from "./api";
import {
    JOBS_TABLE,
    JOBS_POST_TABLE,
    COMPANY_TABLE,
    PRICE_TABLE,
    JOB_TITLE,
    JOB_DATE_POSTED,
    COMPANY_NAME,
} from "./constants";

//*********JOBS SECTION
export const getAllJobs = () => {
    return supabase
        .from(JOBS_TABLE)
        .select("*");
}

// function to get all the jobs in reverse chronology
// ie. newest first ;) 
export const getAllJobsInReverseDate = () => {
    return getAllJobs().order(JOB_DATE_POSTED, { ascending: false });
}

export const getAllLinkedCompanies = () => {
    return supabase
        .from(JOBS_TABLE)
        .select(`
        ${COMPANY_TABLE}(
            *
        )`)
}

//*********END OF JOBS SECTION
