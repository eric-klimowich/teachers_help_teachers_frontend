import React from 'react'

const AbridgedLessonCard = props => {
  // console.log(props)
  // console.log(props.comments)
  return (
    <div className="ui card">
      <div className="content">
        <i className="right floated like icon"></i>
        <i className="right floated star icon"></i>
        <div className="header">{props.lesson.title}</div>
          <div className="description">
            <p>{props.lesson.description}</p>
          </div>
      </div>
      <div className="extra content">
        <span className="left floated like">
        <i className="like icon"></i>
          Times Used: {props.lesson.times_used}
        </span>
        <span className="right floated star">
        <i className="star icon"></i>
          Comments: {props.comments.length}
        </span>
      </div>
      <div onClick={() => props.handlePickedLesson(props.lesson)} className="ui bottom attached button">
        <i className="add icon"></i>
        Click to See Details
      </div>
    </div>
  )
}

export default AbridgedLessonCard


// <p>{props.lesson.grade.level} Grade, {props.lesson.grade.subject}</p>