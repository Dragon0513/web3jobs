import { supabase } from "../api";

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