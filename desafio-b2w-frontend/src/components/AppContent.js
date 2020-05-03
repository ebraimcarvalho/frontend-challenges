import React from 'react'
import Infos from './infos'

const AppContent = (state) => {
  return (
    <div className="container">
      <div className="left">
        {/* <img src={state.image} alt=""/> */}
        <h1>{state.name}</h1>
        <p>{state.profession}</p>
        <hr/>

        <div>
          <h3>Profile</h3>
          <p>{state.profile}</p>
        </div>

        <div>
          <h3>Contact</h3>
          {Object.keys(state.contact).map((item, index) => (
            <p key={index}>{state.contact[item]}</p>
          ))}
        </div>

        <div>
          <h3>Skills</h3>
          {state.skills.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>

      </div>
      <div className="right">
        <Infos title="Work Experience" info={state.experience} />
        <Infos title="Education" info={state.education} />
      </div>
    </div>
  )
}

export default AppContent