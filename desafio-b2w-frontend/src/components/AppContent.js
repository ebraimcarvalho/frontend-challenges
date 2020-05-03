import React from 'react'
import Cover from './cover'
import Profile from './profile'
import Contact from './contact'
import Skills from './skills'
import Infos from './infos'

const AppContent = (state) => {
  return (
    <div className="container">
      <div className="left">
        <Cover state={state}/>
        <Profile title="Profile" profile={state.profile} />
        <Contact title="Contact" contact={state.contact} />
        <Skills title="Skills" skill={state.skills} />
      </div>
      <div className="right">
        <Infos title="Work Experience" info={state.experience} />
        <Infos title="Education" info={state.education} />
      </div>
    </div>
  )
}

export default AppContent