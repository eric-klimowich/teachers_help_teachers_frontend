import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setGrades } from './actions'
import { addGradesToFilter } from './actions'
import { removeGradesToFilter } from './actions'

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
      <div>
        <form>
          {this.props.grades.map(grade => {
            return(
              <label key={grade.id} >
                {grade.grade}
                <input
                  type="checkbox"
                  name={grade.grade}
                  value={grade.grade}
                  checked={this.state.checked}
                  onChange={this.handleCheckedGrades}
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
