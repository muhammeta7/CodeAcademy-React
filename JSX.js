// If a JavaScript file contains JSX code, 
// then that file will have to be compiled. 
// That means that before the file reaches a web browser,
// a JSX compiler will translate any JSX into regular JavaScript.

// JSX Elements: This JSX element looks exactly like HTML!
const p = <p>Hello world</p>;

// JSX Elements and Their Surroundings
// const is a variable and can be used anywhere
const myArticle = <article>Something</article>

// Attributes in JSX
// JSX elements can have attributes,// just like HTML 
// elements can. my-attribute-name="my-attribute-value"
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

// Nested JSX 
 const theExample = (
   <a href="https://www.example.com">
     <h1>
       Click me!
     </h1>
   </a>
);

const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);

// JSX Outer Elements
// There's a rule that we haven't mentioned: a JSX expression 
// must have exactly one outermost element.
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);

const blog = (
  <div>
    <img src="pics/192940u73.jpg" />
    <h1>
      Welcome to Dan's Blog!
    </h1>
    <article>
      Wow I had the tastiest sandwich today.  I <strong>literally</strong> almost freaked out.
    </article>
  </div>
);

// Rendering JSX
// ReactDOM.render(<h1>Hello world</h1>, 
// document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';

// Copy code here:
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));

// ReactDOM.render()
import React from 'react';
import ReactDOM from 'react-dom';

// Code
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));

// ReactDOM.render() II
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>Render me!</h1>, document.getElementById('container'));

// HTML
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="utf-8">
//   <link rel="stylesheet" href="/styles.css">
//   <title>Learn ReactJS</title>
// </head>

  // <body>
  //   <span id="container"></span>
  //   <script src="https://s3.amazonaws.com/codecademy-content/courses/React/react-course-bundle.min.js"></script>
  //   <script src="/app.compiled.js"></script>
  // </body>

// </html>

// Passing a Variable to ReactDOM.render()
import React from 'react';
import ReactDOM from 'react-dom';

// Code
const myList = (
  <ul>
    <li>Nothing</li>
    <li>Something</li>
  </ul>
);

ReactDOM.render(
  myList, 
  document.getElementById('app')
);

// class vs className
// When JSX is rendered, JSX className attributes are automatically rendered as class attributes.


// Self-Closing Tags
const profile = (
  <div>
    <h1>I AM JENKINS</h1>
    <img src="images/jenkins.png" />
    <article>
      I LIKE TO SIT
      <br />
      JENKINS IS MY NAME
      <br />
      THANKS HA LOT
    </article>
  </div>
);

// JavaScript In Your JSX In Your JavaScript
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(<h1>2+3</h1>, document.getElementById('app'));

// Curly Braces in JSX
// To execute JS simply use curly brackets
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1> {2+3} </h1>, document.getElementById('app'));
