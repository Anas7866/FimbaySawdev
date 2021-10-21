import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
// import ScrollToTop from "react-scroll-to-top";
// import Scrollrender from "./Scrollrender/Scrollrender"

function App() {
  return (
    <div className="App">
      <Router>


        {/* <ScrollToTop />
        <Scrollrender /> */}

        <Switch>

          <Route exact path="/" component={Homepage} />


        </Switch>

      </Router>
    </div>
  );
}

export default App;
