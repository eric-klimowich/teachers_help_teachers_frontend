import React, { Component } from 'react'
import { connect } from 'react-redux'

import Nav from './components/Nav'
import UserProfile from './UserProfile'
import LessonStatistics from './LessonStatistics'
import AddLessonForm from './forms/AddLessonForm'
import FilterContainer from './containers/FilterContainer'
import LessonsContainer from './containers/LessonsContainer'
import Button from './components/Button'
import { setLessons } from './actions'
import { setMyLessons } from './actions'
import { setFavoriteLessons } from './actions'
import { setMyFavoriteLessons } from './actions'
import { resetMyLessonsChoice } from './actions'
import { resetPickedLesson } from './actions'
import { addLessonToMyFavoriteLessons } from './actions'
import { setFavoriteLessonIds } from './actions'
import { removeLessonFromMyFavoriteLessons } from './actions'
import { removeLessonIdFromFavoriteLessonIds } from './actions'
import { addLessonToFavoriteLessons } from './actions'
import { addLessonToFavoriteLessonIds } from './actions'


class ProfileContainer extends Component {

  componentDidMount() {
    // fetch('http://localhost:3000/api/v1/favorite_lessons')
    //   .then(r => r.json())
    //   .then(favoriteLessons => {
    //     // console.log(favoriteLessons)
    //     return favoriteLessons.filter(favLesson => favLesson.user_id === this.props.currentUser.id)
    //   })
    //   .then(myFavLessons => {
    //     // console.log(myFavLessons)
    //     this.props.setFavoriteLessons(myFavLessons)
    //     this.props.setFavoriteLessonIds(myFavLessons.map(favLesson => favLesson.lesson_id))
    //   })

    fetch('http://localhost:3000/api/v1/lessons')
      .then(r => r.json())
      .then(lessons => {
        this.props.setLessons(lessons)
        // this.props.setMyLessons(lessons.filter(lesson => lesson.user.user_id === this.props.currentUser.id))
        // this.props.setMyFavoriteLessons(lessons.filter(lesson => this.props.favoriteLessonIds.includes(lesson.id)))
      })
  }

  handleBackFromLessonCard = () => {
    this.props.resetMyLessonsChoice()
    this.props.resetPickedLesson()
  }

  favoriteALesson = (lesson) => {
    console.log('clicked')
    console.log(lesson)
    fetch('http://localhost:3000/api/v1/favorite_lessons/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        lesson_id: lesson.id,
        user_id: this.props.currentUser.id
      })
    })
      .then(r => r.json())
      .then(addedFavLesson => {
        console.log(addedFavLesson)
        this.props.addLessonToFavoriteLessons(addedFavLesson)
        this.props.addLessonToFavoriteLessonIds(addedFavLesson.lesson_id)
      })
    this.props.addLessonToMyFavoriteLessons(lesson)
    console.log(this.props.myFavoriteLessons)
    this.props.resetPickedLesson()
  }

  removeLessonFromFavorites = (lesson) => {
    // console.log('clicked')
    // console.log(lesson)
    const favoriteLessonToRemove = this.props.favoriteLessons.find(favLesson => favLesson.lesson_id === lesson.id)
    // console.log(favoriteLessonToRemove)
    this.props.removeLessonFromMyFavoriteLessons(favoriteLessonToRemove)
    this.props.removeLessonIdFromFavoriteLessonIds(favoriteLessonToRemove)
    fetch(`http://localhost:3000/api/v1/favorite_lessons/${favoriteLessonToRemove.id}`, {
      method: 'DELETE'
    })
    this.props.resetPickedLesson()
  }

  renderProfilePage = () => {
    if (this.props.showAllLessons && this.props.pickedLesson) {
      return (
        <div>
          <Nav />
          <LessonsContainer
            lessons={this.props.lessons}
            favoriteAction={this.favoriteALesson}
            favoriteButtonText="Add to Favorites"
            buttonColor="ui green button"
          />
        </div>
      )
    } else if (this.props.showAllLessons) {
      return (
        <div>
          <Nav />
          <FilterContainer />
          <LessonsContainer
            lessons={this.props.lessons}
            favoriteAction={this.favoriteALesson}
            favoriteButtonText="Add to Favorites"
            buttonColor="ui green button"
          />
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
            <Button action={this.handleBackFromLessonCard} text="Back to Profile" />
            <LessonsContainer
              lessons={this.props.myFavoriteLessons}
              favoriteAction={this.removeLessonFromFavorites}
              favoriteButtonText="Remove from Favorites"
              buttonColor="ui red button"
            />
          </div>
        )
      } else if (this.props.myLessonsChoice === 'myLessons') {
        return (
          <div>
            <Nav />
            <UserProfile />
            <Button action={this.handleBackFromLessonCard} text="Back to Profile" />
            <LessonsContainer lessons={this.props.myLessons} />
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
    // console.log(this.props.lessons)
    // console.log(this.props.myLessons)
    // console.log(this.props.favoriteLessons)
    // console.log(this.props.favoriteLessonIds)
    // console.log(this.props.myFavoriteLessons)
    return (
      <div>
      <FilterContainer />
      <LessonsContainer />
      </div>
    )
  }
}
// this.renderProfilePage()

const mapStateToProps = state => {
  return {
    lessons: state.lessons,
    myLessons: state.myLessons,
    favoriteLessons: state.favoriteLessons,
    favoriteLessonIds: state.favoriteLessonIds,
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
    resetPickedLesson: () => dispatch(resetPickedLesson()),
    addLessonToMyFavoriteLessons: (lesson) => dispatch(addLessonToMyFavoriteLessons(lesson)),
    setFavoriteLessonIds: (lessonIds) => dispatch(setFavoriteLessonIds(lessonIds)),
    removeLessonFromMyFavoriteLessons: (lesson) => dispatch(removeLessonFromMyFavoriteLessons(lesson)),
    removeLessonIdFromFavoriteLessonIds: (lesson) => dispatch(removeLessonIdFromFavoriteLessonIds(lesson)),
    addLessonToFavoriteLessons: (addedFavLesson) => dispatch(addLessonToFavoriteLessons(addedFavLesson)),
    addLessonToFavoriteLessonIds: (addedFavLesson) => dispatch(addLessonToFavoriteLessonIds(addedFavLesson))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
