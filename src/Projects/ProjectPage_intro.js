import React, { useEffect } from "react";
//import ReactDOM from "react-dom";
//import Divider from './divider.js';
import Canvas from "./hooks/useCanvas.js";


function ProjectIntro(props) {
  useEffect(() => {
    window.scrollTo({top:0,left:0, behavior:'smooth'});
    window.init(props.id, props.name, props.date);
    window.sideQuickNav_bounce();
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
