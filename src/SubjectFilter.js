import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setSubjects } from './actions'
import { addSubjectsToFilter } from './actions'
import { removeSubjectsToFilter } from './actions'

const subjects = ["ELA", "Math", "Science", "Social Studies", "Art", "Music", "PE"]

class SubjectFilter extends Component {

  state = {
    isChecked: false,
    subjectsChecked: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/grade_subjects')
      .then(r => r.json())
      .then(subjects => {this.props.setSubjects(subjects)})
  }

  handleCheckedSubjects = (event) => {
    // console.log(event.target.checked)
    if (event.target.checked === true && !this.state.subjectsChecked.includes(event.target.value)) {
      const subjectsCheckedCopy = [...this.state.subjectsChecked, event.target.value]
      this.setState({
        subjectsChecked: subjectsCheckedCopy
      }, () => this.props.addSubjectsToFilter(this.state.subjectsChecked))
    }
    if (event.target.checked === false) {
      this.setState({
        subjectsChecked: this.state.subjectsChecked.filter(input => input !== event.target.value)
      }, () => this.props.removeSubjectsToFilter(this.state.subjectsChecked))
    }

  }

  render() {
    // console.log(this.props)
    // console.log(this.state.subjectsChecked)
    // console.log('From local state: ', this.state.subjectsChecked)
    // console.log('From global state: ', this.props.filteredStuff)
    return (
      <div className="ui container" >
        <form>
          {subjects.map(subject => {
            return(
              <label key={subject} >
                {subject}
                <input
                  type="checkbox"
                  name={subject}
                  value={subject}
                  checked={this.state.checked}
                  onChange={this.handleCheckedSubjects}
                >
                </input>
              </label>
            )
          })}
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    subjects: state.subjects
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSubjects: (subjects) => dispatch(setSubjects(subjects)),
    addSubjectsToFilter: (subjectIds) => dispatch(addSubjectsToFilter(subjectIds)),
    removeSubjectsToFilter: (subjectIds) => dispatch(removeSubjectsToFilter(subjectIds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubjectFilter)
