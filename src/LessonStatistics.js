import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from './Button'
import { setMyLessonsChoiceToFavorites } from './actions'
import { setMyLessonsChoiceToMy } from './actions'

class LessonStatistics extends Component {
  render() {
    // console.log(this.props.myLessonsChoice)
    return (
      <div>
        Our community has <strong>{this.props.lessons.length} lessons</strong> for you to choose from!
        <br />
        To view all available lessons, click "View All Lessons" above.
        <br />
        <br />
        You currently have {this.props.myFavoriteLessons.length} lessons saved to your Favorites.
        <br />
        <Button action={this.props.setMyLessonsChoiceToFavorites} text="Click to View Favorites" />
        <br />
        <br />
        You have currently submitted {this.props.myLessons.length} lessons of your own to the community.
        <br />
        <Button action={this.props.setMyLessonsChoiceToMy} text="Click to View My Lessons" />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    lessons: state.lessons,
    myLessons: state.myLessons,
    myFavoriteLessons: state.myFavoriteLessons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setMyLessonsChoiceToFavorites: () => dispatch(setMyLessonsChoiceToFavorites()),
    setMyLessonsChoiceToMy: () => dispatch(setMyLessonsChoiceToMy())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonStatistics)
