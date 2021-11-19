import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';
import {Link} from 'react-router-dom';

class LogoCube extends React.Component {
  render() {
    return (
            <div style={{width: 400, height: 400}}>
            <Cube size={400} index="front">
                <div className="cubeFaceItem" style={{backgroundColor: 'orange',}}>
                  <Link to="/appleintern" className="projLink"><h1>Apple</h1></Link>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'green'}}>
                  <Link to="/engdes" className="projLink"><h1 style={{}}>Engineering Design</h1></Link>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'blue'}}>
                  <Link to="/neutoy" className="projLink"><h1 style={{}}>Neutoy</h1></Link>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'red'}}>
                  <Link to="/kitchen" className="projLink"><h1 style={{}}>Accessible kitchens</h1></Link>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'purple'}}>
                  <Link to="/presweather" className="projLink"><h1 style={{}}>Present Weather Neural Network</h1></Link>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'yellow'}}>
                  <Link to="/jsviewhkl" className="projLink"><h1 style={{}}>JsviewHKL</h1></Link>
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
