import React from 'react'

const CommentCard = props => {
  // console.log(props.comment)
  return (
    <div className="ui comments">
      <div className="comment">
        <p className="avatar">
        <img src="/images/avatar/small/stevie.jpg" alt="comment-user" />
        </p>
        <div className="content">
          <p className="author">{props.comment.userinfo.first_name} {props.comment.userinfo.last_name}</p>
          <div className="metadata">
            <div className="date">I don't know when.</div>
              <div className="rating">
                <i className="star icon"></i>
                  5 Faves
              </div>
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
