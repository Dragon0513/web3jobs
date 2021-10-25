import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import routes from './config/routes';

function generateRoutes(){
    return routes.map( route => {
        return(
            <Route
                path={route.path}
                component={route.component}
                key={route.path}
            />
        )
    })
}

function App() {
    return (
        <Router>
            <Header />
            {/* <NavBar /> */}
            <Switch>
                {generateRoutes()}
            </Switch>

            <Footer />
        </Router>
    );
}

export default App;