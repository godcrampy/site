import React, { Component } from "react";

import "./HomePage.scss";
import Stack from "../../components/Stack";
import { Link } from "react-router-dom";

import wave from "../../assets/icons/wave.png";
import MailBox from "../../components/MailBox";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div id="jumbo">
          <img src={wave} alt="wave"></img>
          <h1 className="title serif">Hey, I'm Sahil</h1>
          <h2 className="subtitle">Web and Mobile Engineer</h2>
          <div className="linkbar">
            <Link to="/code">projects</Link>
            <Link to="/blog">blog</Link>
            <Link to="/time">timeline</Link>
            <Link to="/whoami">whoami</Link>
          </div>
          <center>
            <MailBox />
          </center>
        </div>
        <Stack />
      </div>
    );
  }
}

export default HomePage;
