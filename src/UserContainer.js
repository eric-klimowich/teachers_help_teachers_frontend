import React, { Component } from 'react'
import { connect } from 'react-redux'

import Nav from './Nav'
import UserProfile from './UserProfile'
import LessonsContainer from './LessonsContainer'
import AddLessonForm from './AddLessonForm'
import FilterContainer from './FilterContainer'

class UserContainer extends Component {

  renderUserPage = () => {
    if (this.props.showAddLessonForm) {
      return (
        <div>
          <Nav />
          <UserProfile />
          <AddLessonForm />
          <FilterContainer />
          <LessonsContainer />
        </div>
      )
    }  else {
      return (
        <div>
          <Nav />
          <UserProfile />
          <FilterContainer />
          <LessonsContainer />
        </div>
      )
    }
  }

  render() {
    // console.log(this.props.showAddLessonForm)
    return (
      this.renderUserPage()
    )
  }
}

const mapStateToProps = state => {
  return {
    showAddLessonForm: state.showAddLessonForm
  }
}

export default connect(mapStateToProps)(UserContainer)
