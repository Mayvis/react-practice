import React from 'react';
import myClasses from './Cockpit.module.css';

const Cockpit = (props) => {
  let classes = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = myClasses.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(myClasses.red); // ['red']
  }

  if (props.persons.length <= 1) {
    classes.push(myClasses.bold); // ['red', 'bold']
  }

  return (
    <div className={myClasses.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <button
        className={btnClass}
        onClick={props.clicked}
      >Toggle Persons</button>
    </div>
  );
};

export default Cockpit;