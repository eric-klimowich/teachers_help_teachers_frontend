import React from 'react'

const Button = props => {
  return (
    <button class="ui blue button" onClick={props.action} >{props.text}</button>
  )
}

export default Button
