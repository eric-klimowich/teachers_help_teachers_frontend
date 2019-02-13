import React from 'react'

const Button = props => {
  return (
    <button className="ui red button" onClick={props.action} >{props.text}</button>
  )
}

export default Button
