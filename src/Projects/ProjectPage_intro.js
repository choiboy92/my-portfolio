import React from "react";
import ReactDOM from "react-dom";
function ProjectIntro(props) {
  //const BG = props.background;
  return (
    <div className="landingWrapper" style={{backgroundImage: `url(${props.background})`, backgroundSize: "cover"}}>
      <h1><span style={{padding: "0 15px", boxShadow:"inset 0 -15px 0 0 #96c8a2"}}>{props.name}</span></h1>
    </div>
  )
}

export default ProjectIntro;
