// import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
// import { supabase } from "./lib/api";
// import Auth from "./components/Auth";
import Home from "./components/Home";
import About from './components/About';
import Companies from './components/Companies';
import PostAJob from './components/PostAJob';
import Jobs from './components/Jobs';

function App() {
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const session = supabase.auth.session();
    //     setUser(session?.user ?? null);

    //     const { data: authListener } = supabase.auth.onAuthStateChange(
    //         async (event, session) => {
    //             const currentUser = session?.user;
    //             setUser(currentUser ?? null);
    //         }
    //     );

    //     return () => {
    //         authListener?.unsubscribe();
    //     };
    // }, [user]);

    return (
        <div className="min-w-full min-h-screen flex bg-gray-200">
            <Router>
                <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                    <ul class="flex">
                        <li class="flex-1 mr-2">
                            <Link to="/">Home</Link>
                        </li>
                        <li class="flex-1 mr-2">
                            <Link to="/about">About</Link>
                        </li>
                        <li class="flex-1 mr-2">
                            <Link to="/web3-companies">Companies</Link>
                        </li>
                        <li class="flex-1 mr-2">
                            <Link to="/post-web3-job">Post A Job</Link>
                        </li>
                        <li class="flex-1 mr-2">
                            <Link to="/web3-jobs">Jobs</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/web3-companies">
                        <Companies />
                    </Route>
                    <Route path="/post-web3-job">
                        <PostAJob />
                    </Route>
                    <Route path="/web3-jobs">
                        <Jobs />
                    </Route>
                    <Route path="/">
                        {/* {!user ? <Auth /> : <Home user={user} />} */}
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;