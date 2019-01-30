import React, { Component } from 'react';
import './App.css';
import UserContainer from './UserContainer'

class App extends Component {

  state = {
    users: [],
    lessons: [],
    currentUser: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.setState({ users }))

    fetch('http://localhost:3000/api/v1/lessons')
      .then(r => r.json())
      .then(lessons => this.setState({ lessons }))
  }

  handleSelectedUser = event => {
    this.setState({
      currentUser: [...this.state.users].find(user => user.id === parseInt(event.target.value))
    })
  }

  render() {
    return (
      <div>
        In App
        <UserContainer
          users={this.state.users}
          lessons={this.state.lessons}
          handleSelectedUser={this.handleSelectedUser}
          currentUser={this.state.currentUser}
        />
      </div>
    );
  }
}

export default App;
