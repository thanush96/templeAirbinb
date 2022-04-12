import "./App.css";
import {
  Home,
  AalayamScreen,
  SearchPage,
  Header,
  Footer,
  NotFound,
  Chackout,
  SeeAll,
} from "./GetComponents";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/services" component={AalayamScreen} />
            <Route exact path="/checkout" component={Chackout} />
            <Route exact path="/see-all" component={SeeAll} />
            <Route path="/search">
              <SearchPage />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
