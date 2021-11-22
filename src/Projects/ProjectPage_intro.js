import React, { useRef, useEffect } from "react";
//import ReactDOM from "react-dom";
//import Divider from './divider.js';

/*const Canvas = props => {

  const canvasRef = useRef(null)

  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#FFFFFF'
    ctx.beginPath()
    ctx.arc(200, 100, 50*Math.sin(frameCount*0.01)**2, 0, 2*Math.PI)
    ctx.fill()
  }

  useEffect(() => {

    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    canvas.style.width ='100%';
    canvas.style.height='100%';
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    //Our draw came here
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw])

  return <canvas ref={canvasRef} {...props}/>
}*/

const Canvas = props => {

  const canvasRef = useRef(null)

  useEffect(() => {

    const canvas = canvasRef.current
    //const context = canvas.getContext('2d')

    canvas.style.width = "100%";
    canvas.style.height= "500px";
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

  }, [])

  return <canvas id={props.id} ref={canvasRef} {...props}/>
}


function ProjectIntro(props) {
  //const BG = props.background;
  return (
    //<div className="landingWrapper" style={{backgroundImage: `url(${props.background})`, backgroundSize: "cover"}}>
    <div className="landingWrapper" >
			<Canvas id={props.id}/>
      <h1><span style={{padding: "0 15px", boxShadow:"inset 0 -15px 0 0 #96c8a2"}}>{props.name}</span></h1>
      <h1><span style={{padding: "0 15px", boxShadow:"inset 0 -15px 0 0 #96c8a2"}}>{props.date}</span></h1>
    </div>
  )
}

export default ProjectIntro;
