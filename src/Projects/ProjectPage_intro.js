import React from "react"

function ProjectIntro(props) {
  return (
    <div>
      <h1><span style={{padding: "0 15px", boxShadow:"inset 0 -15px 0 0 #96c8a2"}}>{props.name}</span></h1>
    </div>
  )
}

export default ProjectIntro;
