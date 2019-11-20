import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  async componentDidMount() {
    const monsters = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    ).then(results => results.json());
    this.setState({ monsters });
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
