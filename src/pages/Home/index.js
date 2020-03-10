import React, { Component } from "react";

import "./HomePage.scss";
import Stack from "../../components/Stack";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div id="jumbo">
          <h1 className="title">
            {/* <img src={wave} alt="wave"></img> */}
            Hey, I'm Sahil
          </h1>
          <h2 className="subtitle">I design and build software of all kinds</h2>
        </div>
        <Stack />
      </div>
    );
  }
}

export default HomePage;
