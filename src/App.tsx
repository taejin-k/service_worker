import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={"/"} exact>
          Home
        </Route>
        <Route path={"/about"} exact>
          About
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
