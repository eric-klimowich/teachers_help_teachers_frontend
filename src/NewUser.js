import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addNewUser } from './actions'

class NewUser extends Component {

  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChangeUserInput = event => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmitNewUser = (event, newUser) => {
    event.preventDefault()
    // console.log(newUser)
    // console.log(newUser.username)
    // console.log(newUser.password)
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        username: newUser.username,
        password: newUser.password,
        first_name: newUser.firstName,
        last_name: newUser.lastName,
      })
    })
      .then(r => r.json())
      .then(addedUser => {
        // console.log(addedUser)
        this.props.addNewUser(addedUser)
      })
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={(event) => this.handleSubmitNewUser(event, this.state)}>
        <div className="ui labeled input">
          <div className="ui blue label">
            Username:
          </div>
          <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="enter username..."
          onChange={this.handleChangeUserInput}
          />
        </div>
        <br />
        <br />
        <div className="ui labeled input">
          <div className="ui blue label">
            Password:
          </div>
          <input
            type="text"
            name="password"
            value={this.state.password}
            placeholder="enter password..."
            onChange={this.handleChangeUserInput}
          />
        </div>
        <br />
        <br />
        <div className="ui labeled input">
          <div className="ui blue label">
            First Name:
          </div>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            placeholder="enter first name..."
            onChange={this.handleChangeUserInput}
          />
        </div>
        <br />
        <br />
        <div className="ui labeled input">
          <div className="ui blue label">
            Last Name:
          </div>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            placeholder="enter last name..."
            onChange={this.handleChangeUserInput}
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

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewUser: (newUser) => dispatch(addNewUser(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)
