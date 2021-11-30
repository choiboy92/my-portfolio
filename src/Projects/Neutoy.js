import React from "react";
import ProjectIntro from "./ProjectPage_intro.js";
import './projects.css'
import Divider from './hooks/divider.js';
import SideQuickNav from './hooks/sideQuickNav.js';

import graph1 from '../Assets/neutoy/reliefmethod.png';
import graph2 from '../Assets/neutoy/freqvseff.png';
import lightbulb from '../Assets/neutoy/lightbulb_demo.mov';
import papercrush from '../Assets/neutoy/papercrush_demo.mov';
import tissue from '../Assets/neutoy/tissue_demo.mov';
import pivot1 from '../Assets/neutoy/NeuToy_pivot1.png';
import pivot2 from '../Assets/neutoy/NeuToy_pivot2.png';

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
    <div className="ColWrapper">
      <div style={{flex:"0 0 200px"}}><h1 className="sectionTitle">The Problem</h1></div>
      <p style={{flex:"0 0 500px", marginLeft:"10%",marginRight:"10%"}}>
        Health and fitness tools have often required large or expensive systems to be purchased. Even with the use of wearables or trackers they exhibit poor adoption and continued usage. We wanted to explore ways to bring health solutions to users right to them.
      </p>
    </div>
    <h1 className="sectionTitle">Refining our problem</h1>
      <p>
        The issues and limitations of health technology is a broad and vast issue with many research papers and literature reviews about it. The large scope of the issue meant that, as a team, it was important to refine what problem we were looking to solve.
        <br/>We decided that we would look at building healthy habits, in particular honing in on the average office worker market; a particular subset that typically has little time and higher stress.
      </p>
    <h1 className="sectionTitle">Market Research</h1>
      <p>
        We conducted surveys and interviews with various age-ranges of office workers to find out their current exercise trends. Our research showed that most ages do not seek professional exercise services, other than those over 50, and that in most age ranges, a considerable amount of exercise carried out is simple stretching.
        <br/>In addition, we looked at tracking how frequently they exercised and how effective they felt this was for them. Here we were able to hone in on a target market as we looked to identify age groups that had a high frequency of exercise but low effectiveness.
      </p>
      <div className="ColWrapper"style={{backgroundColor:"white"}}>
        <div style={{flex:"0 0 250px"}}>
          <img src={graph1} style={{width: "100%", marginBottom:"10px", alignSelf:"center"}} alt="Relief methods for different age ranges graph"/>
        </div>
        <div style={{flex:"0 0 450px"}}>
          <img src={graph2} style={{width: "100%", marginBottom:"10px", alignSelf:"center"}} alt="Frequency vs Effectiveness graph"/>
        </div>
      </div>
      <p>
        Adding considerations about technology uptake and prevalence in pains at older ages, we concluded that the 40-49 age range presented the greatest opportunity; an age group that:
        <ol>
          <li>develops pains and aches from lack of exercise more frequently</li>
          <li>tries to exercise</li>
          <li>generally are able to use technology comfortably</li>
          <li>feels current methods are ineffective</li>
        </ol>
      </p>
    <h1 className="sectionTitle">MVP</h1>
      <p>
        I became involved in the project at a time where the technologies that were to be used were somewhat decided. In order to make the uptake as easy as possible we wanted to use a platform which many were familiar with; the website.
        <br/>Working with exercise professionals meant we were able to shortlist a few exercises that focus on hand, wrist and neck pains. A key unique selling point of our project was to incorporate open-source computer vision techniques allowed us to ideate and consequently develop some interaction into the website with the aim of making these simple exercises intuitive and fun.
      </p>
      <video src={lightbulb} autoplay="true" loop="true" width="80%" volume="0.2" style={{alignSelf:"center", marginBottom:"10px"}}/>
      <video src={papercrush} autoplay="true" loop="true" width="80%" volume="0.2" style={{alignSelf:"center", marginBottom:"10px"}}/>
      <video src={tissue} autoplay="true" loop="true" width="80%" volume="0.2" style={{alignSelf:"center", marginBottom:"10px"}}/>
    <h1 className="sectionTitle">Pivot</h1>
      <p>
        Upon preliminary user testing, an overwhelming amount of feedback could be summarised in the following:
        <blockquote>👉 The interactive experience was unique and fun, but the exercises were insignificant</blockquote>
        Thus, as a team, we decided to make an important pivot in our objectives; focus on building out the unique interactive experience.
      </p>
      <div className="ColWrapper" style={{backgroundColor:"white"}}>
        <div style={{flex:"0 0 495px"}}>
          <img src={pivot1} style={{width: "100%", marginBottom:"10px", alignSelf:"center"}} alt="Relief methods for different age ranges graph"/>
        </div>
        <div style={{flex:"0 0 400px"}}>
          <img src={pivot2} style={{width: "100%", marginBottom:"10px", alignSelf:"center"}} alt="Frequency vs Effectiveness graph"/>
        </div>
      </div>
    </div>
  )
}

export default Neutoy;
