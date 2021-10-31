import { supabase } from "../api";
import {
    JOBS_TABLE,
    COMPANY_TABLE
} from "@constants/";

/**
 * function to get all from the Table passed in
 * @param table - Table to pull from!
 * @returns Array full of all objects from the given table
 */
export const getAll = table => {
    return supabase
        .from(table)
        .select("*");
}

/**
 * function to get all jobs AND the company associated with it
 * @returns Array with all Jobs + Company linked to them
 */
 export const getAllJobsAndLinkedCompanies = () => {
    return supabase
        .from(JOBS_TABLE)
        .select(`
        *,
        ${COMPANY_TABLE}(
            *
        )
    `);
}