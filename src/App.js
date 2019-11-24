import React, { useState, useEffect } from "react";
// import { render } from "react-dom";
import { CardList } from "./components/card-list/card-list.component";
import { SearchRobots } from "./components/search-robots/search-field.component";
// import { SearchContext } from "./components/search-robots/search-context.component";
import "./App.css";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: []
//     };
//   }

//   async componentDidMount() {
//     const robots = await fetch(
//       "https://jsonplaceholder.typicode.com/users"
//     ).then(results => results.json());
//     this.setState({ robots });
//   }

//   render() {
//     console.log(`sear ${this.state.searchField}`);

//     return (
//       <div className="App">
//         <SearchRobots robots={this.state.robots}></SearchRobots>
//         <CardList robots={this.state.robots}></CardList>
//       </div>
//     );
//   }
// }

// export default App;

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    async function getUsers(params) {
      const fetchedRobots = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then(results => results.json());
      let filteredRots = fetchedRobots.filter(robot =>
        robot.name.toLowerCase().includes(searchField.toLowerCase())
      );
      setRobots(filteredRots);
    }
    getUsers();
  }, [searchField]);

  const handleChange = event => setSearchField(event.target.value);

  return (
    <div className="App">
      <SearchRobots placeholder="search robot" handleChange={handleChange} />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
