import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addComment } from './actions'

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
    // console.log(this.state)
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
      .then(newComment => this.props.addComment(newComment))
    this.setState({
      commentInput: '',
      commentRating: null
    })
  }

  render() {
    // console.log(this.props)
    // console.log(this.state)
    return (
      <form className="marker-font" onSubmit={this.handleCommentSubmit} >
        What did you think of this lesson? Leave a comment here:
        <br />
        <input
          name="commentInput"
          type="text"
          value={this.state.commentInput}
          onChange={this.handleCommentInputChange}
        />
        <br />
        <br />
        Rate this lesson: (5 highest, 1 lowest)
        <br/>
        <select name="commentRating" onChange={this.handleCommentInputChange}>
          <option>Choose</option>
          {ratingOptions.map(rating => <option key={rating} value={rating} >{rating}</option>)}
        </select>
        <br />
        <br />
        <input className="ui blue button" type="submit" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addComment: (newComment) => dispatch(addComment(newComment))
  }
}

export default connect(null, mapDispatchToProps)(AddCommentForm)
