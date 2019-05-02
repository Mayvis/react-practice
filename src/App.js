import React, { Component } from 'react';
import Person from './Person/Person';
import myClasses from './App.module.css';

class App extends Component {
  // state can only be accessed in class-based component
  state = {
    persons: [
      { id: 'liangyu', name: 'LiangYu', age: 20 },
      { id: 'cari', name: 'Cari', age: 21 },
      { id: 'yu', name: 'Yu', age: 22 }
    ],
    otherState: 'Hello, beautiful LiangYu',
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    console.log('nameChanged');

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person = Object.assign({}, this.state.persons[personIndex]); as the same to using spread operator

    const person = { ...this.state.persons[personIndex] }; // using spread operator to clone the object inside the person
    person.name = event.target.value; // change the name to what you type

    const persons = [...this.state.persons]; // clone the persons array
    persons[personIndex] = person; // assign the specific index array object to the new object

    this.setState({ persons: persons }); // set the new persons
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
    let persons = null;
    let btnClass = '';

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
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />);
          })}
        </div>
      );

      btnClass = myClasses.Red;
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red'); // ['red']
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); // ['red', 'bold']
    }

    return (
      <div className={myClasses.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}
        >Toggle Persons</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React app'))
  }
}

export default App;
