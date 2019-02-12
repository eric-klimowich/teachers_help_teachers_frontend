import React, { Component } from 'react'
import { connect } from 'react-redux'

import Login from './Login'
import Logout from './Logout'
import SearchBar from './SearchBar'
import { setLoginChoice } from './actions'
import { showAddLessonForm } from './actions'
import { showAllLessonsPage } from './actions'
import { hideAllLessonsPage } from './actions'
import { showAboutPage } from './actions'
import { resetPickedLesson } from './actions'
import { hideAddLessonForm } from './actions'

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
    this.props.resetPickedLesson()
    this.props.hideAddLessonForm()
  }

  handleShowAboutPage = () => {
    this.props.showAboutPage()
  }

  renderNavBar = () => {
    if (this.props.currentUser && this.props.showAllLessons && this.props.pickedLesson) {
      return (
        <div className="navbar-color" >
          <div className="ui large menu">
            <button className="active item">
              Teachers Help Teachers
            </button>
            <button className="item" onClick={this.handleHideAllLessons} >
              Back to My Profile
            </button>
            <div className="right menu">
              <button className="item" onClick={this.handleShowAboutPage} >
                About
              </button>
              <div className="item">
                <Logout />
              </div>
            </div>
          </div>
        </div>
      )
    } else if (this.props.currentUser && this.props.showAllLessons) {
      return (
        <div>
          <div className="ui large menu">
            <button className="active item navbar-font">
              Teachers Help Teachers
            </button>
            <button className="item navbar-font" onClick={this.handleHideAllLessons} >
              Back to My Profile
            </button>
            <div className="right menu">
              <button className="item">
              <SearchBar />
              </button>
              <button className="item navbar-font" onClick={this.handleShowAboutPage} >
                About
              </button>
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
            <button className="active item navbar-font">
              Teachers Help Teachers
            </button>
            <button className="item navbar-font" onClick={this.handleShowAllLessons} >
              View All Lessons
            </button>
            <div className="right menu">
              <button className="item navbar-font" onClick={this.handleAddLessonFormToggle} >
                Add a Lesson
              </button>
              <button className="item navbar-font" onClick={this.handleShowAboutPage} >
                About
              </button>
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
            <button className="active item navbar-font">
              Teachers Help Teachers
            </button>
            <div className="right menu">
              <button className="item navbar-font" onClick={this.handleShowAboutPage} >
                About
              </button>
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
    showAllLessons: state.showAllLessons,
    pickedLesson: state.pickedLesson
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLoginChoice: (loginChoice) => dispatch(setLoginChoice(loginChoice)),
    showAddLessonForm: () => dispatch(showAddLessonForm()),
    showAllLessonsPage: () => dispatch(showAllLessonsPage()),
    hideAllLessonsPage: () => dispatch(hideAllLessonsPage()),
    showAboutPage: () => dispatch(showAboutPage()),
    resetPickedLesson: () => dispatch(resetPickedLesson()),
    hideAddLessonForm: () => dispatch(hideAddLessonForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
