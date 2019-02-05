import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logoutUser } from './actions'

class Logout extends Component {

  handleLogout = () => {
    this.props.logoutUser()
  }

  render() {
    return (
      <button
        className="ui primary button"
        onClick={this.handleLogout}
      >
        Logout
      </button>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(null, mapDispatchToProps)(Logout)
