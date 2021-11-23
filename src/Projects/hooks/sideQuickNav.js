import React from "react";
import { Link } from 'react-router-dom';

function SideQuickNav(props){
  return (
    <div id="sideWrapper">
      <Link to="/appleintern" className="headLink"><p className="sideQuickNav">APPLE</p></Link>
      <p style={{marginTop: "auto", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontWeight:"500"}}>.</p>
      <Link to="/engdes" className="headLink"><p className="sideQuickNav">ENGINEERING DESIGN</p></Link>
      <p style={{marginTop: "auto", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontWeight:"500"}}>.</p>
      <Link to="/neutoy" className="headLink"><p className="sideQuickNav">NEUTOY</p></Link>
      <p style={{marginTop: "auto", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontWeight:"500"}}>.</p>
      <Link to="/kitchen" className="headLink"><p className="sideQuickNav">ACCESSIBLE KITCHENS</p></Link>
      <p style={{marginTop: "auto", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontWeight:"500"}}>.</p>
      <Link to="/presweather" className="headLink"><p className="sideQuickNav">PRESENT WEATHER NN</p></Link>
      <p style={{marginTop: "auto", marginLeft: "auto", marginRight: "auto", textAlign: "center", fontWeight:"500"}}>.</p>
      <Link to="/jsviewhkl" className="headLink"><p className="sideQuickNav">JSVIEWHKL</p></Link>
    </div>
  )
}
export default SideQuickNav;
