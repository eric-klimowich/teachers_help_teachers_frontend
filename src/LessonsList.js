import React from 'react'
import LessonCard from './LessonCard'

const LessonsList = props => {
  console.log(props.lessons)
  return (
    <div>
      {props.lessons.map(lesson => {
        return (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            comments={lesson.comments}
          />
        )
      })}
    </div>
  )
}

export default LessonsList
