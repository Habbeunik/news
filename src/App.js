import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import TopHeadlines from "./Pages/TopHeadlines";
import Search from "./Pages/Search";

import "./App.css";
import Live from "./Components/Live";
import Shortcut from "./Components/Shortcut";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Shortcut />
        <div>
          <Switch>
            <Route path="/" exact>
              <TopHeadlines />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
          </Switch>
        </div>
        <Live />
      </div>
    </BrowserRouter>
  );
}

export default App;
