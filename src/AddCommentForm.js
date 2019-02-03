import React, { Component } from 'react'

class AddCommentForm extends Component {

  state = {
    commentInput: ''
  }

  render() {
    console.log(this.props)
    return (
      <form>
        <input
          type="text"
          value={this.state.commentInput}
        />
        <input type="submit" />
      </form>
    )
  }
}

export default AddCommentForm
