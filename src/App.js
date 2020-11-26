import "./App.css";
import ProjectContainer from "./components/ProjectContainer/ProjectContainer";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Contact from "./components/Contact/Contact";


//if we need to add more routes, we add them here and to the Header component if navigation is necessary directly.
function App() {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path={"/"}>
            <ProjectContainer />
          </Route>
          <Route path={"/contact"}>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
