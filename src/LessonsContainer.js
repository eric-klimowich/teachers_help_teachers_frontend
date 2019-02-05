import React, { Component } from 'react'
import { connect } from 'react-redux'

import LessonsList from './LessonsList'
import { setLessons } from './actions'

class LessonsContainer extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/lessons')
      .then(r => r.json())
      .then(lessons => this.props.setLessons(lessons))
  }

  filterLessonsByGrade = () => {
    if (this.props.gradesToFilter.length > 0) {
      return this.props.lessons.filter(lesson => this.props.gradesToFilter.includes(lesson.grade.level))
    } else {
      return this.props.lessons
    }
  }

  filterLessonsBySubjectAndGrade = () => {
    if (this.props.subjectsToFilter.length > 0) {
      return this.filterLessonsByGrade().filter(lesson => this.props.gradesToFilter.includes(lesson.grade.subject))
    } else {
      return this.filterLessonsByGrade()
    }
  }

  render() {
    console.log(this.props.lessons, this.props.gradesToFilter)
    // console.log(this.props.subjectsToFilter)
    console.log(this.props.searchBarInput)
    return (
        <LessonsList lessons={this.props.gradesToFilter.length > 0 || this.props.subjectsToFilter.length > 0 ?  this.filterLessonsBySubjectAndGrade().filter(lesson => lesson.title.includes(this.props.searchBarInput)) : this.props.lessons.filter(lesson => lesson.title.includes(this.props.searchBarInput))} />
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
