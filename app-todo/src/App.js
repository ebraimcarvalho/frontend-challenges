import React from 'react';

import Header from './components/Header'
import Todos from './components/Todos'
import Submit from './components/Submit'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      tasks: [ 'task 1', 'task 2', 'task 3' ],
    }
  }

  handleAdd = (text) => {
    return text ? this.setState({ tasks: [...this.state.tasks, text]}) : ''
  }

  handleRemove = (index) => {
    const newArr = [...this.state.tasks]
    newArr.splice(index, 1)
    this.setState({ tasks: newArr })
  }

  render() {
    return (
      <div className="App">
        <Header numTodo={this.state.tasks.length} />
        <Todos tasks={this.state.tasks} handleRemove={this.handleRemove} />
        <Submit handleAdd={this.handleAdd} valueForm={this.state.valueForm} />
      </div>
    );
  }
}

export default App;
