import Card from "./Card";
import React from "react";

function CardList(props) {
  console.log(props)
  return(
    <>
      {props.allRepo.length > 0 ? props.allRepo.map((item, index) => <Card key={index} data={item}/>): <h1>no repo ;(</h1> }
    </>
  )
}

export default CardList;