import React from 'react'

const LessonCard = props => {
  // console.log(props.lesson)
  return (
    <div key={props.lesson.key} >
      <h4>{props.lesson.title}</h4>
      <p>{props.lesson.description}</p>
      <p>{props.lesson.grade} Grade, {props.lesson.subject}</p>
      <p>Times used: {props.lesson.times_used}</p>
    </div>
  )
}

export default LessonCard
