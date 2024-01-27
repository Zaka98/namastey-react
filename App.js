import React from "react";
import ReactDOM from "react-dom/client";

/*agr hame neeche diya structure banana hai to kaise bnayenge react me

<div id="parent">
    <div id="child">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I am h1 tag</h1>
        <h2>I am h2 tag</h2>
    </div>
</div>


and what is react element?
ans. React element is nothing but just an object (ps: react element is not an html)
when we render this object onto DOM it becomes an HTML element

*/ 



// const parent = React.createElement("div", {id: "parent"},
//                     [React.createElement("div", {id: "child"}, 
//                         [React.createElement("h1", {}, "This is namaste"),
//                         React.createElement("h2", {}, "I am h2 tag")]
//                         ),
//                         React.createElement("div", {id: "child2"}, 
//                         [React.createElement("h1", {}, "I am h1 tag"),
//                         React.createElement("h2", {}, "I am h2 tag")]
//                         )]
//                         );

// ------------jo hamne object create kiya hai usko render karane ka tarika-------------

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// Jsx is not html in js it is html like syntax

// JSX is being convert into React.createElement by Babel , (babel is js compiler)
// ReactELement is js object, its converting into html element

// React Element


const val = <span>Hello g </span>
const Heading = (
    (<h1 className="Head">{val}Hello World This is me</h1>)
)
    



// React Component(There are two types)
// Class Based Compnent (old)
// Functional Component (New)

// component composition is puting one components in a another component
const HeadingComponent = () => {
   return ( <div>
                {Heading}
                <h1>Hello This is Functional Compnent</h1> 
            </div>
   )
        
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
