import React, { Component } from "react";

import "./Navbar.scss";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { isActive: false };
  toggleActive = () => {
    this.setState({ isActive: !this.state.isActive });
    console.log(this.state);
  };
  render() {
    return (
      <nav className="Navbar">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <h1 className="title serif" id="brand">
                Sahil Bondre
              </h1>
            </Link>

            <div
              role="button"
              className={`navbar-burger ${this.state.isActive ? "is-active" : ""}`}
              onClick={this.toggleActive}
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div className={`navbar-menu ${this.state.isActive ? "is-active" : ""}`}>
            <div className="navbar-end">
              <Link to="/code" className="navbar-item">
                code
              </Link>
              <Link to="/blog" className="navbar-item">
                blog
              </Link>
              <Link to="/time" className="navbar-item">
                timeline
              </Link>
              <Link to="/whoami" className="navbar-item">
                whoami
              </Link>
              <a
                className="navbar-item"
                onClick={() => {
                  // ReactGA.event({
                  //   category: "Outgoing",
                  //   action: "Download Resume"
                  // });
                  window.location.href =
                    "https://github.com/godcrampy/site/raw/master/src/assets/sahil-bondre.pdf";
                }}
              >
                resume
              </a>
            </div>
          </div>
        </nav>
      </nav>
    );
  }
}

export default Navbar;
