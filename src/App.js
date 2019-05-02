import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  // state can only be accessed in class-based component
  state = {
    persons: [
      { id: 1, name: 'LiangYu', age: 20 },
      { id: 2, name: 'Cari', age: 21 },
      { id: 3, name: 'Yu', age: 22 }
    ],
    otherState: 'Hello, beautiful LiangYu',
    showPersons: false
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

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    // Using the spread operator is better then using the original data, because it just clone the state
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />);
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >togglePersons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React app'))
  }
}

export default App;
