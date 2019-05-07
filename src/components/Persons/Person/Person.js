import React, { Component, Fragment } from 'react';
// import Aux from '../../../hoc/Auxiliary';
// import btnClasses from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');

    return (
      <Fragment>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changed}/>
      </Fragment>
    );
  }
}

export default Person;