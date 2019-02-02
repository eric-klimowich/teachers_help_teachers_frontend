import React from 'react'

const CommentCard = props => {
  console.log(props.comment)
  return (
    <div>
      <li>{props.comment.content}</li>
    </div>
  )
}

export default CommentCard
