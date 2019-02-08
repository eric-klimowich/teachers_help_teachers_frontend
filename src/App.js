import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'
import ProfileContainer from './ProfileContainer'
import HomePage from './HomePage'
import { setUsers } from './actions'


class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.props.setUsers(users))
  }

  render() {
    return (
      <div>
        {this.props.currentUser ? <ProfileContainer /> : <HomePage />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setUsers: (users) => dispatch(setUsers(users)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
