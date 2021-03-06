import React, { useEffect, useRef, useContext } from 'react';
import myClasses from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // HTTP request ...
    // const timer = setTimeout(() => {
    // alert('Saved data to the cloud!!');
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer); // can cleanup timer
      // console.log('[Cockpit.js]', timer);
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

  if (props.personsLength <= 2) {
    classes.push(myClasses.red); // ['red']
  }

  if (props.personsLength <= 1) {
    classes.push(myClasses.bold); // ['red', 'bold']
  }

  return (
    <div className={myClasses.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}
      >Toggle Persons
      </button>

      {/*<AuthContext.Consumer>*/}
      {/*  {context => <button onClick={context.login}>Log in</button>}*/}
      {/*</AuthContext.Consumer>*/}

      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);