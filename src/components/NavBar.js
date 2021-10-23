import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Home";
import About from './About';
import Companies from './Companies';
import PostAJob from './PostAJob';
import AllJobs from './AllJobs';
import JobPage from './JobPage';
import NotFound from './NotFound';
import CompanyPage from './CompanyPage';
import {
    ABOUT_URL,
    COMPANIES_URL,
    COMPANY_PAGE_URL,
    JOBS_URL,
    JOB_PAGE_URL,
    POST_A_JOB_URL
} from "../lib/constants";

const NavBar = () => {
    return (
        <div className="min-w-full min-h-screen flex bg-gray-200">
            <Router>
                <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                    <ul className="flex">
                        <li className="flex-1 mr-2">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="flex-1 mr-2">
                            <Link to={ABOUT_URL}>About</Link>
                        </li>
                        <li className="flex-1 mr-2">
                            <Link to="/web3-companies">Companies</Link>
                        </li>
                        <li className="flex-1 mr-2">
                            <Link to="/post-web3-job">Post A Job</Link>
                        </li>
                        <li className="flex-1 mr-2">
                            <Link to="/web3-jobs">Jobs</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>

                    <Route exact path={ABOUT_URL}>
                        <About />
                    </Route>
                    <Route path={COMPANY_PAGE_URL} component={CompanyPage} />
                    <Route exact path={COMPANIES_URL}>
                        <Companies />
                    </Route>
                    <Route exact path={POST_A_JOB_URL}>
                        <PostAJob />
                    </Route>

                    {/* 
                TODO: Implement
                <Route>
                    <NotFound />
                </Route> 
                */}
                    <Route path={JOB_PAGE_URL} component={JobPage} />
                    <Route path={JOBS_URL}>
                        <AllJobs />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );


}
export default NavBar;