import React, { Component } from 'react'
import { connect } from 'react-redux'

import AbridgedLessonCard from './AbridgedLessonCard'
import FullLessonCard from './FullLessonCard'
import { setPickedLesson } from './actions'

class LessonsList extends Component {

  handlePickedLesson = (currentLesson) => {
    this.props.setPickedLesson(currentLesson)
  }

  renderLessons = () => {
    if (this.props.pickedLesson) {
      return (
        <FullLessonCard
          lesson={this.props.pickedLesson}
          favoriteAction={this.props.favoriteAction}
          favoriteButtonText={this.props.favoriteButtonText}
        />
      )
    } else {
      return (
        <div className="ui grid" >
          {this.props.lessons.map(lesson => {
            return (
              <AbridgedLessonCard
                key={lesson.id}
                lesson={lesson}
                comments={lesson.comments ? lesson.comments : []}
                handlePickedLesson={this.handlePickedLesson}
              />
            )
          })}
        </div>
      )
    }
  }

  render() {
    // console.log(props.lessons)
    // console.log(this.props.pickedLesson)
    return (
      this.renderLessons()
    )
  }
}

const mapStateToProps = state => {
  return {
    pickedLesson: state.pickedLesson
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPickedLesson: (currentLesson) => dispatch(setPickedLesson(currentLesson))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonsList)
