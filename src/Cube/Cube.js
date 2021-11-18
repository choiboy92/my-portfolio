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
                  <h1 style={{}}>Apple</h1>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'green'}}>
                  <h1 style={{}}>Engineering Design</h1>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'blue'}}>
                  <h1 style={{}}>Neutoy</h1>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'red'}}>
                  <h1 style={{}}>Accessible kitchens</h1>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'purple'}}>
                  <h1 style={{}}>Present Weather Neural Network</h1>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'yellow'}}>
                  <h1 style={{}}>JsviewHKL</h1>
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
