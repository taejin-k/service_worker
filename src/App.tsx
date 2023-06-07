import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={"/"} exact>
          Home version.34
        </Route>
        <Route path={"/about"} exact>
          About version.34
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
