import React from 'react'

const AbridgedLessonCard = props => {
  // console.log(props)
  // console.log(props.comments)
  return (
    <div className="four wide column" >
      <div className="ui card abridged">
        <div className="content">
          <div className="header marker-font">{props.lesson.title}</div>
            <div className="description marker-font">
              <p>{props.lesson.description}</p>
            </div>
        </div>
        <div className="extra content">
          <span className="left floated like marker-font">
          <i className="like icon"></i>
            Times Used: {props.lesson.times_used}
          </span>
          <span className="right floated edit marker-font">
          <i className="edit icon"></i>
            Comments: {props.comments.length}
          </span>
        </div>
        <div onClick={() => props.handlePickedLesson(props.lesson)} className="ui red bottom attached button">
          <i className="add icon"></i>
          Click to See Details
        </div>
      </div>
    </div>
  )
}

export default AbridgedLessonCard


// <p>{props.lesson.grade.level} Grade, {props.lesson.grade.subject}</p>
