import React from 'react'

const Skills = ({ title, skill }) => (
  <div className="skills">
    <h3 className="profile__title">{title.toUpperCase()}</h3>
    {skill.map((item, index) => (
      <div key={index}>
        <p className="skills__description">{item.name}</p>
        <progress className="profile__progress" value={item.value.slice(0,-1)} max="100">{item.value}</progress>
        {/* <p width={item.value} className="profile__progress">{item.value}</p> */}
      </div>
    ))}
  </div>
)

export default Skills