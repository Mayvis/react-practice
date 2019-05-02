import React from 'react';
import './Person.css';

const Person = (props) => {
  return(
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" value={props.name} readOnly/>
    </div>
  );
};

export default Person;