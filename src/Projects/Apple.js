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
    <div className="ColWrapper">
      <div style={{flex:"0 0 200px"}}><h1 className="sectionTitle">The Problem</h1></div>
      <p style={{flex:"0 0 500px", marginLeft:"10%",marginRight:"10%"}}>
        For a company renowned for its design, counterfeiting is a huge problem. Fake Airpods alone have cost Apple a reported $3.2 bn USD in the last 9 months alone according to a US customs report.
        <br/>Counterfeit products also pose a safety risk when considering products like chargers, and consequently the experience that users have with the products they should love.
      </p>
    </div>
    <h1 className="sectionTitle">Research</h1>
      <div className="ColWrapper">
      <p style={{flex:"1 0 300px", marginLeft:"10%", marginRight:"10%"}}>
        👉 Steps taken:
        <ol>
          <li>Researched the scale of the problem</li>
          <li>Identify platforms and patterns of counterfeit sellers</li>
          <li>Explored limitations of current system for handling these issues</li>
          <li>Liased with relevant teams to get their insight into the issue</li>
        </ol>
      </p>
      <p style={{flex:"1 0 300px", marginLeft:"10%", marginRight:"10%"}}>
        Given the open-ended brief and the time limitation, it was important to hone in on what specific aspect I would be looking to solve. This required me to understand the scope of the issue through research and networking
        <br/>Once the pipeline of the current process was identified, the next step was to identify whereabouts in the pipeline I could offer a solution.
      </p>
      </div>
    <h1 className="sectionTitle">Ideation</h1>
      <p>
        Given the ongoing deployment of the system, I cannot share the specific details of the solution. However, on a high level, the ideation involved looking at how I could refine the existing pipeline and make it more efficient.
        <br/>Various solutions were explored looking at various sections in the pipeline. All in all, the concepts were assessed on the following characteristics that were identified as being essential:
        <blockquote>Faster, easier, scalable, secure, integrated, automated</blockquote>
      </p>
    <h1 className="sectionTitle">MVP Development</h1>
      <p>
        NEED IMAGE OF ARCHITECTURE. Having researched the various possible ways to present and test a solution, I settled on developing a React application with a Flask web server and RabbitMQ worker system. This allows the MVP to be scalable while offering the native data processing and machine learning capabilities that the Python worker script can offer.
        <br/>Having tested the technicalities of the system, work was done to ensure that the application met internal design and accessibility standards.
      </p>
    <h1 className="sectionTitle">Outcome</h1>
      <p>
        The project culminated in a Keynote presented to senior directors. This showcased both the development of the tool along with the roadmap to expand its use cases to other tasks within the infrastructure.
        <br/>The handover process combined with effective networking was able to bring together technical and operational teams to ensure that the project would be supported and continued beyond the internship.
      </p>
    </div>
  )
}

export default Apple;
