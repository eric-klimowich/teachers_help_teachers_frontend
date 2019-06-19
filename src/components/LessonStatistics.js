import React, { Component } from 'react'
import { connect } from 'react-redux'

// import Button from '../components/Button'
// import { setMyLessonsChoiceToFavorites } from '../actions'
// import { setMyLessonsChoiceToMy } from '../actions'

class LessonStatistics extends Component {
  render() {
    // console.log(this.props.myLessonsChoice)
    return (
      <div className="statistics-container" >
        <h3 className="statistics-total__community" >
          Our community has <strong>{this.props.lessons.length} lessons</strong> for you to choose from!
        </h3>
      </div>
    )
  }
}

// You currently have <strong>{this.props.myFavoriteLessons.length} lessons</strong> saved to your Favorites.

// <Button action={this.props.setMyLessonsChoiceToFavorites} text="Click to View Favorites" />
// <h3 className="statistics-total__user" >
//   You have currently submitted <strong>{this.props.myLessons.length} lessons</strong> of your own to the community.
// </h3>
// <Button action={this.props.setMyLessonsChoiceToMy} text="Click to View My Lessons" />

const mapStateToProps = state => {
  return {
    lessons: state.lessons,
    // myLessons: state.myLessons,
    // myFavoriteLessons: state.myFavoriteLessons
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setMyLessonsChoiceToFavorites: () => dispatch(setMyLessonsChoiceToFavorites()),
//     setMyLessonsChoiceToMy: () => dispatch(setMyLessonsChoiceToMy())
//   }
// }

export default connect(mapStateToProps)(LessonStatistics)
