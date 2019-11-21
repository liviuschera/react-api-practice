import React, { useState, useEffect } from "react";
// import { render } from "react-dom";
import { CardList } from "./components/card-list/card-list.component";
import { SearchRobots } from "./components/search-robots/search-robots.component";
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

  useEffect(() => {
    async function getUsers(params) {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then(results => results.json());
      setRobots(result);
    }
    getUsers();
  });

  return (
    <div className="App">
      <SearchRobots robots={robots}></SearchRobots>
      <CardList robots={robots}></CardList>
    </div>
  );
};

export default App;
