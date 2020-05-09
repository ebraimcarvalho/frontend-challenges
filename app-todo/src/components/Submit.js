import React, { useState } from 'react'

const Submit = (props) => {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const submitForm = (e) => {
    e.preventDefault()
    props.handleAdd(text)
    setText('')
  }

  return (
    <div>
      <form onSubmit={submitForm} >
        <input type="text" placeholder="Enter Item" value={text} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Submit