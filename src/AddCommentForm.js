import React, { Component } from 'react'

const ratingOptions = [1, 2, 3, 4, 5]

class AddCommentForm extends Component {

  state = {
    commentInput: '',
    commentRating: null
  }

  handleCommentInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCommentSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/api/v1/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        content: this.state.commentInput,
        rating: parseInt(this.state.commentRating),
        user_id: this.props.userId,
        lesson_id: this.props.lessonId
      })
    })
      .then(r => r.json())
      .then(newComment => console.log(newComment))
    this.setState({
      commentInput: '',
      commentRating: null
    })
  }

  render() {
    console.log(this.props)
    console.log(this.state)
    return (
      <form onSubmit={this.handleCommentSubmit} >
        <textarea
          name="commentInput"
          value={this.state.commentInput}
          onChange={this.handleCommentInputChange}
        />
        <br />
        <select name="commentRating" onChange={this.handleCommentInputChange}>
          Rating: {ratingOptions.map(rating => <option key={rating} value={rating} >{rating}</option>)}
        </select>
        <br />
        <input type="submit" />
      </form>
    )
  }
}

export default AddCommentForm
