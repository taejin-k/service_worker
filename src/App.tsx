import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={"/"} exact>
          Home version.9
        </Route>
        <Route path={"/about"} exact>
          About version.9
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
