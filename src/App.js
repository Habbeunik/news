import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import TopHeadlines from "./Pages/TopHeadlines";
import AllNews from "./Pages/AllNews";
import Search from "./Pages/Search";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <TopHeadlines />
          </Route>
          <Route path="/all">
            <AllNews />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
