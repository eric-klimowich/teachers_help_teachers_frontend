import React from 'react'

const UserProfile = props => {
  // console.log(props.currentUser)
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

export default UserProfile
