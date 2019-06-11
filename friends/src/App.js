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
    axios.post(`http://localhost:5000/friends`, {
      name: document.getElementById("name-input").value,
      age: document.getElementById("age-input").value,
      email: document.getElementById("email-input").value})
      .then(response => this.setState({friends: response.data}))
      .catch(error => console.log(error));
    document.getElementById("name-input").value = "";
    document.getElementById("age-input").value = "";
    document.getElementById("email-input").value = "";
  }

  deleteFriend(friendId) {
    axios.delete(`http://localhost:5000/friends/${friendId}`)
    .then(response => this.setState({friend: response.data}))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <FriendForm addNewFriend={this.addNewFriend} />
        <FriendsList friends={this.state.friends} deleteFriend={this.deleteFriend}/>
      </div>
    );
  }
}

export default App;
