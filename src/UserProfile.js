import React from 'react'
import { connect } from 'react-redux'

const UserProfile = props => {
  if (props.currentUser) {
    return (
      <div className="ui container" >
        <h1 className="chalkboard-writing" >Hello, {props.currentUser.first_name}!</h1>
        <p className="chalkboard-writing" >Currently teaching: {props.currentUser.grade_teaching} Grade, {props.currentUser.subject_teaching} Classes.</p>
        <br />
      </div>
    )
  } else {
    return <div>Please choose a user.</div>
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(UserProfile)
