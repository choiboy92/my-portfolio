import React, { useRef, useEffect } from "react";

function Canvas(props){
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
export default Canvas;
