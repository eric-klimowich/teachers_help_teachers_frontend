import React, { Component } from 'react'
import { connect } from 'react-redux'

import LessonsList from '../LessonsList'
import { setLessons } from '../actions'

class LessonsContainer extends Component {

  componentDidMount() {

    fetch('http://localhost:3000/api/v1/lessons')
      .then(r => r.json())
      .then(lessons => {
        this.props.setLessons(lessons)
      })
  }

  filterLessonsByGrade = () => {
    if (this.props.gradesToFilter.length > 0) {
      return this.props.lessons.filter(lesson => this.props.gradesToFilter.includes(lesson.grade.level))
    }
    return this.props.lessons
  }

  filterLessonsBySubject = () => {
    if (this.props.subjectsToFilter.length > 0) {
      return this.filterLessonsByGrade().filter(lesson => this.props.subjectsToFilter.includes(lesson.grade.subject))
    }
    return this.filterLessonsByGrade()
  }

  render() {
    return (
      <LessonsList lessons={this.props.gradesToFilter.length > 0 || this.props.subjectsToFilter.length > 0 ? this.filterLessonsBySubject().filter(lesson => lesson.title.toLowerCase().includes(this.props.searchBarInput.toLowerCase()) || lesson.description.toLowerCase().includes(this.props.searchBarInput.toLowerCase())) : this.props.lessons.filter(lesson => lesson.title.toLowerCase().includes(this.props.searchBarInput.toLowerCase()) || lesson.description.toLowerCase().includes(this.props.searchBarInput.toLowerCase()))} favoriteAction={this.props.favoriteAction} favoriteButtonText={this.props.favoriteButtonText} buttonColor={this.props.buttonColor} />
    )
  }
}

const mapStateToProps = state => {
  return {
    lessons: state.lessons,
    gradesToFilter: state.gradesToFilter,
    subjectsToFilter: state.subjectsToFilter,
    searchBarInput: state.searchBarInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLessons: (lessons) => dispatch(setLessons(lessons))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonsContainer)
