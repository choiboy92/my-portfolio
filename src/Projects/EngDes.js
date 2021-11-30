import React from "react";
import ProjectIntro from "./ProjectPage_intro.js";
import './projects.css';
import Divider from './hooks/divider.js';
import SideQuickNav from './hooks/sideQuickNav.js';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import metalpodExploded from '../Assets/engdes/metalpod_exploded.png';
import sdof from '../Assets/engdes/SDOF_model_sketch.jpg';
import railings from '../Assets/engdes/railings.jpg';
import burnwireSketch from '../Assets/engdes/burnwire.gif';
import deploymentgif from '../Assets/engdes/deployment.gif';
import burnwire from '../Assets/engdes/burnwire.jpg';
import sepvelsetup from '../Assets/engdes/SepVel_testing_setup.jpg';
import vibration from '../Assets/engdes/metalpod_vibration.png';
import shakertable from '../Assets/engdes/shakertable.jpg';

const descriptionMetalpod = "Design, make and test a CubeSat deployment system. The system should interface with the rocket and protect the satellite during launch and then be able to quickly and effectively deploy a 3U CubeSat (manufactured by other teams).";
const descriptionTorpedo = "As a team, design an electric powered underwater scooter, capable of depths of 40m and an underwater velocity of 1.5m/s all within a working week.";
const descriptionTeargear = "Design and manufacture a mini electric drag race car to be raced with other teams. The motor, battery and wheels cannot be altered.";

const roleMetalpod = "Project Manager"
const roleTorpedo = "Project Manager"
const roleTeargear = "CAD Manager"

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
    <Tabs
      defaultActiveKey="metalpod"
      id="tabheader"
      transition={true}
      >
      <Tab eventKey="metalpod" title="SATELLITE DEPLOYER" className="tabs">
        <div className="introDescWrapper">
          <div style={{flex:"2 0 150px", border:"1px solid white"}}>
            <p>DESCRIPTION:<br/>
             {descriptionMetalpod}</p>
          </div>
          <div style={{flex:"1 0 100px", border:"1px solid white"}}>
            <p>ROLE:<br/> {roleMetalpod}</p>
          </div>
        </div>
        <Divider color="white"/>
        <h1 className="sectionTitle">Literature Review</h1>
        <h1 className="sectionTitle">Concept Sketches</h1>
        <h1 className="sectionTitle">Design Features</h1>
          <img src={metalpodExploded} style={{width: "100%"}} alt="Exploded Metalpod"/>
        <div className="ColWrapper" style={{marginTop:"0"}}>
          <div className="threeColWrapper_items">
            <p>PROTECTION BY DAMPING
            <img src={sdof} style={{width: "100%", marginBottom:"10px"}} alt="SDOF model"/>
            Simple SDOF models were used to select Neoprene rubber sheets to dampen predicted launch vibrations and forces</p>
          </div>
          <div className="threeColWrapper_items">
            <p>SECURE INTERFACE WITH SATELLITE
            <img src={railings} style={{width: "100%", marginBottom:"10px"}} alt="SDOF model"/>
              <br/>Implementing the protective damping would be of little use if the satellite was not secured and fixed within the deployment system. PTFE coated railings
            </p>
          </div>
          <div className="threeColWrapper_items">
            <p>SIMPLE DEPLOYMENT MECHANISM
            <img src={burnwireSketch} style={{width: "100%", marginBottom:"10px"}} alt="SDOF model"/>
              <br/>Implementing the protective damping would be of little use if the satellite was not secured and fixed within the deployment system. PTFE coated railings
            </p>
          </div>
        </div>
        <img src={deploymentgif} style={{width: "60%", marginBottom:"10px"}} alt="SDOF model"/>
        <h1 className="sectionTitle">Testing & Analysis</h1>
          <div className="ColWrapper">
            <div style={{flex: "1 0 400px"}}>
              <p>BURNWIRE TEST
              <img src={burnwire} style={{width: "100%", marginBottom:"10px"}} alt="SDOF model"/>
                <br/>The burnwire mechanism was also tested to evaluate the real required voltages to achieve a cutting time below 10s.
              </p>
            </div>
            <div style={{flex: "1 0 400px"}}>
              <p>SEPARATION VELOCITY
              <img src={sepvelsetup} style={{width: "100%", marginBottom:"10px"}} alt="SDOF model"/>
                <br/>A simple pulley test was devised as a way to
              </p>
            </div>
          </div>
          <div className="ColWrapper">
            <div style={{flex: "1 0 400px"}}>
              <p>VIBRATION TEST<br/>
                Both sine sweeps and random vibration tests were carried out on a shaker table to assess the deployment system's ability to protect the satellite under launch conditions and evaluate the accuracy of our SDOF model.
                <br/><img src={vibration} style={{width: "70%", marginBottom:"10px"}} alt="SDOF model"/>
                <br/>Both sine sweeps and random vibration tests were carried out on a shaker table to assess the deployment system's ability to protect the satellite under launch conditions and evaluate the accuracy of our SDOF model.
              </p>
            </div>
            <div style={{flex: "0 0 400px"}}>
              <img src={shakertable} style={{width: "100%", marginBottom:"10px"}} alt="SDOF model"/>
            </div>
          </div>
      </Tab>
      <Tab eventKey="torpedo" title="UNDERWATER SCOOTER" className="tabs">
        <div className="introDescWrapper">
          <div style={{flex:"2 0 150px", border:"1px solid white"}}>
            <p>DESCRIPTION:<br/>
             {descriptionTorpedo}</p>
          </div>
          <div style={{flex:"1 0 100px", border:"1px solid white"}}>
            <p>ROLE:<br/> {roleTorpedo}</p>
          </div>
        </div>
        <Divider color="white"/>
          <p>
    				This is the description of my time at Engdes.
          </p>
      </Tab>
      <Tab eventKey="teargear" title="MINI ELECTRIC DRAG RACER" className="tabs">
        <div className="introDescWrapper">
          <div style={{flex:"2 0 150px", border:"1px solid white"}}>
            <p>DESCRIPTION:<br/>
             {descriptionTeargear}</p>
          </div>
          <div style={{flex:"1 0 100px", border:"1px solid white"}}>
            <p>ROLE:<br/> {roleTeargear}</p>
          </div>
        </div>
        <Divider color="white"/>
          <p>
    				This is the description of my time at Engdes.
          </p>
      </Tab>
    </Tabs>

    </div>
  )
}

export default EngDes;
