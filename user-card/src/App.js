import React from "react";
import "./App.css";
import axios from "axios";
import UserCard, { Retrospect } from "./UserCard";
// import Retrospect from "./Retrospect"

class App extends React.Component {
  // constructor() {
  //     super();
  //     this.state = ({
  //         users: ({})
  //     })
  // }
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    console.log("CDM invoked");
    axios
      .get("https://api.github.com/users/scratchglory")
      .then(res => {
        this.setState({ user: res.data });
      })
      .catch(err => console.log(err));

    axios
      .get("https://api.github.com/users/scratchglory/followers")
      .then(res => {
        this.setState({ followers: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log("Render Invoked");
    return (
      <div className="App">
        <h1>The Secrets of {this.state.user.login}'s Github</h1>
        <Retrospect />
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
