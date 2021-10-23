import { supabase } from "../api";
import {
    TAGS_TABLE
} from "../constants";

//*********TAGS SECTION

/**
 * function to get all the jobs
 * @returns Array full of all job objects
 */
 export const getAllTags = () => {
    return supabase
        .from(TAGS_TABLE)
        .select("*");
}

//*********END OF TAGS SECTION