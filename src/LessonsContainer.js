import React, { Component } from 'react'
import LessonsList from './LessonsList'

class LessonsContainer extends Component {

  state = {
    lessons: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/lessons')
      .then(r => r.json())
      .then(lessons => this.setState({ lessons }))
  }

  render() {
    // console.log(this.state.lessons)
    return (
      <div>
        <LessonsList allLessons={this.state.lessons} />
      </div>
    )
  }
}

export default LessonsContainer
