import React from "react";
import ProjectIntro from "./ProjectPage_intro.js";
import './projects.css';
import Divider from './hooks/divider.js';
import SideQuickNav from './hooks/sideQuickNav.js';

/*import promovid from '../Assets/kitchen/Promo_Video.mp4';*/
import infographic from '../Assets/kitchen/Kitchen_space_infographic_final.jpeg';
import usergraph from '../Assets/kitchen/user_research.png';
import attachment from '../Assets/kitchen/attachment_test.gif';
import cutlery from '../Assets/kitchen/cutlery_drying.jpg';
import backboard from '../Assets/kitchen/backboard.jpg';
import backboard_vector from '../Assets/kitchen/Hooked_illustration.png';
import rubberfeet from '../Assets/kitchen/rubberfeet.jpg';
import hood from '../Assets/kitchen/hood.jpg';
import finaldesign1 from '../Assets/kitchen/Final_front_render.jpg';
import finaldesign2 from '../Assets/kitchen/Hook_design.jpg';

const description = "Tasked with designing an object within the home that makes a specific task easier and/or improves wellbeing and quality of life. Our team looked at making the kitchen a more accessible space";
const role = "Project Team Leader"



function Kitchen(props) {
  return (
    <div className="ProjectPage">
    <ProjectIntro
    	name="Accessible\n    Kitchens"
			date="2020"
      //desc = {description}
      //role = {role}
      id = "kitchen"
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
    <div className="vl"></div>
    <h1 className="sectionTitle">The Problem</h1>
      <img src={infographic} style={{width: "80%", marginBottom:"10px", alignSelf:"center"}} alt="Kitchen Infographic"/>
      <p>
        With growing population density in cities and multi-functionality in how the kitchen space is being used, kitchens have largely not evolved over the last 50 years. We saw this as both a problem and an opportunity; how can we better suit the use cases and accessibility needs of the modern kitchen user.
      </p>
      <Divider color="white"/>
    <h1 className="sectionTitle">Understanding the modern kitchen user</h1>
      <p>
        User research and surveys were conducted especially concentrated on the 19-29 age range of young adults that typically make up a large proportion of city populations. Our research tried to quantify living conditions and identify areas within the home that user felt was unaccessible.
      </p>
      <img src={usergraph} style={{width: "40%", marginBottom:"10px", alignSelf:"center"}} alt="Kitchen Infographic"/>
      <p>
      Results showed that most users (32.3% of them to be exact) found the kitchen to be the most inaccessible. Our analysis also showed that the kitchen was highlighted as a pain point for households that had the fewest rooms per person (a simple measure of how crowded a household is).
      <br/>Interviews were further conducted with the users who found the kitchen to be most inaccessible. From our interviews, the main points of discovery were as follows:
      <ol>
        <li>CLUTTERED: with tupperware, crockery and pantry items, the kitchen was more crowded than ever. These items were often difficult to store and required stacking making them disorganised and inaccessible when needed.</li>
        <li>INFREQUENT USE: irregular use of the kitchen meant that many did not have regular or optimised storage and organisation methods. Often the space would develop as items built up with little reorganisation.</li>
        <li>USERS AS TENANTS: almost all the interviewed users were renting housing and so were limited in any new organisation items they could install. Often these helpful devices would be permanent solutions requiring drilling and screwing, processes that many landlords would find unacceptable.</li>
        <li>LACK OF MULTI_FUNCTIONALITY: the growing trends in the multi-functionality of the kitchen were not being reflected in how storage solutions were evolving.</li>
      </ol>
      </p>
      <Divider color="white"/>
    <h1 className="sectionTitle">Ideation</h1>
      <p>
        Brainstorming a range of ideas, they were categorised and whittled down into three overall designs. They were then evaluated based on factors such as the how well it solves the problem, ease of implementation and design and the potential impact of the design.
        <br/>The final concept settled on was a modular cupboard hook storage; a concept that makes readily used items more accessible and fits the diverse needs of the modern kitchen user.
      </p>
      <Divider color="white"/>
    <h1 className="sectionTitle">Design & Prototyping</h1>
      <div className="ColWrapper">
        <div className="twoColWrapper_items">
          <img src={attachment} style={{width: "100%", marginBottom:"10px", alignSelf:"center"}} alt="Attachment prototype"/>
        </div>
        <div className="twoColWrapper_items" style={{flex: "0 0 500px"}}>
          <p>
            Various different attachment methods were designed and tested using preliminary prototypes made out of cardboard.
            <br/>Once the attachment mechanism was developed, various other modular mechanisms could be design and prototyped.
          </p>
          <img src={cutlery} style={{width: "100%", marginBottom:"10px", alignSelf:"center"}} alt="Cutlery holder"/>
        </div>
      </div>
      <div className="ColWrapper">
        <div className="twoColWrapper_items" style={{flex: "0 0 500px"}}>
          <p>
            Simplicity in design of the backboard was key. Thus, a simple hook mechanism based off of kitchen cupboard design standards made the modular holder secure and stable.
          </p>
          <img src={backboard} style={{width: "100%", marginBottom:"10px", alignSelf:"center"}} alt="Backboard Prototype"/>
        </div>
        <div className="twoColWrapper_items" style={{flex: "0 0 200px"}}>
          <img src={backboard_vector} style={{width: "100%", marginBottom:"10px", alignSelf:"center"}} alt="Illustration of Hooked"/>
        </div>
      </div>
      <Divider color="white"/>
    <h1 className="sectionTitle">Refining the design</h1>
      <p>
        Prototyping helped us identify key limitations in our design early on. Notably aspects such as sliding of the backboard and dust and spills off countertops potentially hitting the items, which was solved by implement rubber feet and designing a splash hood respectively.
      </p>
      <div className="ColWrapper">
        <img src={rubberfeet} style={{width: "28.2%", marginBottom:"10px", alignSelf:"center"}} alt="Rubberfeet added"/>
        <img src={hood} style={{width: "50%", marginBottom:"10px", alignSelf:"center"}} alt="Hood added"/>
      </div>
    <h1 className="sectionTitle">Final design</h1>
      <img src={finaldesign1} style={{width: "80%", marginBottom:"10px", alignSelf:"center"}} alt="Final design render 1"/>
      <img src={finaldesign2} style={{width: "80%", marginBottom:"10px", alignSelf:"center"}} alt="Final design render 2"/>
    </div>
  )
}
/*<video src={promovid} controls width="80%" volume="0.2" style={{alignSelf:"center", marginBottom:"10px"}}/>*/
export default Kitchen;
