import React from 'react'
import CommentCard from './CommentCard'

const CommentsList = props => {
  // console.log(props.comments)
  return (
    <div>
        {props.comments.map(comment => <CommentCard key={comment.id} comment={comment} />)}
    </div>
  )
}

export default CommentsList
