import React from 'react';
import './App.css';
import FriendsList from './components/friendsList';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    console.log("CDM");
    fetch('server.js')
      .then(response => response.json())
      .then(myJson => console.log(JSON.stringify(myJson)))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;
