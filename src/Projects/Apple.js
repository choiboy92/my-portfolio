import React, { useEffect } from "react";
import ProjectIntro from "./ProjectPage_intro.js";
import './projects.css';
import Divider from './hooks/divider.js';
import SideQuickNav from './hooks/sideQuickNav.js';

const description = "Independent project to help Apple find a way to tackle the prevalence of counterfeit products being sold on online platforms";
const role = "IS&T Machine Learning Intern"

function Apple(props) {
  /*useEffect(() => {
    window.test();
  }, []);*/

  return (
    <div className="ProjectPage">
    <ProjectIntro
    	name="Apple\n   Internship"
      //background='/appleBG.jpg'
      date="2021"
      //desc = {description}
      //role = {role}
      id = "apple"
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
				This is the description of my time at Apple.
      </p>
    </div>
  )
}

export default Apple;
