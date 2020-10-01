import React, { Component } from "react";

import "./SharePage.scss";

class SharePage extends Component {
  render() {
    return (
      <div className="SharePage">
        <div id="jumbo">
          <h1 className="title serif">{this.props.data.title}</h1>
          <h2 className="subtitle">{this.props.data.subtitle}</h2>
          {this.props.data.links.map((e, k) => (
            <a key={k} href={e.link}>
              {e.text}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default SharePage;
