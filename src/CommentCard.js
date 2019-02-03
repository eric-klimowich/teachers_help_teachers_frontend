import React from 'react'

const CommentCard = props => {
  // console.log(props.comment)
  return (
    <div className="ui comments">
      <div className="comment">
        <a className="avatar">
        <img src="/images/avatar/small/stevie.jpg"/>
        </a>
        <div className="content">
          <a className="author">Stevie Feliciano</a>
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
