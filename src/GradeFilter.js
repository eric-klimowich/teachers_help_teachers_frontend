import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setGrades } from './actions'
import { addGradesToFilter } from './actions'
import { removeGradesToFilter } from './actions'

const grades = ["K", "1st", "2nd", "3rd", "4th"]

class GradeFilter extends Component {

  state = {
    isChecked: false,
    gradesChecked: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/grade_levels')
      .then(r => r.json())
      .then(grades => {this.props.setGrades(grades)})
  }

  handleCheckedGrades = (event) => {
    // console.log(event.target.checked)
    if (event.target.checked === true && !this.state.gradesChecked.includes(event.target.value)) {
      const gradesCheckedCopy = [...this.state.gradesChecked, event.target.value]
      this.setState({
        gradesChecked: gradesCheckedCopy
      }, () => this.props.addGradesToFilter(this.state.gradesChecked))
    }
    if (event.target.checked === false) {
      this.setState({
        gradesChecked: this.state.gradesChecked.filter(input => input !== event.target.value)
      }, () => this.props.removeGradesToFilter(this.state.gradesChecked))
    }

  }

  render() {
    // console.log('From local state: ', this.state.gradesChecked)
    return (
      <div className="ui container" >
        <form>
        <div className="ui grid" >
          {grades.map(grade => {
            return(
              <div className="ui checkbox two wide column" key={grade} >
                <input
                  type="checkbox"
                  name={grade}
                  value={grade}
                  checked={this.state.checked}
                  onChange={this.handleCheckedGrades}
                >
                </input>
                <label>{grade}</label>
              </div>
            )
          })}
        </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    grades: state.grades
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setGrades: (grades) => dispatch(setGrades(grades)),
    addGradesToFilter: (gradeIds) => dispatch(addGradesToFilter(gradeIds)),
    removeGradesToFilter: (gradeIds) => dispatch(removeGradesToFilter(gradeIds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GradeFilter)
