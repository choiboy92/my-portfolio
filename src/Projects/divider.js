import React from "react";

const ColoredLine = ({ color }) => (
    <vr
        style={{
            marginTop: "50px",
            marginBottom: "50px",
            marginLeft:"30%",
            marginRight:"30%",
            color: color,
            backgroundColor: color,
            height: 2
        }}
    />
);

function Divider(props) {
  return (
    <ColoredLine color = {props.color}/>
  )
}

export default Divider;
