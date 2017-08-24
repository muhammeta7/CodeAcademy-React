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