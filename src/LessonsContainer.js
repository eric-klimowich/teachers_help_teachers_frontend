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

  render() {
    // console.log(this.props)
    return (
        <LessonsList lessons={this.props.lessons} />
    )
  }
}

const mapStateToProps = state => {
  return {
    lessons: state.lessons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLessons: (lessons) => dispatch(setLessons(lessons))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonsContainer)
