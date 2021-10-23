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
import NotFound from './components/NotFound';
import Footer from './components/Footer';


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

                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/web3-companies">
                        <Companies />
                    </Route>
                    <Route exact path="/post-web3-job">
                        <PostAJob />
                    </Route>

                    {/* 
                    TODO: Implement
                    <Route>
                        <NotFound />
                    </Route> 
                    */}
                    <Route path="/web3-jobs/:jtitle-:cname/:jid" component={JobPage} />
                    <Route path="/web3-jobs">
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