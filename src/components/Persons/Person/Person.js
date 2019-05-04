import React, { Component } from 'react';
import btnClasses from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');

    return(
      <div className={btnClasses.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changed}/>
      </div>
    );
  }
}

export default Person;