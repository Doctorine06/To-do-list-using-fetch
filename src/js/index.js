//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Todo from "./component/Todo.jsx";
import Tasks from "./component/Task.jsx";
import Home from "./component/home.jsx";
//render your react application
ReactDOM.render(<Home/>, document.querySelector("#app"));
