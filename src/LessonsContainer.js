import React, { Component } from 'react'
import { connect } from 'react-redux'

import LessonsList from './LessonsList'

class LessonsContainer extends Component {

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
    // console.log(this.props)
    // console.log(this.props.lessons)
    // console.log(this.props.comments)
    // console.log(this.props.searchBarInput)
    // console.log(this.props.subjectsToFilter)
    return (
      <LessonsList lessons={this.props.gradesToFilter.length > 0 || this.props.subjectsToFilter.length > 0 ?  this.filterLessonsBySubject().filter(lesson => lesson.title.toLowerCase().includes(this.props.searchBarInput.toLowerCase())) : this.props.lessons.filter(lesson => lesson.title.toLowerCase().includes(this.props.searchBarInput.toLowerCase()))} />
    )
  }
}

const mapStateToProps = state => {
  return {
    gradesToFilter: state.gradesToFilter,
    subjectsToFilter: state.subjectsToFilter,
    searchBarInput: state.searchBarInput
  }
}

export default connect(mapStateToProps)(LessonsContainer)
