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
          <p className="author">Stevie Feliciano</p>
          <div className="metadata">
            <div className="date">2 days ago</div>
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
