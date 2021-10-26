import {
    ABOUT_URL,
    COMPANIES_URL,
    COMPANY_PAGE_URL,
    JOBS_URL,
    JOB_PAGE_URL,
    POST_A_JOB_URL,
    JOB_TAG_URL
} from "@constants/";
import {
    AboutPage,
    AllCompaniesPage,
    AllJobsPage,
    CompanyPage,
    HomePage,
    NotFoundPage,
    PostAJobPage,
    JobItemPage
} from '@pages/'

const routes = [
    {
        path: `${ABOUT_URL}`,
        component: AboutPage
    },
    {
        path: `${COMPANY_PAGE_URL}`,
        component: CompanyPage
    },
    {
        path: `${COMPANIES_URL}`,
        component: AllCompaniesPage
    },
    {
        path: `${POST_A_JOB_URL}`,
        component: PostAJobPage
    },
    {
        path: `${JOB_TAG_URL}`,
        component: AllJobsPage
    },
    {
        path: `${JOB_PAGE_URL}`,
        component: JobItemPage
    },
    {
        path: `${JOBS_URL}`,
        component: AllJobsPage
    },
    {
        path: '/',
        component: HomePage
    },
    // {
    //     path: `${}`,
    //     component: NotFoundPage
    // },
];

export default routes;