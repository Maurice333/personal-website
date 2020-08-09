
import React, {Component} from "react";
import {hot} from "react-hot-loader"
import "../css/main.css";

class Projects extends Component{
  render(){
    return(
      <div id="Projects">
        <h1> Projects </h1>
        <h1> Fuck you hot reloader??</h1>
      </div>
    );
  }
}

export default hot(module)(Projects);