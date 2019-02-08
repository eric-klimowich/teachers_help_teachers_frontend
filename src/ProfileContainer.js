import React, { Component } from 'react'
import { connect } from 'react-redux'

import Nav from './Nav'
import UserProfile from './UserProfile'
import AddLessonForm from './AddLessonForm'
import FilterContainer from './FilterContainer'
import LessonsContainer from './LessonsContainer'
import { setLessons } from './actions'
import { setMyLessons } from './actions'
import { setFavoriteLessons } from './actions'


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
      })
  }

  renderProfilePage = () => {
    if (this.props.showAllLessons) {
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
          <UserProfile />
          <AddLessonForm />
        </div>
      )
    } else {
      return (
        <div>
          <Nav />
          <UserProfile />
          <FilterContainer />
          Favorite
          <LessonsContainer lessons={this.props.lessons.filter(lesson => this.props.favoriteLessons.includes(lesson.id))} />
          My
          <LessonsContainer lessons={this.props.myLessons} />
        </div>
      )
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
    currentUser: state.currentUser,
    showAddLessonForm: state.showAddLessonForm,
    showAllLessons: state.showAllLessons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLessons: (lessons) => dispatch(setLessons(lessons)),
    setMyLessons: (myLessons) => dispatch(setMyLessons(myLessons)),
    setFavoriteLessons: (favoriteLessons) => dispatch(setFavoriteLessons(favoriteLessons))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
