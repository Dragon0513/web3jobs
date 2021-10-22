import { supabase } from "./api";
import { JOBS_TABLE, JOBS_POST_TABLE, COMPANY_TABLE, PRICE_TABLE, JOB_TITLE, JOB_DATE_POSTED } from "./constants";

//*********JOBS SECTION
export const getAllJobs = () => {
    return supabase
        .from(JOBS_TABLE)
        .select("*");
}

// function to get all the jobs in reverse chronology
// ie. newest first ;) 
export const getAllJobsInReverseDate = () => {
    return getAllJobs().order("datePosted", { ascending: false });
}

export const getCompanies = () => {
    return supabase
        .from('jobs')
        .select(`
        title,
        companies (
            companiesId
        )`)
}

//*********END OF JOBS SECTION
