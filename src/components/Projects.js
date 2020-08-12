
import React, {Component} from "react";
import {hot} from "react-hot-loader"
import "../css/main.css";

import project_data from "../ProjectData/project_data.js";

import IndividualProject from "./IndividualProject.js"


class Projects extends Component{
  render(){

    return(
      <div id="Projects">
        
        <div id="Projects_container">
          {project_data.map((obj) => <IndividualProject key={project_data.indexOf(obj)} obj={obj} />)}
        </div>
        
      </div>
    );
  }
}

export default hot(module)(Projects);