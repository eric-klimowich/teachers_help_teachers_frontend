import React, { Component } from 'react'
import UserProfile from './UserProfile'
import LessonsContainer from './LessonsContainer'
import { connect } from 'react-redux'
import { setUsers } from './actions'

class UserContainer extends Component {


  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users')
      .then(r => r.json())
      .then(users => this.props.setUsers(users))
  }

  render() {
    // console.log(this.props)
    return (
      <div>
        <UserProfile />
        <LessonsContainer />
      </div>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
