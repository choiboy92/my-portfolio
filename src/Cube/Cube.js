import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';
import {Link} from 'react-router-dom';

class LogoCube extends React.Component {
  render() {
    return (
      <div style={{width: 400, height: 400}}>
      <Cube size={400} index="front">
          <div className="cubeFaceItem" style={{backgroundColor: 'black'}}>
            <Link to="/my-portfolio/appleintern" className="projLink"><h1 className="cubeFaceText">APPLE</h1></Link>
          </div>
          <div className="cubeFaceItem" style={{backgroundColor: 'black'}}>
            <Link to="/my-portfolio/engdes" className="projLink"><h1 className="cubeFaceText">ENGINEERING DESIGN</h1></Link>
          </div>
          <div className="cubeFaceItem" style={{backgroundColor: 'black'}}>
            <Link to="/my-portfolio/neutoy" className="projLink"><h1 className="cubeFaceText">NEUTOY</h1></Link>
          </div>
          <div className="cubeFaceItem" style={{backgroundColor: 'black'}}>
            <Link to="/my-portfolio/kitchen" className="projLink"><h1 className="cubeFaceText">ACCESSIBLE KITCHENS</h1></Link>
          </div>
          <div className="cubeFaceItem" style={{backgroundColor: 'black'}}>
            <Link to="/my-portfolio/presweather" className="projLink"><h1 className="cubeFaceText">PRESENT WEATHER NEURAL NETWORK</h1></Link>
          </div>
          <div className="cubeFaceItem" style={{backgroundColor: 'black'}}>
            <Link to="/my-portfolio/jsviewhkl" className="projLink"><h1 className="cubeFaceText">RUTHERFORD APPLETON LABORATORY</h1></Link>
          </div>
      </Cube>
      </div>
    );
  }
}
export default LogoCube

/*<a
  className="App-link"
  href="https://github.com/choiboy92"
  target="_blank"
  rel="noopener noreferrer"
>
  Here's my Github
</a>*/
