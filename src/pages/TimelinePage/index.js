import React, { Component } from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

import "./TimelinePage.scss";

const textColor = "#eee";
const bgColor = "#00171f";

class TimelinePage extends Component {
  render() {
    return (
      <div className="TimelinePage">
        <h1 className="title center serif">Timeline</h1>
        <h3 className="subtitle center serif">What am I upto these days?</h3>
        <Timeline lineColor={"#00171f"}>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="May 2020"
          >
            <p>
              Made{" "}
              <a href="https://play.google.com/store/apps/details?id=com.godcrampy.to_die_list">
                To Die List
              </a>
            </p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="April 2020"
          >
            <p>Working on Typescript, golang and react testing</p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="Feb to March 2020"
          >
            <p>
              Joined <a href="https://github.com/webpack">webpack</a>
            </p>
            <p>
              <a href="https://sparshsvnit.org/">Sparsh</a> website
            </p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="Jan 2020"
          >
            <p>Runner Up, Dotslash 2020 Hackathon</p>
            <p>6th position, Hackverse 2020 Hackathon</p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="December 2019"
          >
            <p>Learning Blockchain, Ethereum, Solidity and Truffle</p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="November 2019"
          >
            <p>
              Open Source contributions for{" "}
              <a href="https://github.com/webpack/webpack-cli/pulls?q=is%3Apr+author%3Agodcrampy">
                webpack-cli
              </a>
            </p>
            <p>
              Joined <a href="https://github.com/fossasia">FOSSASIA</a>
            </p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="October 2019"
          >
            <p>
              Built <a href="http://listly.surge.sh/">Listly</a>
            </p>
            <p>
              Hacktoberfest{" "}
              <span aria-label="heart" role="img">
                💖
              </span>
            </p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="September 2019"
          >
            <p>Lots of Competitive</p>
            <p>Learnt C++</p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="July & August 2019"
          >
            <p>Learnt React</p>
            <p>Secret Projects</p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="June 2019"
          >
            <p>
              Built{" "}
              <a href="https://play.google.com/store/apps/details?id=com.godcrampy.svnit">
                SVNIT101
              </a>
            </p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="April 2019"
          >
            <p>Learnt Flutter</p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="January to March 2019"
          >
            <p>Exploring Machine Learning, AI, Computer Vision</p>
            <p>
              Machine Learning from{" "}
              <a href="https://www.coursera.org/account/accomplishments/certificate/AWYA6KX8J3T3">
                Stanford
              </a>
            </p>
          </TimelineItem>
          <TimelineItem
            dateInnerStyle={{ background: bgColor, color: textColor }}
            key="001"
            dateText="14 Billion Years Ago"
          >
            <p>
              Our whole universe was in a hot dense state Then nearly fourteen billion years ago
              expansion started. Wait... The Earth began to cool The autotrophs began to drool
              Neanderthals developed tools We built a wall (we built the pyramids) Math, science,
              history, unraveling the mystery That all started with the big bang!
            </p>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }
}

export default TimelinePage;
