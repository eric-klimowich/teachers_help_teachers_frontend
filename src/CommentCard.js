import React from 'react'

const CommentCard = props => {
  console.log(props.comment)
  return (
    <div class="ui comments">
      <div class="comment">
        <a class="avatar">
        <img src="/images/avatar/small/stevie.jpg"/>
        </a>
        <div class="content">
          <a class="author">Stevie Feliciano</a>
          <div class="metadata">
            <div class="date">2 days ago</div>
              <div class="rating">
                <i class="star icon"></i>
                  5 Faves
              </div>
            </div>
          <div class="text">
            {props.comment.content}
        </div>
      </div>
    </div>
  </div>
  )
}

export default CommentCard
