import React from "react";
import ProjectIntro from "./ProjectPage_intro.js";
import './projects.css'
import Divider from './hooks/divider.js';
import SideQuickNav from './hooks/sideQuickNav.js';

const description = "Lead a team of engineers, designers and personal trainers in developing a new interactive health tool using computer vision";
const role = "Product Manager"

function Neutoy(props) {
  return (
    <div className="ProjectPage">
    <ProjectIntro
    	name="Neutoy"
      //background="/NeuToy_front.png"
      date="20210-21"
      //desc = {description}
      //role = {role}
      id="neutoy"
    />
    <SideQuickNav/>
    <div className="introDescWrapper">
      <div style={{flex:"2 0 150px", border:"1px solid white"}}>
        <p>DESCRIPTION:<br/>
         {description}</p>
      </div>
      <div style={{flex:"1 0 100px", border:"1px solid white"}}>
        <p>ROLE:<br/> {role}</p>
      </div>
    </div>
    <Divider color="white"/>
      <p>
				This is the description of my time at DoubleMe.
      </p>
    </div>
  )
}

export default Neutoy;
