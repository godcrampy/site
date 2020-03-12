import React, { Component } from "react";
import ReactGA from "react-ga";

import "./ProjectCard.scss";

class ProjectCard extends Component {
  render() {
    return (
      <div className="ProjectCard">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-3">
                  <a
                    onClick={() =>
                      ReactGA.event({
                        category: "Outgoing",
                        action: "Clicked on Project Link",
                        label: this.props.link
                      })
                    }
                    href={this.props.link}
                  >
                    {this.props.title}
                  </a>
                </p>
                <p>
                  {this.props.tags.map(e => (
                    <span class={`${e[1]} tag is-light`}>{e[0]}</span>
                  ))}
                </p>
              </div>
            </div>
            <div class="content">{this.props.content}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
