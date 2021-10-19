import { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { supabase } from "./lib/api";
import Auth from "./components/Auth";
import Home from "./components/Home";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const session = supabase.auth.session();
        setUser(session?.user ?? null);

        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                const currentUser = session?.user;
                setUser(currentUser ?? null);
            }
        );

        return () => {
            authListener?.unsubscribe();
        };
    }, [user]);

    function About() {
        return (
            <>
                <main>
                    <h2>Web 3.0 Jobs!</h2>
                </main>
            </>
        );
    }

    return (
        <div className="min-w-full min-h-screen flex items-center justify-center bg-gray-200">
            <Router>
                <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                    <ul class="flex">
                        <li class="flex-1 mr-2">
                            <Link to="/">Home</Link>
                        </li>
                        <li class="flex-1 mr-2">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        {!user ? <Auth /> : <Home user={user} />}
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;