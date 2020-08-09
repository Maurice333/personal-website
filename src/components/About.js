
import React, {Component} from "react";
import {hot} from "react-hot-loader"
import "../css/main.css";

class About extends Component{
  render(){
    return(
      <div id="About">
        <h1> About Me</h1>
      </div>
    );
  }
}

export default hot(module)(About);