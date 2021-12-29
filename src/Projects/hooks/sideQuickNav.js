import React from "react";
import { Link } from 'react-router-dom';

function SideQuickNav(props){
  return (
    <div id="sideWrapper">
      <Link to="/my-portfolio/appleintern" className="headLink"><p className="sideQuickNav">APPLE</p></Link>
      <p style={{marginTop: "auto", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontWeight:"500"}}>.</p>
      <Link to="/my-portfolio/engdes" className="headLink"><p className="sideQuickNav">ENGINEERING DESIGN</p></Link>
      <p style={{marginTop: "auto", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontWeight:"500"}}>.</p>
      <Link to="/my-portfolio/neutoy" className="headLink"><p className="sideQuickNav">NEUTOY</p></Link>
      <p style={{marginTop: "auto", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontWeight:"500"}}>.</p>
      <Link to="/my-portfolio/kitchen" className="headLink"><p className="sideQuickNav">ACCESSIBLE KITCHENS</p></Link>
      <p style={{marginTop: "auto", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontWeight:"500"}}>.</p>
      <Link to="/my-portfolio/presweather" className="headLink"><p className="sideQuickNav">PRESENT WEATHER NN</p></Link>
      <p style={{marginTop: "auto", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontWeight:"500"}}>.</p>
      <Link to="/my-portfolio/jsviewhkl" className="headLink"><p className="sideQuickNav">JSVIEWHKL</p></Link>
    </div>
  )
}
export default SideQuickNav;
