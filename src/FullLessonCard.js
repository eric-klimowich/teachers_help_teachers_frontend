import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommentsList from './CommentsList'
import AddCommentForm from './AddCommentForm'
import Button from './Button'
import { resetPickedLesson } from './actions'

class FullLessonCard extends Component {
  render() {
    // console.log(this.props)
    // console.log(props.comments)
    return (
      <div key={this.props.lesson.key} >
        <h4>{this.props.lesson.title}</h4>
        <p>{this.props.lesson.description}</p>
        <p>{this.props.lesson.grade.level} Grade, {this.props.lesson.grade.subject}</p>
        <p>Times used: {this.props.lesson.times_used}</p>
        <CommentsList comments={this.props.lesson.comments} />
        <AddCommentForm lessonId={this.props.lesson.id} userId={this.props.currentUser.id} />
        <Button text="Back to Lessons" action={this.props.resetPickedLesson} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetPickedLesson: () => dispatch(resetPickedLesson())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullLessonCard)
