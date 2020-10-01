import React, { Component } from "react";
import "./404.scss";
import cat from "../../assets/images/404.jpeg";
import { Link } from "react-router-dom";

class LostPage extends Component {
  render() {
    return (
      <div className="LostPage">
        <div id="jumbo">
          <h1 className="title serif">404 Uh Oh!</h1>
          <h2 className="subtitle">You seemed to have lost your way!</h2>
          <Link to="/">Take me home</Link>
          <br />

          <img src={cat} alt="cat"></img>
        </div>
      </div>
    );
  }
}

export default LostPage;
