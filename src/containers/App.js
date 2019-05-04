import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import myClasses from './App.module.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

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

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('[App.js] getDerivedStateFromProps', nextProps);

    return prevState;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[App.js] componentDidUpdate', prevProps, prevState, snapshot);
  }

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
    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={myClasses.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React app'))
  }
}

export default App;
