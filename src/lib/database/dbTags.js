import { supabase } from "../api";
import { getAll } from "./dbCommon";
import {
    TAGS_TABLE
} from "../constants";

//*********TAGS SECTION

/**
 * function to get all the jobs
 * @returns Array full of all job objects
 */
 export const getAllTags = () => {
    return getAll(TAGS_TABLE);
}

//*********END OF TAGS SECTION