import React from "react";
import ProjectIntro from "./ProjectPage_intro.js";
import './projects.css';
import Divider from './hooks/divider.js';
import SideQuickNav from './hooks/sideQuickNav.js';

const description = "Exploring machine learning techniques to classify ambient weather conditions using sensor instrument data";
const role = "Independent research project"

function PresWeather(props) {
  return (
    <div className="ProjectPage">
    <ProjectIntro
    	name="Present Weather\n Neural Network"
      date="2020"
      //desc = {description}
      //role = {role}
      id="presweather"
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
				This is the description of my time at independant project.
      </p>
    </div>
  )
}

export default PresWeather;
