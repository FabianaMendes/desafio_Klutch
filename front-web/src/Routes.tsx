import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Home from './pages/Home';


function Routes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>  
        </BrowserRouter>
    )
}

export default Routes;