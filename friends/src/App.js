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

  render() {
    return (
      <div className="App">
        <FriendForm />
        <FriendsList friends={this.state.friends} />
      </div>
    );
  }
}

export default App;
