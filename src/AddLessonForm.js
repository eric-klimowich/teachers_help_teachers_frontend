import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from './Button'
import { addLesson } from './actions'
import { hideAddLessonForm } from './actions'

const grades = ["K", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"]
const subjects = ["ELA", "Math", "Science", "Social Studies", "Art", "Music", "PE"]

class AddLessonForm extends Component {

  state = {
    title: '',
    description: '',
    file: '',
    fileName: '',
    rating: null,
    timesUsed: 0,
    grade: '',
    subject: ''
  }

  handleChange = event => {
    console.log(event.target.files)
    console.log(event.target.value)
    if (event.target.files) {
      this.setState({
        [event.target.name]: event.target.files[0]
      })
    } else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]);
    reader.onerror = error => reject(error);
  });
}

  handleSubmitWithFile = fileData => {
    fetch('http://localhost:3000/api/v1/grade_levels', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        grade: this.state.grade,
        user_id: this.props.currentUser.id
      })
    })
      .then(r => r.json())
      .then(addedGrade => {
        console.log(addedGrade)
        fetch('http://localhost:3000/api/v1/grade_subjects', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            subject: this.state.subject,
            grade_level_id: addedGrade.id
          })
        })
        .then(r => r.json())
        .then(addedSubject => {
          console.log(addedSubject)
          fetch('http://localhost:3000/api/v1/lessons', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            },
            body: JSON.stringify({
              title: this.state.title,
              description: this.state.description,
              file: fileData,
              file_name: this.state.fileName,
              times_used: this.state.timesUsed,
              grade_subject_id: addedSubject.id
            })
          })
          .then(r => r.json())
          .then(addedLesson => this.props.addLesson(addedLesson))
        })
      })
  }

  convertToBase64 = () => {
    this.getBase64(this.state.file).then(data => this.handleSubmitWithFile(data))
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state.file)
    this.setState({
      fileName: this.state.file.name
    }, () => this.convertToBase64())
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div className="ui labeled input">
            <div className="ui blue label">
              Title:
            </div>
            <input
              type="text"
              name="title"
              value={this.state.title}
              placeholder="lesson title...."
              onChange={this.handleChange}
            />
          </div>

          <br />
          <br />

          <textarea
            name="description"
            value={this.state.description}
            placeholder="lesson description...."
            onChange={this.handleChange}
          />

          <br />
          <br />

          <input
            type="file"
            name="file"
            // value={this.state.file}
            placeholder="lesson file...."
            onChange={this.handleChange}
          />

          <br />
          <br />

          <select
            name="grade"
            value={this.state.grade}
            onChange={this.handleChange}
          >
            <option>Grade</option>
            {grades.map(grade => {
              return (
                <option key={grade} value={grade} >{grade}</option>
              )})
            }
          </select>

          <br />
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
          <br />

          <input type="submit" ></input>

        </form>
        <Button action={this.props.hideAddLessonForm} text="Back to Profile" />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    grades: state.grades,
    subjects: state.subjects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLesson: (lesson) => dispatch(addLesson(lesson)),
    hideAddLessonForm: () => dispatch(hideAddLessonForm())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddLessonForm)
