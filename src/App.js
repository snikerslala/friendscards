import React, { Component } from "react";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import CardList from "./components/CardList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ friends: users }));
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredFriends = this.state.friends.filter(
      friend =>
        friend.username
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        friend.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    );

    if (this.state.friends.length === 0) {
      return <h1 className="tc calisto f2 light-blue">Loading</h1>;
    }
    return (
      <div className="calisto tc">
        <h1 className="f1 underline ttu light-blue">My Cat Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList friends={filteredFriends} />
        </Scroll>
      </div>
    );
  }
}

export default App;
