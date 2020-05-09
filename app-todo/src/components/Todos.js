import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div>
      <ul>
        {props.tasks.map((todo, index) => (
          <Todo key={index} index={index} content={todo} handleRemove={props.handleRemove} />
        ))}
      </ul>
    </div>
  )
}

export default Todos