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
            <a className="navbar-item" href="https://bulma.io">
              <h1 className="title" id="brand">
                Sahil Bondre
              </h1>
            </a>

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
              <Link to="/" className="navbar-item">
                code
              </Link>
              <Link to="/" className="navbar-item">
                blog
              </Link>
              <Link to="/" className="navbar-item">
                timeline
              </Link>
              <Link to="/" className="navbar-item">
                whoami
              </Link>
            </div>
          </div>
        </nav>
      </nav>
    );
  }
}

export default Navbar;
