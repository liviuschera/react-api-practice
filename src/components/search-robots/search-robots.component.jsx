import React, { Fragment, useState } from "react";
import { SearchContext } from "./search-context.component";
export const SearchRobots = props => {
  const [searchField, setSearchField] = useState("");

  console.log(searchField);
  console.log(props.robots);

  return (
    <Fragment>
      <SearchContext.Provider value=""></SearchContext.Provider>
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
