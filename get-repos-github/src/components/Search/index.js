import React from 'react';

function Search(props) {
  return (
    <div className='search'>
      <input 
        className='search__input'
        type="text"
        placeholder='Search user'
        value={props.name}
        onChange={props.handleChange}
      />
      <button className='search__button' onClick={props.getSearch}>Search</button>
    </div>
  )
}

export default Search;