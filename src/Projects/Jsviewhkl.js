import React from "react";
import ProjectIntro from "./ProjectPage_intro.js";
import './projects.css'
import Divider from './hooks/divider.js';
import SideQuickNav from './hooks/sideQuickNav.js';

import mtz from '../Assets/Nuffield_mtz_datafile_ex.png';
import comparison from '../Assets/jsViewHKL_comparison.png';

const description = "Tasked with researching x-ray crystallography data storage and software methods and exploring the degree to which functionality could be replicated in a modern day platform";
const role = "Nuffield Research Placement in the Scientific Computing Department"

function Jsviewhkl(props) {
  return (
    <div className="ProjectPage">
    <ProjectIntro
    	name="X-ray\n    Crystallography"
      date="2017"
      //desc = {description}
      //role = {role}
      id="jsviewhkl"
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
      <h1 className="sectionTitle">The Problem</h1>
        <p>
  				X-ray crystallography is an important scientific method used in discerning structures of a crystal. This analysis often produces a large amount of data that needs to be manipulated before presenting to the user. However, despite the software intensive nature of the process, data formats, processing and visualisation methods poses some issues:
        </p>
        <img src={mtz} style={{width: "100%", marginBottom:"10px"}} alt="mtz file"/>
        <p>
        <ul className="projectList">
          <li> Outdated: file formats and desktop programs from 1989 are still being used</li>
          <li> Client-based applications: difficult to track data changes, dependant on access to a desktop with the program installed</li>
        </ul>
        </p>
      <h1 className="sectionTitle">My Solution</h1>
        <p>
          Working under the of my mentor, I researched the issues behind the current method and devised my simple solution:
          <blockquote>Prototype one aspect of the application in a dynamic website format</blockquote>
          The aspect I chose was the ViewHKL portion of the application wherein the diffraction pattern could be visualised in h, k, and l planes. HTML, CSS, JQuery and Javascript were used in developing the prototype in 3 weeks, all of which I had to learn.
        </p>
      <h1 className="sectionTitle">Comparing old to new</h1>
        <img src={comparison} style={{width: "100%", marginBottom:"10px"}} alt="JSviewHKL comparison"/>
      <h1 className="sectionTitle">Results</h1>
        <div className="ColWrapper">
          <div className="threeColWrapper_items">
            <p>🏁 <br/>Proved and tested a working prototype that replicated the functionality and insight of ViewHKL</p>
          </div>
          <div className="threeColWrapper_items">
            <p>🎖<br/>Awarded Gold Crest Award for research report</p>
          </div>
          <div className="threeColWrapper_items">
            <p>🎉 <br/>Finalist at Big Bang Young Scientists of the Year 2018</p>
          </div>
        </div>
        <p>
          Hopefully, by proving its applicability on a web platform, my project will allow future development of the web-based version of the desktop application to be successful and aid further programmers to make improvements on my prototype, which will no doubt be needed. In the end, the best result would be that my project was used to aid future crystallographers in making better and easier analysis of protein crystal structures, hopefully using it to develop new drugs that could be used in a medical aspect perhaps.
        </p>
    </div>
  )
}

export default Jsviewhkl;
