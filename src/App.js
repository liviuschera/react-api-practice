import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  async componentDidMount() {
    const robots = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then(results => results.json());
    this.setState({ robots });
  }

  render() {
    return (
      <div className="App">
        <CardList robots={this.state.robots}></CardList>
      </div>
    );
  }
}

export default App;
