
import React, { Component} from "react";
import {hot} from "react-hot-loader"
import "./css/main.css";

class App extends Component{
  render(){
    return(
      <div id="App">
        <h1> Hello, World! </h1>
      </div>
    );
  }
}

export default hot(module)(App);