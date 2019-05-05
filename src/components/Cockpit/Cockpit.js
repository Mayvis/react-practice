import React, { useEffect } from 'react';
import myClasses from './Cockpit.module.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // HTTP request ...
    const timer = setTimeout(() => {
      alert('Saved data to the cloud!!');
    }, 1000);
    return () => {
      // clearTimeout(timer); // can cleanup timer
      console.log('[Cockpit.js]', timer);
      console.log('[Cockpit.js] cleanup work in useEffect'); // cleanup work using useEffect
    };
  }, []); // when props changed this will trigger, otherwise, it will not changed

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect'); // cleanup work using useEffect
    };
  });

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