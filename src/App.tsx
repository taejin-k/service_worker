import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={"/"} exact>
          Home version.49
        </Route>
        <Route path={"/about"} exact>
          About version.49
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
