import React, { Component } from "react";

import "./BlogPage.scss";
import BlogCard from "../../components/BlogCard";

const tags = {
  CAREER: "Career",
  CSS: "CSS",
  SASS: "Sass",
  SHOWDEV: "Show Dev",
  CS: "Computer Science",
  INT: "Interview Prep",
  JS: "Javascript"
};

const data = [
  {
    title: "The 5 Levels of Developer Maturity 🔥",
    link: "https://dev.to/godcrampy/the-5-levels-of-developer-maturity-4ihi",
    tags: [tags.CAREER, tags.CS]
  },
  {
    title: "Case Design: A Thoughtful Design Library",
    link: "https://dev.to/godcrampy/case-design-a-thoughtful-design-library-3j01",
    tags: [tags.CSS, tags.SASS, tags.SHOWDEV]
  },
  {
    title: "Interview Prep #6: Rotate Image",
    link: "https://dev.to/godcrampy/interview-prep-6-rotate-image-4n47",
    tags: [tags.CS, tags.INT]
  },
  {
    title: "Interview Prep #5: String Compression",
    link: "https://dev.to/godcrampy/interview-prep-5-string-compression-464p",
    tags: [tags.CS, tags.INT]
  },
  {
    title: "Interview Prep #4: URLify String",
    link: "https://dev.to/godcrampy/interview-prep-4-urlify-string-clg",
    tags: [tags.CS, tags.INT]
  },

  {
    title: "Interview Prep #3: Two Sum",
    link: "https://dev.to/godcrampy/interview-prep-3-two-sum-bhp",
    tags: [tags.CS, tags.INT]
  },
  {
    title: "Interview Prep #2: Are Strings Permutations of Each Other",
    link: "https://dev.to/godcrampy/interview-prep-2-are-strings-permutations-of-each-other-1b13",
    tags: [tags.CS, tags.INT]
  },
  {
    title: "ES6 Arrow Functions: All you need to know",
    link: "https://dev.to/godcrampy/es6-arrow-functions-all-you-need-to-know-5h4p",
    tags: [tags.JS]
  },
  {
    title: "Interview Prep #1: Does String has Unique Characters",
    link: "https://dev.to/godcrampy/interview-prep-1-does-string-has-unique-characters-iid",
    tags: [tags.CS, tags.INT]
  },
  {
    title: "The Secret of Hoisting in JavaScript",
    link: "https://dev.to/godcrampy/the-secret-of-hoisting-in-javascript-egi",
    tags: [tags.JS, tags.INT]
  },
  {
    title: "Coercion in JavaScript",
    link: "https://dev.to/godcrampy/coercion-in-javscript-4k7g",
    tags: [tags.CS, tags.INT]
  },
  {
    title: "ES6 for loops: Best Practices",
    link: "https://dev.to/godcrampy/es6-for-loops-best-practices-4c86",
    tags: [tags.JS]
  },
  {
    title: "MEN Stack Template with Local Auth Plugged in!",
    link: "https://dev.to/godcrampy/men-stack-template-with-local-authentication-plugged-in-3f75",
    tags: [tags.JS, tags.SHOWDEV]
  }
];

class BlogPage extends Component {
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
      <div className="BlogPage">
        <h1 className="title center serif">Blog</h1>
        <h3 className="center subtitle serif">I write about programming and other stuff...</h3>
        {this.splitBy(4, data).map(arr => {
          return (
            <div className="columns">
              {arr.map(blog => {
                return (
                  <div className="column">
                    <BlogCard title={blog.title} link={blog.link} tags={blog.tags} />
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

export default BlogPage;
