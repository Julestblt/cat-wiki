import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
      <Router>
        <Switch>
{/*          <Route path={"/"}>

          </Route>
          <Route path={"/"}>

          </Route>*/}
          <Route path={"/"}>
            <HomeScreen/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
