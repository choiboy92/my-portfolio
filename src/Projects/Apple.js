import React from "react";
import ProjectIntro from "./ProjectPage_intro.js";
import './projects.css'
import Divider from './divider.js'

const description = "Hi this is the description for my Apple internship role";
const role = "IS&T Machine Learning Intern"

function Apple(props) {
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
    <div className="introDescWrapper">
      <div>
        <p>DESCRIPTION:
         {description}</p>
      </div>
      <div>
        <p>ROLE: {role}</p>
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
