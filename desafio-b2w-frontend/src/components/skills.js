import React from 'react'

const Skills = ({ title, skill }) => (
  <div>
    <h3>{title}</h3>
    {skill.map((item, index) => (
      <div key={index}>
        <p>{item.name}</p>
        <p>{item.value}</p>
      </div>
    ))}
  </div>
)

export default Skills