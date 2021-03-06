import React,{useEffect} from "react";
import ProjectIntro from "./ProjectPage_intro.js";
import './projects.css';
import SideQuickNav from './hooks/sideQuickNav.js';

import aws from '../Assets/aws_presence.gif';
import dataset from '../Assets/dataset.png';
import results from '../Assets/ml_results.png';


const description = "Exploring machine learning techniques to classify ambient weather conditions using sensor instrument data";
const role = "Independent research project"

function PresWeather(props) {
  useEffect(() => {
    window.presweather_anime();
  }, []);

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
        <p><br/>DESCRIPTION:<br/>
         {description}</p>
      </div>
      <div style={{flex:"1 0 100px", border:"1px solid white"}}>
        <p><br/>ROLE:<br/>{role}</p>
      </div>
    </div>
      <div className="divider"/>
    <div className="vl"></div>
      <div className="ColWrapper" id="presweather_problem" style={{alignItems:"center", justifyContent:"center"}}>
        <h1 className="sectionTitle" style={{margin:"0"}}>The Problem</h1>
          <p style={{marginLeft:"40px", marginRight:"40px", flex:"1 0 300px"}}>
            The Korean Meteorological Agency (KMA) has access to 94 manned weather stations, where conditions are classified in order to get real-time information across the country. However, data such as visibility, rainfall and wind among others are abundant in 464 other unmanned automatic weather stations (AWS) across South Korea, yet they are unable to carry out accurate classification. Current classification methods based off atmospheric relationships can only reach accuracies of roughly 70%.
          </p>
        <img src={aws} style={{flex:"0 0 240px", marginBottom:"10px", alignSelf:"center"}} alt="AWS distribution"/>
      </div>
        <div className="divider"/>
      <div id="presweather_aws">
      <h1 className="sectionTitle">Realising the full potential of AWS</h1>
        <p>
          Being able to classify conditions accurately with AWS will enable a much more precise idea of what is happening across the country and fully realise the potential of AWS as an unmanned network.
          <br/>Neural networks developed using PyTorch were researched as an effective and simple solution to this. Training and validation data was comprised from 9000 data recordings from manned stations, each with 5 different sensor readings, and applying processing techniques such as smoothing functions and normalisation.
        </p>
        <img src={dataset} style={{width:"30%", marginBottom:"10px", alignSelf:"center"}} alt="Dataset example"/>
      </div>
        <div className="divider"/>
      <div className="ColWrapper" id="presweather_training">
        <div style={{flex:"0 0 600px"}}>
          <h1 className="sectionTitle">Training the model<br/>(and myself)</h1>
          <p style={{margin:"10%", marginBottom:0}}>
            Having taken an extracurricular seminar series on machine learning techniques during the course of the Michaelmas term in 2019, I had learnt various tools and considerations regarding the model training and refinement. From this I was able to develop an initial model. However, this required significant refining.
            <br/>Over the course of a month, I worked on refining the model; experimenting with various model parameters. Over this period, I learnt a significant amount about refining neural networks and balancing bias and variance. In the end, I was able to achieve an average accuracy of 90%, with some conditions showing close to 100% classification accuracy.
            <br/>The code can be found in my Github
          </p>
        </div>
        <div style={{backgroundColor:"grey", flex:"0 0 500px", borderRadius:"20px", marginTop:"50px"}}>
          <img src={results} style={{width:"100%", alignSelf:"center", padding:"10px"}} alt="NN model accuracies"/>
          <p>
            The final model structure:
            <ol>
              <li>5 inputs</li>
              <li>10 node hidden layer ??? ReLu</li>
              <li>10 node hidden layer ??? ReLu</li>
              <li>6 node output ??? Softmax (for 6 classes)</li>
            </ol>
            <b>Result: Accuracies increase from 70% to 90%</b>
          </p>
        </div>
      </div>
        <div className="divider"/>
      <div id="presweather_impact">
      <h1 className="sectionTitle">The Impact</h1>
        <p>
          Over the course of a month, I worked on refining the model; experimenting with various model parameters. Over this period, I learnt a significant amount about refining neural networks and balancing bias and variance. In the end, I was able to achieve an average accuracy of 90%, with some conditions showing close to 100% classification accuracy.
        </p>
      </div>
    </div>
  )
}

export default PresWeather;
