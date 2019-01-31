import React, { Component } from 'react';
import './App.css';
import UserContainer from './UserContainer'
import { connect } from 'react-redux'
import { setUsers } from './actions'

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.props.setUsers(users))

    // fetch('http://localhost:3000/api/v1/lessons')
    //   .then(r => r.json())
    //   .then(lessons => console.log(lessons))
    //
    // fetch('http://localhost:3000/api/v1/comments')
    //   .then(r => r.json())
    //   .then(comments => this.setState({ comments }))
  }

  // handleSelectedUser = event => {
  //   this.setState({
  //     currentUser: [...this.state.users].find(user => user.id === parseInt(event.target.value))
  //   })
  // }

  // handleIncreaseTimesUsed = (id) => {
  //   // console.log('clicked')
  //   console.log(id)
  //   const lessonsCopy = [...this.state.lessons]
  //   const lessonToChange = lessonsCopy.find(lesson => lesson.id === id)
  //   console.log(lessonToChange)
  //   lessonToChange.times_used = lessonToChange.times_used + 1
  //   this.setState({ lessons: lessonsCopy })
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        In App
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUsers: (users) => dispatch(setUsers(users))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);





// <UserContainer
// users={this.props.users}
// />






// lessons={this.state.lessons}
// comments={this.state.comments}
// handleSelectedUser={this.handleSelectedUser}
// currentUser={this.state.currentUser}
// handleIncreaseTimesUsed={this.handleIncreaseTimesUsed}
