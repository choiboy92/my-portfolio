//import React from "react"
import React from 'react';
import kneevid from './Assets/currentwork/femur_Talbot_video.mov';
import blind from './Assets/currentwork/ryoji-iwata-_dVxl4eE1rk-unsplash.jpg';
import filmcamera from './Assets/currentwork/hello-i-m-nik-odbndb-HFi4-unsplash.jpg';
import mechkey from './Assets/currentwork/keyboard.jpeg';

function CurrentWorkPage() {
  return (
    <div id="currentworkPage">
      <div className="currentwork_card">
        <h1 className="currentwork_card_header">Parallax Errors in Knee Surgery</h1>
        <div className="currentwork_card_innerdiv">
          <video className="currentwork_card_asset" src={kneevid} autoplay="true" loop="true" alt="Talbot 2015 Parallax Error video"/>
          <p className="currentwork_card_desc">
            Total Knee Arthroplasty (TKA) is a an important procedure in restoring mobility in the knee that has been damaged by arthritis.
            With growing elderly populations, the rates of this surgery have grown over the last couple of decades and, as such,
            it is important that these procedures and the consequent implants are placed accurately so as to reduce the need for revision surgeries.
            <br/>
            During the procedure, bone references are used to place cuts, holes and fixings for implants. However different surgeons take slightly different references depending on viewing angle, distance, surgeon height, light, surrounding tissue that leads to parallax errors that contribute to implant misalignment.
            <br/>
            - Design and test experimental rig<br/>
            - Evaluate sources of parallax error<br/>
            - Quantify effects of error on misalignment<br/>
            - Design and test surgical tool as a solution<br/>
          </p>
        </div>
      </div>
      <div className="currentwork_card">
        <h1 className="currentwork_card_header">Gestures for the Blind & Visually Impaired</h1>
        <div className="currentwork_card_innerdiv">
          <img className="currentwork_card_asset" src={blind} alt="By Ryoji Iwata from Unsplash"/>
          <p className="currentwork_card_desc">
            My experiences at Apple taught me a lot about what user-orientated design and engineering really means when it comes to industry. As much as we can go about trying to implement “good design”, it is often hard to see how we might realise this in our products if we never even first consider the variety of different users. This led me to question interactions for the blind or visually impaired.
            <br/>
            Since the conception of the touch screen, as a society, we have developed a set standard of gestures. One example is the pinch to zoom, or drag and slide to scroll. These have defined the way we interact with the content produced. However, for the blind and visually impaired, their interactive experience is largely diminished down to screen-readers. The inaccessible nature of the powerful tools we take for granted highlights a large divide, and I think we can do better.
          </p>
        </div>
      </div>
      <div className="currentwork_card">
        <h1 className="currentwork_card_header">Reusable Film: making film photography sustainable</h1>
        <div className="currentwork_card_innerdiv">
          <img className="currentwork_card_asset" src={filmcamera} alt="By helloimnik from Unsplash" style={{height:"360px"}}/>
          <p className="currentwork_card_desc">
            Despite the prevalence of advanced digital and computational photography methods, in the current day age, we are seeing a renewal in film photography. As enthusiasts and beginners alike explore film photography and its unique characteristics that make it such an attractive medium of expression, this growth includes with it the added cost of film canisters, both money-wise and environmentally. From a personal perspective, as an environmentally-conscious engineer and keen film photographer, the impact of film and the canister itself on unsustainable waste divides my opinion on whether film photography’s renewal is a good thing. This is further exacerbated by the chemical compounds used during the developing phase as well as the packaging as people send their film back and forth to be developed and scanned further adding to the byproduced waste.
            <br/>
            So the question I asked myself is how can we keep the timeless characteristics of film such as limited shots, granularity, noise and added hue, while making the whole process more eco-friendly?
            <br/>
            To answer this, I am interested in exploring uses of reusable film similar to how e-ink operates or augmenting film cameras with digital camera sensors without a viewfinder. These methods removes the currently disposable nature of film photography while maintaining some of the quirks of the process that many seem to love and appreciate. The main limitations posed are the quality of the shots: e-ink is currently highly granular and monochrome, while there have been successful attempts at incorporating digital sensors into cameras but with caveat of cumbersome size and installation.
          </p>
        </div>
      </div>
      <div className="currentwork_card">
        <h1 className="currentwork_card_header">Mechanical Keyboards: an endless spiral</h1>
        <div className="currentwork_card_innerdiv">
          <img className="currentwork_card_asset" src={mechkey} alt="Taken by me"/>
          <p className="currentwork_card_desc">
            What started off as a quarantine hobby has quickly devolved into a full-on spiral into the depths of sound analysis, vibration damping and materials evaluation. If you haven’t read the title so far, I’m talking about mechanical keyboards; an item that most normal people don’t question. However, over the course of my quarantine, I have become more and more obsessed with the array of sounds and typing feels that can be produced by an array of mounting methods, switch materials, and damping qualities of keyboards.
            <br/>This consequently led me to design and manufacture my own 3D printed mechanical keyboard using a purchased PCB. The design involved a gasket-mount system to mount the PCB, as well as a design that could be easily and accurately printed with a hobbyist printer and assembled quickly.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWorkPage;
