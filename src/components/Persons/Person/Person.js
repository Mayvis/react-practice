import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
// import Aux from '../../../hoc/Auxiliary';
// import btnClasses from './Person.module.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering...');
    return (
      <Fragment>
        <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEl) => {this.inputElement = inputEl}}
          ref={this.inputElementRef}
          value={this.props.name}
          onChange={this.props.changed}/>
      </Fragment>
    );
  }
}

// validate props
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);