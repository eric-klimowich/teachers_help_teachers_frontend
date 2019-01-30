import React, { Component, Fragment } from 'react'
import UserProfile from './UserProfile'
import LessonsContainer from './LessonsContainer'

class UserContainer extends Component {

  state = {
    users: [],
    currentUser: null
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.setState({ users }))
  }

  handleChange = event => {
    this.setState({
      currentUser: [...this.state.users].find(user => user.id === parseInt(event.target.value))
    })
  }

  render() {
    // console.log(this.state.currentUser)
    return (
      <Fragment>
        <form>
          <select value={this.state.value} onChange={this.handleChange} >
            {this.state.users.map(user => <option key={user.id} value={user.id}>{user.first_name}</option>)}
          </select>
        </form>
        <UserProfile currentUser={this.state.currentUser} />
        <LessonsContainer />
      </Fragment>
    )
  }
}

export default UserContainer
