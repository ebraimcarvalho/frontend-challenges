import React from 'react';

function Search(props) {
  return (
    <div>
      <input 
        type="text"
        placeholder='Text here'
        value={props.name}
        onChange={props.handleChange}
      />
      <button onClick={props.getSearch}>Search</button>
    </div>
  )
}

export default Search;