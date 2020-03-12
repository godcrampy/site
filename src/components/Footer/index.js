import React, { Component } from "react";
import ReactGA from "react-ga";

import "./Footer.scss";

import github from "../../assets/icons/github.svg";
import instagram from "../../assets/icons/instagram.svg";
import dev from "../../assets/icons/dev-dot-to.svg";
import gmail from "../../assets/icons/gmail.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import twitter from "../../assets/icons/twitter.svg";

class Footer extends Component {
  render() {
    return (
      <footer className=" footer Footer">
        <a href="https://github.com/godcrampy">
          <img alt="icon" src={github}></img>
        </a>
        <a href="https://dev.to/godcrampy">
          <img alt="icon" src={dev}></img>
        </a>
        <a href="https://instagram.com/sahil.bondre">
          <img alt="icon" src={instagram}></img>
        </a>
        <a href="mailto:sahilbondre@gmail.com">
          <img alt="icon" src={gmail}></img>
        </a>
        <a href="https://www.linkedin.com/in/sahil-bondre-571a8416a/">
          <img alt="icon" src={linkedin}></img>
        </a>
        <a href="https://twitter.com/godcrampy">
          <img alt="icon" src={twitter}></img>
        </a>
        <br />
        <p>
          Icons by <a href="https://icons8.com">icons8</a>
        </p>
        <p>
          This website is{" "}
          <a
            onClick={() => {
              ReactGA.event({
                category: "Outgoing",
                action: "Clicked on github repo link"
              });
            }}
            href="https://github.com/godcrampy/site"
          >
            open sourced{" "}
            <span role="img" aria-label="heart">
              💖
            </span>
            .
          </a>
        </p>
      </footer>
    );
  }
}

export default Footer;
