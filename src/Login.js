import React, { Component } from 'react'

import { connect } from 'react-redux'
import { setUsers } from './actions'
import { setCurrentUser } from './actions'

class Login extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.props.setUsers(users))
  }

  handleChange = event => {
    // console.log(event.target.value)
    const currentUser = this.props.users.find(user => user.id === parseInt(event.target.value))
    this.props.setCurrentUser(currentUser)
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <select onChange={this.handleChange} >
          <option>All</option>
          {this.props.users.map(user => <option key={user.id} value={user.id} >{user.first_name}</option>)}
        </select>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUsers: (users) => dispatch(setUsers(users)),
    setCurrentUser: (currentUser) => dispatch(setCurrentUser(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
