import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setCurrentUser } from './actions'

class ReturningUser extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  // handleSubmitReturningUser = (event, loginInput) => {
  //     event.preventDefault()
  //     // console.log(loginInput)
  //     const userExists = this.state.users.find(user => user.username === loginInput.username)
  //     if (userExists) {
  //       if (loginInput.password === userExists.password) {
  //         this.setState({
  //           currentUser: userExists
  //         })
  //       }
  //     }
  //   }

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
    setCurrentUser: (currentUser) => dispatch(setCurrentUser(currentUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReturningUser)
