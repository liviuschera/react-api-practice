import React from "react";
import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${props.robot.name}.png`} alt="A robot" />
      <h3>{props.robot.name}</h3>
    </div>
  );
};
