import React,{useEffect} from "react";
import ProjectIntro from "./ProjectPage_intro.js";
import './projects.css';
import SideQuickNav from './hooks/sideQuickNav.js';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import metalpod_concepts from '../Assets/engdes/metalpod_concepts.png';
import metalpodExploded from '../Assets/engdes/metalpod_exploded.png';
import sdof from '../Assets/engdes/SDOF_model_sketch.jpg';
import sdof_gevs from '../Assets/engdes/SDOF_model_GEVS.png';
import railings from '../Assets/engdes/railings.jpg';
import burnwireSketch from '../Assets/engdes/burnwire.gif';
import deploymentgif from '../Assets/engdes/deployment.gif';
import burnwire from '../Assets/engdes/burnwire.jpg';
import sepvelsetup from '../Assets/engdes/SepVel_testing_setup.jpg';
import vibration from '../Assets/engdes/metalpod_vibration.png';
import shakertable from '../Assets/engdes/shakertable.jpg';
import dmt_team from '../Assets/engdes/dmt_team.jpg';
import torpedo from '../Assets/engdes/ME2_DesignWeek_render2.jpg';
import torpedo_poster from '../Assets/engdes/torpedo_poster.png';
import teargearConcept from '../Assets/engdes/teargear_concept.png';
import teargearRender from '../Assets/engdes/teargear_translucent.png';
import rollerball from '../Assets/engdes/transferBearing.jpeg';
import gearcalcs from '../Assets/engdes/gear_calcs.png';
import weightdist from '../Assets/engdes/teargear_weightdist.png';
import teargearmade from '../Assets/engdes/teargear_made.png';
import teargeartest from '../Assets/engdes/teargear_test.png';

const descriptionMetalpod = "Design, make and test a CubeSat deployment system. The system should interface with the Falcon 9 rocket, protect the satellite during launch, then be able to quickly and effectively deploy a 3U CubeSat (manufactured by other teams).";
const descriptionTorpedo = "As a team, design an electric powered underwater scooter, capable of depths of 40m and an underwater velocity of 1.5m/s all within a working week.";
const descriptionTeargear = "Design and manufacture a mini electric drag race car to be raced with other teams. The motor, battery and wheels cannot be altered.";

const roleMetalpod = "Project Manager"
const roleTorpedo = "Project Manager"
const roleTeargear = "CAD Manager"

