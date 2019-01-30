import React, { Component } from 'react';
import './App.css';
import UserContainer from './UserContainer'

class App extends Component {

  state = {
    users: [],
    lessons: [],
    comments: [],
    currentUser: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.setState({ users }))

    fetch('http://localhost:3000/api/v1/lessons')
      .then(r => r.json())
      .then(lessons => this.setState({ lessons }))

    fetch('http://localhost:3000/api/v1/comments')
      .then(r => r.json())
      .then(comments => this.setState({ comments }))
  }

  handleSelectedUser = event => {
    this.setState({
      currentUser: [...this.state.users].find(user => user.id === parseInt(event.target.value))
    })
  }

  handleIncreaseTimesUsed = (id) => {
    // console.log('clicked')
    console.log(id)
    const lessonsCopy = [...this.state.lessons]
    const lessonToChange = lessonsCopy.find(lesson => lesson.id === id)
    console.log(lessonToChange)
    lessonToChange.times_used = lessonToChange.times_used + 1
    this.setState({ lessons: lessonsCopy })
  }

  render() {
    return (
      <div>
        In App
        <UserContainer
          users={this.state.users}
          lessons={this.state.lessons}
          comments={this.state.comments}
          handleSelectedUser={this.handleSelectedUser}
          currentUser={this.state.currentUser}
          handleIncreaseTimesUsed={this.handleIncreaseTimesUsed}
        />
      </div>
    );
  }
}

export default App;
