import React, {useEffect} from "react";
import LogoCube from './Cube/Cube.js';

function HomePage() {
  useEffect(() => {
    window.homePage_anime();
  }, []);
  return (
    <div className="HomePage">
      <div className="decoLabel" style={{borderBottom: "1px solid white"}}>
        <p style={{marginBottom:"auto", fontSize:"30px", marginLeft:"10px"}}>my-portfolio</p>
      </div>
      <div style={{flexDirection:"column", justifyContent:"center"}}>
        <div id="rotateLabel" style={{justifyContent:"center", marginBottom:"20px"}}>
          <p style={{textAlign:"center"}}>---ROTATE ME---</p>
        </div>
        <LogoCube></LogoCube>
      </div>

    </div>
  )
}

export default HomePage;
