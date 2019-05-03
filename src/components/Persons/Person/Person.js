import React from 'react';
import btnClasses from './Person.module.css';

const Person = (props) => {
  console.log('[Person.js] rendering...');

  return(
    <div className={btnClasses.Person}>
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} onChange={props.changed}/>
    </div>
  );
};

export default Person;