import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    navigator.serviceWorker
      .getRegistrations()
      .then((responses) => responses.forEach((response) => response.update()));
  }, [location.pathname]);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={"/"} exact>
          Home version.74
        </Route>
        <Route path={"/about"} exact>
          About version.74
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
