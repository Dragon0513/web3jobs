import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Companies from './components/Companies';
import PostAJob from './components/PostAJob';
import AllJobs from './components/AllJobs';
import JobPage from './components/JobPage';
import CompanyPage from './components/CompanyPage';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import {
    ABOUT_URL,
    COMPANIES_URL,
    COMPANY_PAGE_URL,
    JOBS_URL,
    JOB_PAGE_URL,
    POST_A_JOB_URL
} from "./lib/constants";


function App() {
    return (
        <div className="min-w-full min-h-screen flex bg-gray-200">
            <Router>
                <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                    <ul className="flex">
                        <li className="flex-1 mr-2">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="flex-1 mr-2">
                            <Link to="/about">About</Link>
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

            <Footer />
        </div>
    );
}

export default App;