
import React, {Component} from "react";
import {hot} from "react-hot-loader"
import "../css/main.css";


function listKeywords(array){

  var str = array.slice(0,-1).join(", ")+', '+array.slice(-1);
  return str
}



class IndividualProject extends Component{

  render(){

    var obj = this.props.obj

    return(
      <div className="projectBox"> 
          <div className="projectTitle">
            {obj.name}
          </div>
          <div className="previewImgBox">
            
          </div>
          <div className="keywords">
            {listKeywords(obj.keywords)}
          </div>
        </div>
    );
  }
}

export default hot(module)(IndividualProject);