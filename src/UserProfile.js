import React from 'react'
import { connect } from 'react-redux'

const UserProfile = props => {
  if (props.currentUser) {
    return (
      <div>
        <h1>Hello, {props.currentUser.first_name}!</h1>
        <p>Currently teaching: {props.currentUser.grade_teaching} Grade, {props.currentUser.subject_teaching} Classes.</p>
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
