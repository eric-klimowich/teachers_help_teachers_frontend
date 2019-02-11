import React, { Component } from 'react'
import { connect } from 'react-redux'

import { logoutUser } from './actions'
import { resetGradesToFilter } from './actions'
import { resetSubjectsToFilter } from './actions'
import { resetSearchBarInput } from './actions'
import { resetPickedLesson } from './actions'
import { resetLoginChoice } from './actions'
import { resetMyLessonsChoice } from './actions'
import { hideAddLessonForm } from './actions'
import { hideAllLessonsPage } from './actions'

class Logout extends Component {

  handleLogout = () => {
    this.props.logoutUser()
    this.props.resetGradesToFilter()
    this.props.resetSubjectsToFilter()
    this.props.resetSearchBarInput()
    this.props.resetPickedLesson()
    this.props.resetLoginChoice()
    this.props.resetMyLessonsChoice()
    this.props.hideAddLessonForm()
    this.props.hideAllLessonsPage()
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
    resetPickedLesson: () => dispatch(resetPickedLesson()),
    resetLoginChoice: () => dispatch(resetLoginChoice()),
    resetMyLessonsChoice: () => dispatch(resetMyLessonsChoice()),
    hideAddLessonForm: () => dispatch(hideAddLessonForm()),
    hideAllLessonsPage: () => dispatch(hideAllLessonsPage())
  }
}

export default connect(null, mapDispatchToProps)(Logout)
