import React, { Component } from 'react'
import { connect } from 'react-redux'

import Nav from './Nav'
import UserProfile from './UserProfile'
import LessonStatistics from './LessonStatistics'
import AddLessonForm from './AddLessonForm'
import FilterContainer from './FilterContainer'
import LessonsContainer from './LessonsContainer'
import Button from './Button'
import { setLessons } from './actions'
import { setMyLessons } from './actions'
import { setFavoriteLessons } from './actions'
import { setMyFavoriteLessons } from './actions'
import { resetMyLessonsChoice } from './actions'
import { resetPickedLesson } from './actions'


class ProfileContainer extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/favorite_lessons')
      .then(r => r.json())
      .then(favoriteLessons => this.props.setFavoriteLessons(favoriteLessons.map(favLesson => favLesson.lesson_id)))

    fetch('http://localhost:3000/api/v1/lessons')
      .then(r => r.json())
      .then(lessons => {
        this.props.setLessons(lessons)
        this.props.setMyLessons(lessons.filter(lesson => lesson.user.user_id === this.props.currentUser.id))
        this.props.setMyFavoriteLessons(lessons.filter(lesson => this.props.favoriteLessons.includes(lesson.id)))
      })
  }

  handleBackFromLessonCard = () => {
    this.props.resetMyLessonsChoice()
    this.props.resetPickedLesson()
  }

  renderProfilePage = () => {
    if (this.props.showAllLessons && this.props.pickedLesson) {
      return (
        <div>
          <Nav />
          <LessonsContainer lessons={this.props.lessons} />
        </div>
      )
    } else if (this.props.showAllLessons) {
      return (
        <div>
          <Nav />
          <FilterContainer />
          <LessonsContainer lessons={this.props.lessons} />
        </div>
      )
    }
    if (this.props.showAddLessonForm) {
      return (
        <div>
          <Nav />
          <AddLessonForm />
        </div>
      )
    } else {
      if (this.props.myLessonsChoice === 'myFavorites') {
        return (
          <div>
            <Nav />
            <UserProfile />
            <LessonsContainer lessons={this.props.myFavoriteLessons} />
            <Button action={this.handleBackFromLessonCard} text="Back to Profile" />
          </div>
        )
      } else if (this.props.myLessonsChoice === 'myLessons') {
        return (
          <div>
            <Nav />
            <UserProfile />
            <LessonsContainer lessons={this.props.myLessons} />
            <Button action={this.handleBackFromLessonCard} text="Back to Profile" />
          </div>
        )
      } else {
        return (
          <div>
            <Nav />
            <UserProfile />
            <LessonStatistics />
          </div>
        )
      }
    }
  }

  render() {
    // console.log(this.props.lessons)
    // console.log(this.props.myLessons)
    // console.log(this.props.favoriteLessons)
    return (
      this.renderProfilePage()
    )
  }
}

const mapStateToProps = state => {
  return {
    lessons: state.lessons,
    myLessons: state.myLessons,
    favoriteLessons: state.favoriteLessons,
    myFavoriteLessons: state.myFavoriteLessons,
    currentUser: state.currentUser,
    showAddLessonForm: state.showAddLessonForm,
    showAllLessons: state.showAllLessons,
    myLessonsChoice: state.myLessonsChoice,
    pickedLesson: state.pickedLesson
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLessons: (lessons) => dispatch(setLessons(lessons)),
    setMyLessons: (myLessons) => dispatch(setMyLessons(myLessons)),
    setFavoriteLessons: (favoriteLessons) => dispatch(setFavoriteLessons(favoriteLessons)),
    setMyFavoriteLessons: (myFavoriteLessons) => dispatch(setMyFavoriteLessons(myFavoriteLessons)),
    resetMyLessonsChoice: () => dispatch(resetMyLessonsChoice()),
    resetPickedLesson: () => dispatch(resetPickedLesson())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)


// Favorite
// <LessonsContainer lessons={this.props.lessons.filter(lesson => this.props.favoriteLessons.includes(lesson.id))} />
// My
// <LessonsContainer lessons={this.props.myLessons} />
