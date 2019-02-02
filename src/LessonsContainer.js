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

  filterLessons = () => {
    const filteredLessons = this.props.lessons.filter(lesson => this.props.subjectsToFilter.includes(lesson.grade.subject))
    // console.log(filteredLessons)
    return filteredLessons
  }

  render() {
    // console.log(this.props.lessons)
    // console.log(this.props.subjectsToFilter)
    return (
        <LessonsList lessons={this.props.subjectsToFilter.length > 0 ?  this.filterLessons() : this.props.lessons} />
    )
  }
}

const mapStateToProps = state => {
  return {
    lessons: state.lessons,
    subjectsToFilter: state.subjectsToFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLessons: (lessons) => dispatch(setLessons(lessons))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonsContainer)
