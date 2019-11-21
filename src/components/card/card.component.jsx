import React from "react";
import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card">
      <img
        src={`https://robohash.org/${props.robot.name}.png&size=150x150`}
        alt="A robot"
      />
      <h3>{props.robot.name}</h3>
      <p>{props.robot.company.catchPhrase}</p>
    </div>
  );
};
