import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={"/"} exact>
          Home version.80
        </Route>
        <Route path={"/about"} exact>
          About version.80
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
