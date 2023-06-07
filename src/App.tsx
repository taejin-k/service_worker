import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={"/"} exact>
          Home version.44
        </Route>
        <Route path={"/about"} exact>
          About version.44
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
