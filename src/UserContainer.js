import React, { Component } from 'react'

class UserContainer extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.setState({ users }))
  }

  render() {
    console.log(this.state.users)
    return <div>In UserContainer</div>
  }
}

export default UserContainer
