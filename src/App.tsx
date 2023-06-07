import { useEffect } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    navigator.serviceWorker
      .getRegistrations()
      .then((responses) => responses.forEach((response) => response.update()));
  }, [location.pathname]);

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <span> |</span>
        <Link to="/about">About</Link>
      </nav>
      <Switch>
        <Route path={"/"} exact>
          Home version.75
        </Route>
        <Route path={"/about"} exact>
          About version.75
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
