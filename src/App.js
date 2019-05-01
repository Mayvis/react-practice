import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  // state can only be accessed in class-based component
  state = {
    persons: [
      { name: 'LiangYu', age: 20 },
      { name: 'Cari', age: 21 },
      { name: 'Yu', age: 22 }
    ],
    otherState: 'Hello, beautiful LiangYu'
  };

  // method to handle onClick event
  // Don't do this.state.persons[0].name = 'LiangYu'
  switchNameHandler = (newName) => {
    console.log('switchName');

    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Cari', age: 21 },
        { name: 'Yu', age: 22 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    console.log('nameChanged');

    this.setState({
      persons: [
        { name: 'LiangYu', age: 20 },
        { name: event.target.value, age: 21 },
        { name: 'Yu', age: 22 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler('Liang')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Yu')}
          change={this.nameChangedHandler}
        >My Hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React app'))
  }
}

export default App;
