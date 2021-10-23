export const REACT_APP_SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
export const REACT_APP_SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY;

// Database tables
export const JOBS_TABLE = 'jobs';
export const COMPANY_TABLE = 'companies';
export const JOBS_POST_TABLE = 'postAJob';
export const PRICE_TABLE = 'pricing';

// Database Jobs Table
export const JOB_ID = 'jobId';
export const JOB_DATE_POSTED = 'jobDatePosted';
export const JOB_TITLE = 'jobTitle';
export const JOB_LOCATION = 'location';
export const JOB_DESCRIPTION = 'jobDescription';
export const JOB_TAGS = 'jobTags';

// Database Companies Table
export const COMPANY_ID = 'cId';
export const COMPANY_DESCRIPTION = 'cDescription';
export const COMPANY_EMAIL = 'cEmail';
export const COMPANY_NAME = 'cName';
export const COMPANY_URL = 'cUrl';
export const COMPANY_APPLICATION_URL = 'cApplicationUrl';

// Database Tags Table
export const TAGS_TABLE = 'tags';
export const TAGS_ID = 'tagId';
export const TAGS_NAME = 'tagName';