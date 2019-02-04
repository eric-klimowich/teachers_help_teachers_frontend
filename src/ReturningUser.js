import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setUsers } from './actions'
import { setCurrentUser } from './actions'

class ReturningUser extends Component {

  state = {
    username: '',
    password: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.props.setUsers(users))
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <div className="ui labeled input">
          <div className="ui green label">
            Username:
          </div>
          <input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="Enter username..."
            onChange={this.handleChange}
          />
        </div>
        <br />
        <br />
        <div className="ui labeled input">
          <div className="ui green label">
            Password:
          </div>
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Enter password..."
            onChange={this.handleChange}
          />
        </div>
        <br />
        <br />
        <input
          className="ui red button"
          type="submit"
        />
      </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReturningUser)
