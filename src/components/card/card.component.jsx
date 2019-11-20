import React from "react";
import "./card.styles.css";

export const Card = props => {
  return <div className="card">{props.monster.name}</div>;
};
