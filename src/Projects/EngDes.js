import React from "react";
import ProjectIntro from "./ProjectPage_intro.js";
import './projects.css';
import Divider from './hooks/divider.js';
import SideQuickNav from './hooks/sideQuickNav.js';


const description = "Hi this is the description for my engineering projects";
const role = "Roles"

function EngDes(props) {
  return (
    <div className="ProjectPage">
    <ProjectIntro
    	name="Engineering\n   Design Projects"
      //background="/ME2_DesignWeek_render2.JPG"
      date="2018-21"
      //desc = {description}
      //role = {role}
      id="engdes"
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
				This is the description of my time at Engdes.
      </p>
    </div>
  )
}

export default EngDes;
