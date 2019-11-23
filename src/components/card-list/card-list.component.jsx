import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = props => {
  console.log(`cardlist : ${props}`);

  return (
    <div className="card-list">
      {props.robots.map(robot => {
        return <Card key={robot.id} robot={robot}></Card>;
      })}
    </div>
  );
};
