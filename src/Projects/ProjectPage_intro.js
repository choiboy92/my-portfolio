import React, { useRef, useEffect } from "react";
//import ReactDOM from "react-dom";
//import Divider from './divider.js';
import Canvas from "./hooks/useCanvas.js";


function ProjectIntro(props) {
  useEffect(() => {
    window.init(props.id, props.name, props.date);
  }, []);
  //const BG = props.background;
  return (
    //<div className="landingWrapper" style={{backgroundImage: `url(${props.background})`, backgroundSize: "cover"}}>
    <div className="landingWrapper" >
			<Canvas id={props.id}/>
    </div>
  )
}

export default ProjectIntro;
