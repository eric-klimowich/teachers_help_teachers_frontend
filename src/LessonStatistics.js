import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from './components/Button'
import { setMyLessonsChoiceToFavorites } from './actions'
import { setMyLessonsChoiceToMy } from './actions'

class LessonStatistics extends Component {
  render() {
    // console.log(this.props.myLessonsChoice)
    return (
      <div className="ui container text-container" >
        <h3 className="chalkboard-writing" >
          Our community has <strong>{this.props.lessons.length} lessons</strong> for you to choose from!
          To view all available lessons, click "View All Lessons" above.
          You currently have <strong>{this.props.myFavoriteLessons.length} lessons</strong> saved to your Favorites.
        </h3>
        <Button action={this.props.setMyLessonsChoiceToFavorites} text="Click to View Favorites" />
        <h3 className="chalkboard-writing" >
          You have currently submitted <strong>{this.props.myLessons.length} lessons</strong> of your own to the community.
        </h3>
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
