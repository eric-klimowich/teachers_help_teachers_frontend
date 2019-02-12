import React from 'react'

const CommentCard = props => {
  // console.log(props.comment)
  const date = new Date(props.comment.created_at).toLocaleDateString()
  // console.log(date)
  return (
    <div className="ui comments">
      <div className="comment">
        <div className="content">
          <p className="author">{props.comment.userinfo.first_name} {props.comment.userinfo.last_name}
          </p>
          <div className="metadata">
            <div className="date">{date}</div>
          </div>
          <div className="text">
            {props.comment.content}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentCard
