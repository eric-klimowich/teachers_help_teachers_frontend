import React from 'react'

const LessonCard = props => {
  // console.log(props.comments)
  return (
    <div key={props.lesson.key} >
      <h4>{props.lesson.title}</h4>
      <p>{props.lesson.description}</p>
      <p>{props.lesson.grade} Grade, {props.lesson.subject}</p>
      <p onClick={() => props.handleIncreaseTimesUsed(props.lesson.id)} >Times used: {props.lesson.times_used}</p>
      <ul>
        {props.comments.map(comment => <li key={comment.id} >{comment.content}</li>)}
      </ul>
    </div>
  )
}

export default LessonCard
