import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          Home version.70
        </Route>
        <Route path={"/about"} exact>
          About version.70
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
