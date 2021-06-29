import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.scss";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/service/web-development" component={Service} />
          <Route exact path="/service/software-development" component={Service} />
          <Route exact path="/service/hardware-development" component={Service} />
          <Route exact path="/service/branding-and-marketing" component={Service} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
