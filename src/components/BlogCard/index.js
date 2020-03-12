import React, { Component } from "react";
import ReactGA from "react-ga";

import "./BlogCard.scss";

class BlogCard extends Component {
  render() {
    return (
      <div className="BlogCard">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-3">
                  <a
                    onClick={() =>
                      ReactGA.event({
                        category: "Outgoing",
                        action: "Clicked on Blog Link",
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
                    <span class="tag">{e}</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogCard;
