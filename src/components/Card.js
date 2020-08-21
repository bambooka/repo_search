import React from "react";

function Card(props){
  return  <div key={props.index} style={{background: "lightblue"}}>
    <h1>{props.data.name}</h1>
    <p>{props.data.description}</p>
    <h4>{props.data.language}</h4>
    <h6>{console.log(props.data.private)}</h6>
  </div>
}

export default Card;