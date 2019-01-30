import React from 'react'
import LessonsList from './LessonsList'

const LessonsContainer = props => {
    // console.log(this.state.lessons)
  return (
    <div>
      <LessonsList lessons={props.lessons} />
    </div>
  )
}

export default LessonsContainer
