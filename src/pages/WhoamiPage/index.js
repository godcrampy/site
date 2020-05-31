import React, { Component } from "react";
import ReactGA from "react-ga";

import "./WhoamiPage.scss";
import profile from "../../assets/icons/profile.png";

class WhoamiPage extends Component {
  getDay = () => {
    switch (new Date().getDay()) {
      case 1:
        return "Marvelous Monday";
      case 2:
        return "Terrific Tuesday";
      case 3:
        return "Wonderful Wednesday";
      case 4:
        return "Thoughtful Thursday";
      case 5:
        return "Fun Friday";
      case 6:
        return "Spectacular Saturday";
      default:
        return "Satisfying Sunday";
    }
  };
  render() {
    return (
      <div className="WhoamiPage">
        <h1 className="title center serif">whoami?</h1>
        <div className="columns">
          <div className="column is-one-quarter">
            <figure className="image is-128x128">
              <img className="is-rounded" src={profile} alt="profile" />
            </figure>
            <h1 className="title serif">Sahil Bondre</h1>
            <h1 className="subtitle">@godcrampy</h1>
            <p className="subtitle margin-cut">Get in touch with me!</p>
            <a href="mailto:sahilbondre@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/sahil-bondre-571a8416a/">Linkedin</a>
            <a href="https://github.com/godcrampy">Github</a>
          </div>
          <div className="column">
            <p className="enlarge">
              I am a Computer Engineering Undergraduate with proficiency in React, Redux, Node,
              MongoDB, C++, Blockchain and Flutter. I am passionate about writing clean, efficient
              and professional code. I have a good understanding of Data Structures, Algorithms and
              UI Design.
            </p>
            <div className="columns">
              <div className="column content">
                <h3 className="subtitle">Things I'm proud of</h3>
                <ul>
                  <li>
                    <h6>Runner Up, Dotslash 2020</h6>
                    <p>
                      We made <a href="https://github.com/Twelfth-Hour/notes-kitty">Notes Kitty</a>
                    </p>
                  </li>
                  <li>
                    <h6>
                      Joined <a href="https://github.com/webpack/">webpack</a>
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
            <button
              className="button is-black"
              onClick={() => {
                ReactGA.event({
                  category: "Outgoing",
                  action: "Download Resume"
                });
                window.location.href =
                  "https://github.com/godcrampy/site/raw/master/src/assets/sahil-bondre.pdf";
              }}
            >
              Here's My Resume
            </button>
            <p>Have a {this.getDay()}!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhoamiPage;
