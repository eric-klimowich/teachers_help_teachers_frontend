import React, { Component } from 'react'
import { connect } from 'react-redux'

import Login from './Login'
import Logout from './Logout'
import SearchBar from './SearchBar'
import { setLoginChoice } from './actions'
import { showAddLessonForm } from './actions'
import { showAllLessonsPage } from './actions'
import { hideAllLessonsPage } from './actions'

class Nav extends Component {

  handleLoginChoice = event => {
    // console.log(event.target.value)
    this.props.setLoginChoice(event.target.value)
  }

  handleAddLessonFormToggle = () => {
    // console.log('clicked')
    this.props.showAddLessonForm()
  }

  handleShowAllLessons = () => {
    this.props.showAllLessonsPage()
  }

  handleHideAllLessons = () => {
    this.props.hideAllLessonsPage()
  }

  renderNavBar = () => {
    if (this.props.currentUser && this.props.showAllLessons) {
      return (
        <div>
          <div className="ui large menu">
            <button className="active item">
              Teachers Help Teachers
            </button>
            <button className="item" onClick={this.handleHideAllLessons} >
              Back to My Profile
            </button>
            <button className="item">
              <SearchBar />
            </button>
            <div className="right menu">
              <div className="item">
                <Logout />
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.props.currentUser) {
      return (
        <div>
          <div className="ui large menu">
            <button className="active item">
              Teachers Help Teachers
            </button>
            <button className="item" onClick={this.handleAddLessonFormToggle} >
              Add a Lesson
            </button>
            <button className="item" onClick={this.handleShowAllLessons} >
              View All Lessons
            </button>
            <div className="right menu">
              <div className="item">
                <Logout />
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="ui large menu">
            <button className="active item">
              Teachers Help Teachers
            </button>
            <div className="right menu">
              <div className="item">
                <button
                  className="ui primary button"
                  value="signup"
                  onClick={this.handleLoginChoice}
                >
                  Sign Up
                </button>
                <div className="item">
                  <button
                    className="ui primary button"
                    value="login"
                    onClick={this.handleLoginChoice}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Login />
        </div>
      )
    }
  }

  render() {
    // console.log(this.props)
    return (
      this.renderNavBar()
    )
  }
}

const mapStateToProps = state => {
  return {
    loginChoice: state.loginChoice,
    currentUser: state.currentUser,
    showAllLessons: state.showAllLessons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLoginChoice: (loginChoice) => dispatch(setLoginChoice(loginChoice)),
    showAddLessonForm: () => dispatch(showAddLessonForm()),
    showAllLessonsPage: () => dispatch(showAllLessonsPage()),
    hideAllLessonsPage: () => dispatch(hideAllLessonsPage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
