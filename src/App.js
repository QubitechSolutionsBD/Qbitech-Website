import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.scss";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
import Work from "./pages/Work";
import Fitnation from "./pages/Fitnation";
import FitnationTerms from "./pages/FitnationTerms";
import FitnationPrivacy from "./pages/FitnationPrivacy";
import FitnationDownloadFile from "./pages/FitnationDownloadFile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/service/web-development" component={Service} />
          <Route
            exact
            path="/service/software-development"
            component={Service}
          />
          <Route
            exact
            path="/service/branding-and-marketing"
            component={Service}
          />
          <Route exact path="/case-studies" component={Works} />
          <Route exact path="/case-studies/:id" component={Work} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/fitnation/terms" component={FitnationTerms} />
          <Route
            exact
            path="/fitnation/privacy-policy"
            component={FitnationPrivacy}
          />
          <Route exact path="/fitnation" component={Fitnation} />
          <Route
            exact
            path="/fitnation/download"
            component={FitnationDownloadFile}
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
