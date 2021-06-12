import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.scss";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import Services from "./pages/Services";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/caseStudies" component={CaseStudies} />
          <Route exact path="/services/web" component={Services} />
          <Route exact path="/services/software" component={Services} />
          <Route exact path="/services/hardware" component={Services} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
