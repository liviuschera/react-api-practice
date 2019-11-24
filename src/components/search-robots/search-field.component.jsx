import React, { Fragment } from "react";

export const SearchRobots = ({ placeholder, handleChange }) => {
  return (
    <Fragment>
      <input type="search" placeholder={placeholder} onChange={handleChange} />
    </Fragment>
  );
};
