
import React, {Component} from "react";
import {hot} from "react-hot-loader"
import "../css/main.css";

class About extends Component{
  render(){
    return(
      <div id="About">
        <div id="about_content_container"> 

        </div>
        <div id="picture_container"> 
          <div id="picture_frame">
          
          </div>
        </div>
        
      </div>
    );
  }
}

export default hot(module)(About);