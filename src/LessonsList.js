import React from 'react'
import LessonCard from './LessonCard'

const LessonsList = props => {
  // console.log(props)
  return (
    <div>
      {props.allLessons.map(lesson => <LessonCard lesson={lesson} />)}
    </div>
  )
}

export default LessonsList
