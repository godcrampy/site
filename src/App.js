import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from "react-ga";

import "./App.scss";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CodePage from "./pages/CodePage";
import BlogPage from "./pages/BlogPage";
import TimelinePage from "./pages/TimelinePage";
import WhoamiPage from "./pages/WhoamiPage";
import LostPage from "./pages/404";
import SharePage from "./pages/SharePage";
import shareLinks from "./share";

ReactGA.initialize("UA-160443909-1");
ReactGA.pageview(window.location.pathname + window.location.search);

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
            <Route path="/time">
              <TimelinePage />
            </Route>
            <Route path="/whoami" exact>
              <WhoamiPage />
            </Route>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route
              path="/s/:link"
              render={props => {
                const link = props.match.params.link;
                if (link in shareLinks) {
                  return <SharePage {...props} data={shareLinks[link]} />;
                }
                return <LostPage />;
              }}
            />
            <Route path="/">
              <LostPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
