import React from 'react'

const Header = (props) => {
  return (
    <div>
      <header>
      <h3>You have {props.numTodo} Todos</h3>
      </header>
    </div>
  )
}

export default Header