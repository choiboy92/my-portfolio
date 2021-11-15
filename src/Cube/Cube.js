import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';

class LogoCube extends React.Component {
  render() {
    return (
        <center>
            <div style={{width: 300, height: 300}}>
            <Cube size={300} index="front">
                <div style={{backgroundColor: 'orange', opacity: 0.5}}>
                  <h1 style={{width: '250px', height: '280px'}}>front
                  <a
                    className="App-link"
                    href="https://github.com/choiboy92"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Here's my Github
                  </a>
                  </h1>

                </div>
                <div style={{backgroundColor: 'green', opacity: 0.5}}>
                  <h1 style={{width: '250px', height: '280px'}}>right</h1>
                </div>
                <div style={{backgroundColor: 'blue', opacity: 0.5}}>
                  <h1 style={{width: '250px', height: '280px'}}>back</h1>
                </div>
                <div style={{backgroundColor: 'red', opacity: 0.5}}>
                  <h1 style={{width: '250px', height: '280px'}}>left</h1>
                </div>
                <div style={{backgroundColor: 'purple', opacity: 0.5}}>
                  <h1 style={{width: '250px', height: '280px'}}>top</h1>
                </div>
                <div style={{backgroundColor: 'yellow', opacity: 0.5}}>
                  <h1 style={{width: '250px', height: '280px'}}>bottom</h1>
                </div>
            </Cube>
            </div>
        </center>
    );
  }
}
export default LogoCube
