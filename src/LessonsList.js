import React from 'react'
import AbridgedLessonCard from './AbridgedLessonCard'

const LessonsList = props => {
  // console.log(props.lessons)
  return (
    <div>
      {props.lessons.map(lesson => {
        return (
          <AbridgedLessonCard
            key={lesson.id}
            lesson={lesson}
            comments={lesson.comments ? lesson.comments : []}
          />
        )
      })}
    </div>
  )
}

export default LessonsList
