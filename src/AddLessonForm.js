import React, { Component } from 'react'

const ratings = [1, 2, 3, 4, 5]
const grades = ["K", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"]
const subjects = ["Math", "ELA", "Science", "Social Studies", "PE", "Art", "Music"]

class AddLessonForm extends Component {

  state = {
    title: '',
    description: '',
    rating: null,
    file: '',
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

  render() {
    console.log(this.state)
    return (
      <div>
        <form>
          <input
            type="text"
            name="title"
            placeholder="lesson title...."
            onChange={this.handleChange}
          />
          <br />
          <textarea
            name="description"
            placeholder="lesson description...."
          />
          <br />
          <input
            name="file"
            placeholder="lesson file...."
          />
          <br />
          <select>
            {ratings.map(rating => <option key={rating} >{rating}</option>)}
          </select>
          <br />
          <select>
            {grades.map(rating => <option key={rating} >{rating}</option>)}
          </select>
          <br />
          <select>
            {subjects.map(rating => <option key={rating} >{rating}</option>)}
          </select>
          <br />
          <input type="submit" ></input>
        </form>
      </div>
    )
  }
}

export default AddLessonForm
