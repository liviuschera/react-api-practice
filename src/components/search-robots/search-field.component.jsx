import React, { Fragment } from "react";

export const SearchRobots = ({ placeholder, filterRobots }) => {
  return (
    <Fragment>
      <input type="search" placeholder={placeholder} onChange={filterRobots} />
    </Fragment>
  );
};
