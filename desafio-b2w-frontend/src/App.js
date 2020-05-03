import React from 'react'
import AppContent from './components/AppContent'

class App extends React.Component {
  state = {
    isFetching: false,
  }

  componentDidMount() {
    fetch('https://www.mocky.io/v2/5a5e38f3330000b0261923a5')
      .then(data => data.json())
      .then(data => {
        data = data.profile
        this.setState({
          image: 'https://raw.githubusercontent.com/b2w-marketplace/code-challenge/master/files/avatar-dev.png',
          name: data.name,
          profession: data.profession,
          profile: data.description,
          contact: {
            "tel": data.contact.tel,
            "cel": data.contact.cel,
            "address": data.contact.address,
            "website": data.contact.website,
            "mail": data.contact.mail 
          },
          skills: data.skills.map(item => ({
            name: item.name,
            value: item.value
          })),
          experience: data.experience.map(item => ({
            name: item.name,
            date: item.date,
            description: item.description
          })),
          education: data.education.map(item => ({
            name: item.name,
            date: item.date,
            description: item.description
          })),
          isFetching: true
        })
        console.log(this.state)
      })
  }

  render() {
    return (
      <div>
        {!!this.state.isFetching && <AppContent {...this.state} />}
      </div>
    )
  }
}

export default App
