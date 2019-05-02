import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
  // state can only be accessed in class-based component
  state = {
    persons: [
      { name: 'LiangYu', age: 20 },
      { name: 'Cari', age: 21 },
      { name: 'Yu', age: 22 }
    ],
    otherState: 'Hello, beautiful LiangYu',
    showPersons: false
  };

  // method to handle onClick event
  // Don't do this.state.persons[0].name = 'LiangYu'
  switchNameHandler = (newName) => {
    console.log('switchName');

    this.setState({
      persons: [
        { name: newName, age: 20 },
        { name: 'Cari', age: 21 },
        { name: 'Yu', age: 22 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    console.log('nameChanged');

    this.setState({
      persons: [
        { name: 'LiangYu', age: 20 },
        { name: event.target.value, age: 21 },
        { name: 'Yu', age: 22 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Liang')}
        >Switch Name</button>
        <button
          style={style}
          onClick={this.togglePersonsHandler}
        >togglePersons</button>
        {
          this.state.showPersons === true ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}/>
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'Yu')}
                changed={this.nameChangedHandler}
              >My Hobbies: Racing</Person>
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age}/>
            </div> : ''
        }
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a React app'))
  }
}

export default App;
