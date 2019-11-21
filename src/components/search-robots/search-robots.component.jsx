import React, { Fragment, useState } from "react";

export const SearchRobots = props => {
  const [searchField, setSearchField] = useState("");

  // const handleKeypress = event => {
  //   this.setState({ searchField: event.target.value });
  // };
  console.log(searchField);
  console.log(props.robots);

  return (
    <Fragment>
      <input
        type="search"
        placeholder="search robots"
        onChange={event => {
          setSearchField(event.target.value);
        }}
      />
    </Fragment>
  );
};
