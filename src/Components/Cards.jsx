import React from "react";
import data from "../data.json";
import Card from "./Card";
const Cards = () => {
  console.log(data);
  return (
    <>
      {data.map((item) => {
        return <Card />;
      })}
    </>
  );
};

export default Cards;
