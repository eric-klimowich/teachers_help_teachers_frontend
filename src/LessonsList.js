import React from 'react'
import LessonCard from './LessonCard'

const LessonsList = props => {
  // console.log(props.comments)
  return (
    <div>
      {props.lessons.map(lesson => {
        return (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            comments={props.comments.filter(comment => comment.lesson_id === lesson.id)}
            handleIncreaseTimesUsed={props.handleIncreaseTimesUsed}
          />
        )
      })}
    </div>
  )
}

export default LessonsList
