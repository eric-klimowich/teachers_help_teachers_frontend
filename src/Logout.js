import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logoutUser } from './actions'
import { resetGradesToFilter } from './actions'
import { resetSubjectsToFilter } from './actions'
import { resetSearchBarInput } from './actions'
import { resetPickedLesson } from './actions'

class Logout extends Component {

  handleLogout = () => {
    this.props.logoutUser()
    this.props.resetGradesToFilter()
    this.props.resetSubjectsToFilter()
    this.props.resetSearchBarInput()
    this.props.resetPickedLesson()
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
    logoutUser: () => dispatch(logoutUser()),
    resetGradesToFilter: () => dispatch(resetGradesToFilter()),
    resetSubjectsToFilter: () => dispatch(resetSubjectsToFilter()),
    resetSearchBarInput: () => dispatch(resetSearchBarInput()),
    resetPickedLesson: () => dispatch(resetPickedLesson())
  }
}

export default connect(null, mapDispatchToProps)(Logout)
