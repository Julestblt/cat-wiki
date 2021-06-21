import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import BreedDetails from "./screens/BreedDetailsScreen";
import SearchDetails from "./screens/SearchDetails"

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={'/search/:name'}>
                    <SearchDetails/>
                </Route>
                <Route exact path={"/breed/:name"}>
                    <BreedDetails/>
                </Route>
                <Route path={"/"}>
                    <HomeScreen/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
