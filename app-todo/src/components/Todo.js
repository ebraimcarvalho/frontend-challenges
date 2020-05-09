import React from 'react'

const Todo = (props) => {
  return (
    <div>
      <li>{props.content}</li>
      <button onClick={() => props.handleRemove(props.index)}>Remove</button>
    </div>
  )
}

export default Todo