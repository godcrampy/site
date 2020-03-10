import React, { Component } from "react";
import ProjectCard from "../../components/ProjectCard";

import "./CodePage.scss";

class CodePage extends Component {
  render() {
    return (
      <div className="CodePage">
        <h1 className="title center serif">Code</h1>
        <h3 className="subtitle serif">
          “Any fool can write code that a computer can understand. Good programmers write code that
          humans can understand.” ― <div className="title">Martin Fowler</div>
        </h3>
        <div className="columns">
          <div className="column">
            <ProjectCard
              title="📃 Listly"
              link="http://listly.surge.sh/"
              tags={[
                ["React", "is-info"],
                ["Sass", "is-danger"],
                ["Redux", "is-link"],
                ["Firebase", "is-warning"]
              ]}
              content="All your lists in one place!"
            />
          </div>
          <div className="column">
            <ProjectCard
              title="🏫 SVNIT 101"
              link="https://play.google.com/store/apps/details?id=com.godcrampy.svnit"
              tags={[
                ["Flutter", "is-info"],
                ["Firebase", "is-warning"],
                ["UI Design", "is-danger"]
              ]}
              content="Mobile app for college freshers of NIT Surat."
            />
          </div>
          <div className="column">
            <ProjectCard
              title="💻 CompSci Heaven"
              link="https://compsci-heaven.netlify.com/"
              tags={[
                ["webpack", "is-link"],
                ["Sass", "is-danger"],
                ["Netlify", "is-success"]
              ]}
              content="Free Resources for people who love computers."
            />
          </div>
          <div className="column">
            <ProjectCard
              title="🚀 Notes Kitty"
              link="https://github.com/Twelfth-Hour/notes-kitty"
              tags={[
                ["Javascript", "is-warning"],
                ["chrome API", "is-warning"]
              ]}
              content="Bringing you a chrome extension to simplify searches and easily organize notes. Runner Up of Dotslash 2020."
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <ProjectCard
              title="🏭 MIPS Assembler"
              link="https://github.com/godcrampy/mips-assembler"
              tags={[
                ["C++", "is-info"],
                ["Assembly", "is-danger"]
              ]}
              content="Assembler to emulate and execute programs written in MIPS assembly language independent of hardware."
            />
          </div>
          <div className="column">
            <ProjectCard
              title="🎁 Todo List Ethereum"
              link="https://github.com/godcrampy/todo-list-ethereum"
              tags={[
                ["Solidity", "is-dark"],
                ["Javascript", "is-warning"]
              ]}
              content="A minimal todo list app on the Ethereum Blockchain."
            />
          </div>
          <div className="column">
            <ProjectCard
              title="🗃️ Crypto Node"
              link="https://github.com/godcrampy/crypto-node"
              tags={[["Javascript", "is-warning"]]}
              content="Blockchain Implementation to play around with written in JavaScript."
            />
          </div>
          <div className="column">
            <ProjectCard
              title="🖼️ Image Save Express"
              link="https://github.com/godcrampy/image-save-express"
              tags={[
                ["Node", "is-success"],
                ["Express", "is-info"]
              ]}
              content="Upload, compress and save images in Express."
            />
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <ProjectCard
              title="🦄 Unicorn Savings"
              link="https://unicorn-savings.herokuapp.com/"
              tags={[
                ["React", "is-info"],
                ["Sass", "is-danger"],
                ["Redux", "is-link"],
                ["Firebase", "is-warning"]
              ]}
              content="The Saving Platform you've been dreaming about."
            />
          </div>
          <div className="column">
            <ProjectCard
              title="🚆 Express Local Auth Template"
              link="https://github.com/godcrampy/Express-Local-Auth-Template"
              tags={[
                ["Node", "is-success"],
                ["Express", "is-info"],
                ["MongoDB", "is-success"],
                ["Passport", "is-link"]
              ]}
              content="Starter template for local authentication with validation."
            />
          </div>
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div>
    );
  }
}

export default CodePage;
