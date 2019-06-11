import React from 'react';
import './App.css';
import FriendsList from './components/friendsList';
import axios from 'axios';
import FriendForm from './components/friendForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends`)
      .then(response => this.setState({friends: response.data}))
      .catch(error => console.log(error))
  }

  addNewFriend = e => {
    e.preventDefault();
    axios.post(`http://localhost:5000/friends`, {name: "Ken", age: 29, email: "ken@growthloop.biz"})
      .then(response => this.setState({friends: response.data}))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <FriendForm addNewFriend={this.addNewFriend} />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
