import React from 'react'

import UserProfile from './UserProfile'
import LessonsContainer from './LessonsContainer'
import AddLessonForm from './AddLessonForm'

const UserContainer = props => {
    return (
      <div>
        <UserProfile />
        <AddLessonForm />
        <LessonsContainer />
      </div>
    )
}

export default UserContainer
