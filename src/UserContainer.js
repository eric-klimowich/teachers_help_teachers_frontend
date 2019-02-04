import React from 'react'

import Nav from './Nav'
import UserProfile from './UserProfile'
import LessonsContainer from './LessonsContainer'
import AddLessonForm from './AddLessonForm'
import FilterContainer from './FilterContainer'

const UserContainer = props => {
    return (
      <div>
        <Nav />
        <UserProfile />
        <AddLessonForm />
        <FilterContainer />
        <LessonsContainer />
      </div>
    )
}

export default UserContainer
