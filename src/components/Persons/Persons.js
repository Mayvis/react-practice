import React, { Component } from 'react';
import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log('[Persons.js] getDerivedStateFromProps', nextProps);
  //   return prevState;
  // }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('[Persons.js] shouldComponentUpdate', nextProps, nextState, nextContext);
    return nextProps.persons !== this.props.persons;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeBeforeUpdate', prevProps, prevState);
    return { message: 'Snapshot' };
  }

  componentDidUpdate(prevProps, prevState, snapShot) {
    console.log('[Persons.js] componentDidUpdate', prevProps, prevState);
    console.log(snapShot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');

    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}/>
      );
    });
  }
}

export default Persons;