export const REACT_APP_SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
export const REACT_APP_SUPABASE_KEY = process.env.REACT_APP_SUPABASE_KEY;

// Database tables
export const JOBS_TABLE = 'jobs';
export const COMPANY_TABLE = 'companies';
export const POST_JOB_TABLE = 'postAJob';
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
export const COMPANY_FEATURED = 'cFeatured';

// Database Tags Table
export const TAGS_TABLE = 'tags';
export const TAGS_ID = 'tagId';
export const TAGS_NAME = 'tagName';

// Database Post A Job Table
export const POST_EMAIL = 'contactEmail';
export const POST_COMPANY_NAME = 'companyName';
export const POST_JOB_TITLE = 'jobTitle';
export const POST_DESCRIPTION = 'jobDescription';
export const POST_APP_URL = 'applicationUrl';
export const POST_APP_EMAIL = 'applicationEmail';
export const POST_PLAN_TIER = 'planTier';
export const POST_PLAN_PRICE = 'planPrice';

// URL PATHS
export const COMPANIES_URL = '/web3-companies'
export const COMPANY_PAGE_URL = `${COMPANIES_URL}/:cname`
export const JOBS_URL = '/web3-jobs'
export const JOB_PAGE_URL = `${JOBS_URL}/:jtitle-:cname/:jid`
export const JOB_TAG_URL = `${JOBS_URL}/:jtag-jobs`
export const POST_A_JOB_URL = '/post-web3-job'
export const ABOUT_URL = '/about-web3-jobs'

// Nav Bar Link Text
export const HOME_LINK = 'Home'
export const COMPANIES_LINK = 'Companies'
export const JOBS_LINK = 'Jobs'
export const POST_JOB_LINK = 'Post A Job'

// Page titles and subtitles
export const COMPANIES_PAGE_TITLE = 'Web 3.0 Companies'
export const COMPANIES_PAGE_SUBTITLE = 'Subtitle text is cool shittttttttt'
export const ALL_JOBS_PAGE_TITLE = 'Web 3.0 Jobs'
export const ALL_JOBS_PAGE_SUBTITLE = 'Jobs Subtitle text is cool shittttttttt'

// Price tier
export const TIER_FREE = 'freeTier';
export const TIER_POPULAR = 'popularTier';
export const TIER_SPENCY = 'spencyTier';