function EngDes(props) {
  useEffect(() => {
    window.engdes_anime();
  }, []);

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
            <p><br/>DESCRIPTION:<br/>
             {descriptionMetalpod}</p>
          </div>
          <div style={{flex:"1 0 100px", border:"1px solid white"}}>
            <p><br/>ROLE:<br/>{roleMetalpod}</p>
          </div>
        </div>
        <div className="divider"/>
        <div className="vl"></div>
        <div id="engdes_satellite_research">
          <h1 className="sectionTitle">Research & Review</h1>
          <p>
            When given a design project, experience has helped me learn that although it is easy to
            run into the design process headfirst, this almost always elongates the design period
            and leads to more time spent redesigning afterwards.<br/>
            Part of this process includes reinstating and distilling down the project objectives; an often
            overlooked yet essential part of the project, especially for the team as whole to be on the
            same page:<br/>
            <ol style={{marginLeft:"10%", listStyleType:"none"}}>
              <li>  🛡      PROTECTION</li>
              <li>  🚀      DEPLOYMENT</li>
              <li>  🧱      INTERFACE</li>
            </ol>
            I delegated research on these three objectives between the team members, exploring existing solutions,
            research and documentation so we could approach the initial design phase as informed as possible.
          </p>
        </div>
        <div className="divider"/>
        <div id="engdes_satellite_concept">
          <h1 className="sectionTitle">Concept Sketches</h1>
          <p>
            Leading on from our research, the team and I looked to develop some concept sketches exploring various actuation methods,
            deployment methods, shapes & forms, damping methods.
          </p>
          <img src={metalpod_concepts} style={{width: "100%", marginBottom:"10px"}} alt="Metalpod Concept sketches"/>
        </div>
        <div className="divider"/>
        <div id="engdes_satellite_featimg">
          <h1 className="sectionTitle">Design Features</h1>
          <img src={metalpodExploded} style={{width: "85%"}} alt="Exploded Metalpod"/>
        </div>
        <div className="ColWrapper" style={{alignItems: "flex-start"}}>
          <div id="engdes_satellite_feat1" className="threeColWrapper_items">
            <br/><p>PROTECTION BY DAMPING<br/></p>
            <img src={sdof} style={{width: "100%", marginBottom:"10px"}} alt="SDOF model"/>
              <p><br/>Simple SDOF models were used to evaluate the vibration transfer from the rocket, throught the deployment system to the satellite.
                By selecting Neoprene rubber (NBR) sheets to dampen launch vibrations and forces, the natural frequencies were reduced to roughly 25 to 30Hz with significant attenuation beyond that.
                </p><img src={sdof_gevs} style={{width: "100%", marginBottom:"10px", marginTop:"10px"}} alt="SDOF model GEVS prediction"/>
                <p>These models were used to verify that the Neoprene sheets would be effective and predict vibration response for a set of GEVS random vibration profiles.
              </p>
          </div>
          <div id="engdes_satellite_feat2" className="threeColWrapper_items">
            <br/><p>SECURE INTERFACE WITH SATELLITE<br/></p>
            <img src={railings} style={{width: "100%", marginBottom:"10px"}} alt="Railings design"/>
              <p><br/>Implementing the protective damping would be of little use if the satellite was not secured and fixed within the deployment system.
                PTFE coated railings provide the constrainment as well as the smooth interface allowing the satellite to slide out and acting as a barrier to protect against cold-welding.
            </p>
          </div>
          <div id="engdes_satellite_feat3" className="threeColWrapper_items">
            <br/><p>SIMPLE DEPLOYMENT MECHANISM<br/></p>
            <img src={burnwireSketch} style={{width: "100%", marginBottom:"10px"}} alt="Sketch of Burnwire"/>
              <p><br/>
                Burn-wire device was designed as a simple and reliable way for releasing spring-loaded actuation.
                Its ability to actuate in zero-gravity, non-atmospheric conditions along with the option for contingency burn-wires and their relatively cheap cost,
                makes it an ideal, reliable way for deployer actuation.<br/>
                Consisting of a ceramic holder and shoulder screws, the Nichrome cutting wire was calculated to cut the Vectran cable with between 1 to 2A of current.
            </p>
          </div>
        </div>
        <img src={deploymentgif} style={{width: "60%", marginBottom:"50px"}} alt="How deployment works"/>
        <div className="divider"/>
        <h1 className="sectionTitle">Testing & Analysis</h1>
          <div className="ColWrapper" style={{marginLeft:"10%", marginRight:"10%", justifyContent:"center"}}>
            <div id="engdes_satellite_testL" style={{flex: "1 0 400px"}}>
              <img src={burnwire} style={{width: "60%", marginBottom:"10px"}} alt="Burnwire in test configuration"/>
                <p>BURNWIRE TEST</p>
                <p><br/>The burnwire mechanism was also tested to evaluate the real required voltages to achieve a cutting time below 10s.
              </p>
            </div>
            <div id="engdes_satellite_testR" style={{flex: "1 0 400px"}}>
              <img src={sepvelsetup} style={{width: "60%", marginBottom:"10px"}} alt="SepVel test setup"/>
                <p>SEPARATION VELOCITY</p>
                <p><br/>
                  A simple pulley test was devised as a way to simulate the low gravity environment that the system
                  would experience during the deployment phase. Thus, the real separation velocity could be estiamted in
                  a simple manner while any interference with the railings could also be caught.
              </p>
            </div>
          </div>
          <div className="ColWrapper" style={{marginLeft:"10%", marginRight:"10%", justifyContent:"space-evenly"}}>
            <div id="engdes_satellite_testL1" style={{flex: "1 0 400px"}}>
              <p>VIBRATION TEST<br/>
                Both sine sweeps and random vibration tests were carried out on a shaker table to assess the deployment system's ability to protect the satellite under launch conditions and evaluate the accuracy of our SDOF model.
                <br/><img src={vibration} style={{width: "100%", marginBottom:"10px"}} alt="Vibration profile results"/>
                <br/>Both sine sweeps and random vibration tests were carried out on a shaker table to assess the deployment system's ability to protect the satellite under launch conditions and evaluate the accuracy of our SDOF model.
              </p>
            </div>
            <div id="engdes_satellite_testR1" style={{flex: "1 0 400px"}}>
              <img src={shakertable} style={{width: "100%", marginBottom:"10px"}} alt="Vibration test setup"/>
            </div>
          </div>
          <div className="divider"/>
          <div id="engdes_satellite_virtualintro">
            <h1 className="sectionTitle">Challenges of virtual working</h1>
            <p>
              The pandemic that plagued most of 2020 and 2021 meant that all project proceedings had to be carried out online.
              This posed some major challenges, some of which were as simple as sharing unrotated images to more complicated ones.
              Here are some of the major challenges that we faced and learned from.
            </p>
          </div>
            <div className="ColWrapper" style={{alignItems:"center", justifyContent:"center"}}>
              <img id="engdes_satellite_virtualimg" src={dmt_team} style={{width:"400px",flex:"1 0 auto", marginBottom:"10px"}} alt="Online team meetings"/>
              <p id="engdes_satellite_virtualtxt" style={{flex:"1 0 300px", marginLeft:"10%", marginRight:"10%"}}>
                <br/>
                MEETINGS & ORGANISATION<br/>
                Conversations and discussions that could be held in a moment or at the end of a lecture were no longer possible.
                The virtual conditions meant greater emphasis on meeting preparation, agendas as well as flexibility to converse via chat so as not to waste time.
                When communicating with other subteams working on other systems, this was vital.
                <br/>
                VIRTUAL CAD<br/>
                A key aspect of projects is using CAD, both for actual design as well as helping members visualise solutions.
                File naming, organisation and version management became as important as ever. Limitations in access to CAD on home computers
                meant that we also had to be flexible and sensible when delegating CAD tasks.
                <br/>
                MANUFACTURING<br/>
                In order to have our design manufactured, we now needed to work with 3rd party prototype vendors. Typically we would build these ourselves in the workshop but due to
                this change we needed to focus on making our engineering drawings had to be of industry standard and familiarising ourself with billing methods.
                Moreover, the higher manufacturing costs meant a greater focus on cost-reduction in our design.
                <br/>
                THE LOSS OF SIGHT & TOUCH<br/>
                Having gone virtual, we realised how much of an advantage it was to be able to simply look and feel a design or prototype. Often during this time,
                we could notice things to change but without this reference, we needed to ensure that our design was close to perfect from the get-go and that we had
                considered all the design and manufacturing requirements; much like what would be expected in industry.
              </p>
            </div>

      </Tab>
      <Tab eventKey="torpedo" title="UNDERWATER SCOOTER" className="tabs">
        <div className="introDescWrapper">
          <div style={{flex:"2 0 150px", border:"1px solid white"}}>
            <p><br/>DESCRIPTION:<br/>{descriptionTorpedo}</p>
          </div>
          <div style={{flex:"1 0 100px", border:"1px solid white"}}>
            <p><br/>ROLE:<br/>{roleTorpedo}</p>
          </div>
        </div>
        <div className="divider"/>
        <div className="vl"></div>
        <div id="engdes_torpedo_featimg">
        <h1 className="sectionTitle">Design features</h1>
          <img src={torpedo} style={{width: "100%", marginBottom:"0"}} alt="Torpedo Render"/>
          </div>
          <div className="ColWrapper" style={{marginTop:"0"}}>
            <div className="threeColWrapper_items" id="engdes_torpedo_feat1">
              <p><br/>USER ORIENTATED DESIGN<br/>
                Neutral buoyancy for divers and can secure extra weights for deep diving. Dead man's switch also adds an extra layer of safety to the device.
              </p>
            </div>
            <div className="threeColWrapper_items" id="engdes_torpedo_feat2">
              <p><br/>SIMPLE MANUFACTURING<br/>
                Injection moulded design using Epoxy SMC and simple waterproofing features makes it simple to make and assemble.
              </p>
            </div>
            <div className="threeColWrapper_items" id="engdes_torpedo_feat3">
              <p><br/>EFFECTIVE ACTUATION<br/>
                Motor selection considers both the required propulsion speed of 1.5m/s while also offering up to 2 hours of continued usage.
              </p>
            </div>
          </div>
          <div className="divider"/>
        <div id="engdes_torpedo_poster">
        <h1 className="sectionTitle">Technical Poster</h1>
          <img src={torpedo_poster} style={{width: "60%", marginBottom:"10px"}} alt="Torpedo Technical Poster"/>
        </div>
      </Tab>
      <Tab eventKey="teargear" title="MINI ELECTRIC DRAG RACER" className="tabs">
        <div className="introDescWrapper">
          <div style={{flex:"2 0 150px", border:"1px solid white"}}>
            <p><br/>DESCRIPTION:<br/>{descriptionTeargear}</p>
          </div>
          <div style={{flex:"1 0 100px", border:"1px solid white"}}>
            <p><br/>ROLE:<br/>{roleTeargear}</p>
          </div>
        </div>
        <div className="divider"/>
        <div className="vl"></div>
        <div id="engdes_teargear_concept">
        <h1 className="sectionTitle">Concept Sketches</h1>
          <div className="ColWrapper" style={{alignItems:"center"}}>
            <div style={{flex: "0 0 400px"}}><img src={teargearConcept} style={{width: "100%", marginBottom:"10px"}} alt="Teargear Concept Sketch"/></div>
            <div style={{flex: "0 0 400px"}}>
              <p style={{margin:"0"}}>
                Concept ideation was carried out taking into account restrictions in size and part usage. However, we looked to explore our creativity in designing a unique and effective solution.
              </p>
            </div>
          </div>
        </div>
          <div className="divider"/>
        <h1 className="sectionTitle">Design Features</h1>
          <img src={teargearRender} style={{width: "60%", marginBottom:"10px"}} alt="Teargear render" id="engdes_teargear_img"/>
          <div className="ColWrapper" style={{alignItems:"flex-start"}}>
            <div className="threeColWrapper_items" id="engdes_teargear_feat1">
              <br/><p>OUT-OF-THE-BOX THINKING<br/>
                <img src={rollerball} style={{width: "100%", marginBottom:"10px"}} alt="Transfer Ball bearing diagram"/>
                <br/>Used a roller ball bearing instead of axle and remaining wheels to reduce mass and improve top speed.
              </p>
            </div>
            <div className="threeColWrapper_items" id="engdes_teargear_feat2">
              <br/><p>OPTIMISED ACTUATION<br/>
                <img src={gearcalcs} style={{width: "100%", marginBottom:"10px"}} alt="Fixed Transmission gear ratio calculations"/>
                <br/>Initial estimates gave us an approximate mass with which we calculated optimal gear ratios based on efficiency and output speed.
              </p>
            </div>
            <div className="threeColWrapper_items" id="engdes_teargear_feat3">
              <br/><p>FAST ACCELERATION<br/>
                <img src={weightdist} style={{width: "100%", marginBottom:"10px"}} alt="Weight Distribution diagram"/>
                <br/>By designing the car to have roughly 72% weight distribution towards the drive shaft, we could improve acceleration to reach our top speed quicker
              </p>
            </div>
          </div>
          <div className="divider"/>
        <div id="engdes_teargear_manutest">
        <h1 className="sectionTitle">Manufacture & testing</h1>
          <div className="ColWrapper">
            <div style={{flex:"0 0 500px"}}><img src={teargearmade} style={{width: "100%", marginBottom:"10px"}} alt="Teargear under the hood"/></div>
            <div style={{flex:"0 0 250px"}}>
              <img src={teargeartest} style={{width: "100%", marginBottom:"10px"}} alt="Racing Teargear"/>
              <p style={{margin:0}}>
                Our tested top speed was 2.21m/s and when compared to other vehicles showed exceptional disparity.
              </p>
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>

    </div>
  )
}

export default EngDes;
