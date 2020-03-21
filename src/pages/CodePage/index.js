import React, { Component } from "react";
import ProjectCard from "../../components/ProjectCard";

import "./CodePage.scss";

const data = [
  {
    title: "📖 Case Design",
    link: "https://github.com/godcrampy/case-design",
    content: "📖 A Thoughtful Design Language",
    tags: [["Sass", "is-danger"]]
  },
  {
    title: "📃 Listly",
    link: "http://listly.surge.sh/",
    content: "All your lists in one place!",
    tags: [
      ["React", "is-info"],
      ["Sass", "is-danger"],
      ["Redux", "is-link"],
      ["Firebase", "is-warning"]
    ]
  },
  {
    title: "🏫 SVNIT 101",
    link: "https://play.google.com/store/apps/details?id=com.godcrampy.svnit",
    content: "Mobile app for college freshers of NIT Surat.",
    tags: [
      ["Flutter", "is-info"],
      ["Firebase", "is-warning"],
      ["UI Design", "is-danger"]
    ]
  },
  {
    title: "💻 CompSci Heaven",
    link: "https://compsci-heaven.netlify.com/",
    content: "Free Resources for people who love computers.",
    tags: [
      ["webpack", "is-link"],
      ["Sass", "is-danger"],
      ["Netlify", "is-success"]
    ]
  },
  {
    title: "🚀 Notes Kitty",
    link: "https://github.com/Twelfth-Hour/notes-kitty",
    content:
      "Bringing you a chrome extension to simplify searches and easily organize notes. Runner Up of Dotslash 2020.",
    tags: [
      ["Javascript", "is-warning"],
      ["chrome API", "is-warning"]
    ]
  },
  {
    title: "🏭 MIPS Assembler",
    link: "https://github.com/godcrampy/mips-assembler",
    content:
      "Assembler to emulate and execute programs written in MIPS assembly language independent of hardware.",
    tags: [
      ["C++", "is-info"],
      ["Assembly", "is-danger"]
    ]
  },
  {
    title: "🎁 Todo List Ethereum",
    link: "https://github.com/godcrampy/todo-list-ethereum",
    content: "A minimal todo list app on the Ethereum Blockchain.",
    tags: [
      ["Solidity", "is-dark"],
      ["Javascript", "is-warning"]
    ]
  },
  {
    title: "🗃️ Crypto Node",
    link: "https://github.com/godcrampy/crypto-node",
    content: "Blockchain Implementation to play around with written in JavaScript.",
    tags: [["Javascript", "is-warning"]]
  },
  {
    title: "🖼️ Image Save Express",
    link: "https://github.com/godcrampy/image-save-express",
    content: "Upload, compress and save images in Express.",
    tags: [
      ["Node", "is-success"],
      ["Express", "is-info"]
    ]
  },
  {
    title: "🦄 Unicorn Savings",
    link: "https://unicorn-savings.herokuapp.com/",
    content: "The Saving Platform you've been dreaming about.",
    tags: [
      ["React", "is-info"],
      ["Sass", "is-danger"],
      ["Redux", "is-link"],
      ["Firebase", "is-warning"]
    ]
  },
  {
    title: "🚆 Express Local Auth Template",
    link: "https://github.com/godcrampy/Express-Local-Auth-Template",
    content: "Starter template for local authentication with validation.",
    tags: [
      ["Node", "is-success"],
      ["Express", "is-info"],
      ["MongoDB", "is-success"],
      ["Passport", "is-link"]
    ]
  },
  {}
];

class CodePage extends Component {
  splitBy = (size, list) => {
    return list.reduce((acc, _, i, self) => {
      if (!(i % size)) {
        return [...acc, self.slice(i, i + size)];
      }
      return acc;
    }, []);
  };
  render() {
    return (
      <div className="CodePage">
        <h1 className="title center serif">Code</h1>
        <h3 className="subtitle serif">
          “Any fool can write code that a computer can understand. Good programmers write code that
          humans can understand.” ― <div className="title">Martin Fowler</div>
        </h3>
        {this.splitBy(4, data).map(arr => {
          return (
            <div className="columns">
              {arr.map(project => {
                return (
                  <div className="column">
                    {project.title && (
                      <ProjectCard
                        title={project.title}
                        link={project.link}
                        tags={project.tags}
                        content={project.content}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CodePage;
