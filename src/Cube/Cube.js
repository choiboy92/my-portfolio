import * as React from 'react';
import './Cube.css'
import Cube from 'react-3d-cube';

class LogoCube extends React.Component {
  render() {
    return (
            <div style={{width: 300, height: 300}}>
            <Cube size={300} index="front">
                <div className="cubeFaceItem" style={{backgroundColor: 'orange',}}>
                  <h1 style={{}}>Drag and rotate me</h1>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'green'}}>
                  <h1 style={{}}>right</h1>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'blue'}}>
                  <h1 style={{}}>back</h1>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'red'}}>
                  <h1 style={{}}>left</h1>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'purple'}}>
                  <h1 style={{}}>top</h1>
                </div>
                <div className="cubeFaceItem" style={{backgroundColor: 'yellow'}}>
                  <h1 style={{}}>bottom</h1>
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
