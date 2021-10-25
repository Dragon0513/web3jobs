// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";
// import Home from "./pages/HomePage";
// import About from './pages/AboutPage';
// import Companies from './pages/AllCompaniesPage';
// import PostAJob from './pages/PostAJobPage';
// import AllJobs from './pages/AllJobsPage';
// import JobPage from './JobPage';
// import NotFound from './pages/NotFoundPage';
// import CompanyPage from './CompanyPage';
// import {
//     ABOUT_URL,
//     COMPANIES_URL,
//     COMPANY_PAGE_URL,
//     JOBS_URL,
//     JOB_PAGE_URL,
//     POST_A_JOB_URL
// } from "../lib/constants";

// const NavBar = () => {
//     return (
//         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//             <Router>
//                 <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
//                     <ul className="flex">
//                         <li className="flex-1 mr-2">
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li className="flex-1 mr-2">
//                             <Link to={ABOUT_URL}>About</Link>
//                         </li>
//                         <li className="flex-1 mr-2">
//                             <Link to={COMPANIES_URL}>Companies</Link>
//                         </li>
//                         <li className="flex-1 mr-2">
//                             <Link to={POST_A_JOB_URL}>Post A Job</Link>
//                         </li>
//                         <li className="flex-1 mr-2">
//                             <Link to={JOBS_URL}>Jobs</Link>
//                         </li>
//                     </ul>
//                 </nav>
//                 <Switch>
//                     <Route exact path={ABOUT_URL}>
//                         <About />
//                     </Route>
//                     <Route path={COMPANY_PAGE_URL} component={CompanyPage} />
//                     <Route exact path={COMPANIES_URL}>
//                         <Companies />
//                     </Route>
//                     <Route exact path={POST_A_JOB_URL}>
//                         <PostAJob />
//                     </Route>

//                     {/* 
//                 TODO: Implement
//                 <Route>
//                     <NotFound />
//                 </Route> 
//                 */}
//                     <Route path={JOB_PAGE_URL} component={JobPage} />
//                     <Route path={JOBS_URL}>
//                         <AllJobs />
//                     </Route>
//                     <Route path="/">
//                         <Home />
//                     </Route>
//                 </Switch>
//             </Router>
//         </div>
//     );


// }
// export default NavBar;