import React, { Component } from 'react'

class UserContainer extends Component {

  state = {
    users: [],
    value: "1",
    currentUser: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.setState({ users }))
  }

  selectUser = () => {
    this.setState({
      currentUser: [...this.state.users].find(user => user.id === parseInt(this.state.value))
    })
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    }, () => this.selectUser())
  }

  render() {
    console.log(this.state.currentUser)
    return (
      <form>
        <select value={this.state.value} onChange={this.handleChange} >
          {this.state.users.map(user => <option key={user.id} value={user.id}>{user.first_name}</option>)}
        </select>
      </form>
    )
  }
}

export default UserContainer
