import React from "react";

import StackItem from "./StackItem";
import "./Stack.scss";

import jsLogo from "../../assets/icons/javascript.jpeg";
import reactLogo from "../../assets/icons/react.png";
import nodeLogo from "../../assets/icons/node.png";
import reduxLogo from "../../assets/icons/redux.png";
import mongoLogo from "../../assets/icons/mongo.png";
import graphqlLogo from "../../assets/icons/graphql.png";
import gatsbyLogo from "../../assets/icons/gatsby.svg";
import webpackLogo from "../../assets/icons/webpack.png";
import firebaseLogo from "../../assets/icons/firebase.jpg";
import gitLogo from "../../assets/icons/git.png";
import pythonLogo from "../../assets/icons/python.png";
import htmlLogo from "../../assets/icons/html.png";
import npmLogo from "../../assets/icons/npm.png";
import sassLogo from "../../assets/icons/sass.png";
import cssLogo from "../../assets/icons/css.png";
import cppLogo from "../../assets/icons/cpp.png";
import eslintLogo from "../../assets/icons/eslint.jpg";
import netlifyLogo from "../../assets/icons/netlify.png";
import flutterLogo from "../../assets/icons/flutter.png";
import expressLogo from "../../assets/icons/express.png";
import dartLogo from "../../assets/icons/dart.png";
import rustLogo from "../../assets/icons/rust.png";

class Stack extends React.Component {
  render() {
    return (
      <div id="stack">
        <h3 className="title">Tools of Trade</h3>
        <section>
          <StackItem image={jsLogo} name="Javascript" />
          <StackItem image={nodeLogo} name="Node" />
          <StackItem image={reactLogo} name="React" />
          <StackItem image={reduxLogo} name="Redux" />
          <StackItem image={mongoLogo} name="MongoDB" />
          <StackItem image={graphqlLogo} name="GraphQL" />
          <StackItem image={gatsbyLogo} name="Gatsby" />
          <StackItem image={webpackLogo} name="Webpack" />
          <StackItem image={expressLogo} name="Express" />
          <StackItem image={htmlLogo} name="HTML5" />
          <StackItem image={cssLogo} name="CSS3" />
          <StackItem image={sassLogo} name="Sass" />
          <StackItem image={npmLogo} name="npm" />
          <StackItem image={gitLogo} name="Git" />
          <StackItem image={firebaseLogo} name="Firebase" />
          <StackItem image={dartLogo} name="Dart" />
          <StackItem image={flutterLogo} name="Flutter" />
          <StackItem image={netlifyLogo} name="Netlify" />
          <StackItem image={eslintLogo} name="ESLint" />
          <StackItem image={cppLogo} name="C++" />
          <StackItem image={rustLogo} name="Rust" />
          <StackItem image={pythonLogo} name="Python" />
        </section>
      </div>
    );
  }
}

export default Stack;
