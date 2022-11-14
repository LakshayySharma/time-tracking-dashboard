import React from "react";
import data from "../data.json";
import Card from "./Card";
const Cards = (props) => {
  // console.log(props.tf);

  return (
    <>
      {data.map((item) => {
        return <Card tf={props.tf} data={item} />;
      })}
    </>
  );
};

export default Cards;
