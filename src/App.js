import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  // state can only be accessed in class-based component
  state = {
    Persons: [
      { name: 'LiangYu', age: 20 },
      { name: "Cari", age: 21 },
      { name: "Yu", age: 22 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button>Switch Name</button>
        <Person name={this.state.Persons[0].name} age={this.state.Persons[0].age}/>
        <Person name={this.state.Persons[1].name} age={this.state.Persons[1].age}>My Hobbies: Racing</Person>
        <Person name={this.state.Persons[2].name} age={this.state.Persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React app'))
  }
}

export default App;
