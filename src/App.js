import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CodePage from "./pages/CodePage";
import BlogPage from "./pages/BlogPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/code">
              <CodePage />
            </Route>
            <Route path="/blog">
              <BlogPage />
            </Route>
            <Route path="/" exact>
              <HomePage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
