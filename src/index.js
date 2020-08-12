import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import About from "./components/About.js"
import Projects from "./components/Projects.js"

const appContainer = document.getElementById('root')

ReactDOM.render(
  <>
    <About />
    <Projects />
  </>, appContainer)