import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addNewUser } from './actions'
import { setCurrentUser } from './actions'

const grades = ["K", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"]
const subjects = ["ELA", "Math", "Science", "Social Studies", "Art", "Music", "PE"]

class NewUser extends Component {

  state = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    gradeTeaching: '',
    subjectTeaching: ''
  }

  handleChangeUserInput = event => {
    // console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmitNewUser = (event, newUser) => {
    event.preventDefault()
    // console.log(newUser)
    // console.log(newUser.username)
    // console.log(newUser.password)
    fetch('http://localhost:3000/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        username: newUser.username,
        password: newUser.password,
        first_name: newUser.firstName,
        last_name: newUser.lastName,
        grade_teaching: newUser.gradeTeaching,
        subject_teaching: newUser.subjectTeaching,
      })
    })
      .then(r => r.json())
      .then(addedUser => {
        // console.log(addedUser)
        this.props.addNewUser(addedUser)
        this.props.setCurrentUser(addedUser)
      })
      this.setState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        gradeTeaching: '',
        subjectTeaching: ''
      })
  }

  render() {
    // console.log(this.props)
    return (
      <div className="background-picture" >
        <div className="ui middle aligned center aligned grid" >
          <div className="column" >
            <form className="ui large form" onSubmit={(event) => this.handleSubmitNewUser(event, this.state)}>
              <div className="ui stacked segment" >
                <h2 className="ui blue image header" >
                  <div className="content" >
                    Sign up for an account
                  </div>
                </h2>
                <div className="field" >
                  <div className="ui left icon input" >
                    <i className="user circle icon" ></i>
                    <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    placeholder="enter username..."
                    onChange={this.handleChangeUserInput}
                    />
                  </div>
                </div>
                <div className="field" >
                  <div className="ui left icon input" >
                    <i className="lock icon" ></i>
                    <input
                      type="text"
                      name="password"
                      value={this.state.password}
                      placeholder="enter password..."
                      onChange={this.handleChangeUserInput}
                    />
                  </div>
                </div>
                <div className="field" >
                  <div className="ui left icon input" >
                    <i className="user icon" ></i>
                    <input
                      type="text"
                      name="firstName"
                      value={this.state.firstName}
                      placeholder="enter first name..."
                      onChange={this.handleChangeUserInput}
                    />
                  </div>
                </div>
                <div className="field" >
                  <div className="ui left icon input" >
                    <i className="user icon" ></i>
                    <input
                      type="text"
                      name="lastName"
                      value={this.state.lastName}
                      placeholder="enter last name..."
                      onChange={this.handleChangeUserInput}
                    />
                  </div>
                </div>
                <div className="field" >
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
                </div>
                <div className="field" >
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
                </div>
                <input
                  className="ui fluid large blue submit button"
                  type="submit"
                  value="Sign me up"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewUser: (newUser) => dispatch(addNewUser(newUser)),
    setCurrentUser: (currentUser) => dispatch(setCurrentUser(currentUser))
  }
}

export default connect(null, mapDispatchToProps)(NewUser)
