import React, { Component } from 'react'

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
    console.log(this.state.lessons)
    return (
      <div>
        In LessonsContainer
      </div>
    )
  }
}

export default LessonsContainer
