import { supabase } from "../api";
import {
    POST_JOB_TABLE
} from "@constants/";
import { TIER_FREE, TIER_POPULAR } from "@config/constants";

export const postAJob = jobData => {
    const {priceSelection: planTier,
         description: jobDescription,
         contactEmail, 
         companyName,
         jobTitle,
         applicationURL,

        } = jobData
    const planPrice = planTier === TIER_POPULAR ? 299 : planTier === TIER_FREE ? 0 : 499;

    return  supabase
        .from(POST_JOB_TABLE)
        .insert([
            { planTier, planPrice, jobDescription, contactEmail, companyName, jobTitle, applicationURL  }
        ])
}