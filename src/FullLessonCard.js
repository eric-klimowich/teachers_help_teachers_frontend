import React, { Component } from 'react'
import { connect } from 'react-redux'

import CommentsList from './CommentsList'
import AddCommentForm from './AddCommentForm'
import Button from './Button'
import { resetPickedLesson } from './actions'
import { addUsedLessonId } from './actions'

class FullLessonCard extends Component {

  state = {
    timesUsed: this.props.lesson.times_used
  }

  handleAddUsed = () => {
    // console.log('clicked')
    this.props.addUsedLessonId(this.props.lesson.id)
    this.setState({
      timesUsed: this.state.timesUsed + 1
    }, () => this.updateLessonTimesUsed())
  }

  updateLessonTimesUsed = () => {
    fetch(`http://localhost:3000/api/v1/lessons/${this.props.lesson.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        times_used: this.state.timesUsed
      })
    })
  }

  render() {
    // console.log(this.props.pickedLesson)
    // console.log(this.props.currentUser.id)
    // console.log(this.props.lesson.user.user_id)
    // console.log(this.state)
    return(
      <div className="ui centered card" key={this.props.lesson.key} >
        <div className="content">
          <div className="header marker-font">{this.props.lesson.title}</div>
        </div>
        <div className="content">
          <h4 className="ui sub header marker-font">Lesson Description</h4>
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary marker-font">
                   {this.props.lesson.description}
                   <br />
                   <br />
                   <p className="marker-font" >Grade: {this.props.lesson.grade.level}, Subject: {this.props.lesson.grade.subject}</p>
                   <a href={`http://localhost:3000/api/v1/lessons/${this.props.lesson.id}`}>{this.props.lesson.file_name}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="extra content">
          {this.props.currentUser.id === this.props.lesson.user.user_id ? null : <button className={this.props.buttonColor} onClick={() => this.props.favoriteAction(this.props.lesson)} >{this.props.favoriteButtonText}</button>}<br /><br />
          {this.props.currentUser.id === this.props.lesson.user.user_id ?
            <span className="marker-font" >Times used: {this.state.timesUsed}</span> :
            this.props.usedLessonIds.includes(this.props.lesson.id) ?
            <div className="marker-font">
              You've used this lesson! Awesome!
            </div> :
            <div>
              <button className="ui blue button" onClick={this.handleAddUsed}>
                Have you used this lesson?
              </button>
              <br />
              <p className="marker-font" >Times used: {this.state.timesUsed}</p>
            </div>}
        </div>
        <div className="extra content" >
          <CommentsList comments={this.props.lesson.comments} />
        </div>
        <div className="extra content" >
          <AddCommentForm lessonId={this.props.lesson.id} userId={this.props.currentUser.id} />
        </div>
        <Button text="Back to Lessons" action={this.props.resetPickedLesson} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    pickedLesson: state.pickedLesson,
    favoriteLessonIds: state.favoriteLessonIds,
    usedLessonIds: state.usedLessonIds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetPickedLesson: () => dispatch(resetPickedLesson()),
    addUsedLessonId: (lessonId) => dispatch(addUsedLessonId(lessonId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullLessonCard)

// this.props.favoriteLessonIds.includes(this.props.lesson.id) ? <button>Already in your favorites</button> :
