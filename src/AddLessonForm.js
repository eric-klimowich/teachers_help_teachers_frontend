import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addLesson } from './actions'

const grades = ["K", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"]
const subjects = ["ELA", "Math", "Science", "Social Studies", "Art", "Music", "PE"]

class AddLessonForm extends Component {

  state = {
    title: '',
    description: '',
    file: '',
    rating: null,
    timesUsed: 0,
    grade: '',
    subject: ''
  }

  handleChange = event => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    // console.log('submitted')
    // this.props.addLesson(this.state)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <input
            type="text"
            name="title"
            value={this.state.title}
            placeholder="lesson title...."
            onChange={this.handleChange}
          />

          <br />

          <textarea
            name="description"
            value={this.state.description}
            placeholder="lesson description...."
            onChange={this.handleChange}
          />

          <br />

          <input
            type="text"
            name="file"
            value={this.state.file}
            placeholder="lesson file...."
            onChange={this.handleChange}
          />

          <br />

          <select
            name="grade"
            value={this.state.grade}
            onChange={this.handleChange}
          >
            <option>Grade</option>
            {this.props.grades.map(grade => {
              return (
                <option key={grade.id} value={grade.id} >{grade.grade}</option>
              )})
            }
          </select>

          <br />

          <select
            name="subject"
            value={this.state.subject}
            onChange={this.handleChange}
          >
            <option>Subject</option>
            {subjects.map(subject => {
              return (
                <option key={subject} value={subject} >{subject}</option>
              )})
            }
          </select>

          <br />

          <input type="submit" ></input>

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    grades: state.grades,
    subjects: state.subjects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLesson: (lesson) => dispatch(addLesson(lesson))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLessonForm)
