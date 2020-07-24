import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Cavin', age: 28},
      {name: 'Katy', age: 29},
      {name: 'Shane', age: 26}
    ]
  });

  console.log(personsState);

  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = "Junpei";
    setPersonsState({
      persons: [
        {name: 'Junpei', age: 28},
        {name: 'Katy', age: 29},
        {name: 'Shane', age: 27}
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person 
        name={personsState.persons[0].name} 
        age={personsState.persons[0].age}
        click={switchNameHandler}>My Hobbies: Football</Person> {/* cf. class-based component: this.switchNameHandler */}
      <Person 
        name={personsState.persons[1].name} 
        age={personsState.persons[1].age} />
      <Person 
        name={personsState.persons[2].name} 
        age={personsState.persons[2].age} />
    </div>
    // <h1>Another heading</h1> <- error!(JSX must be enclosed in one root element)
  ); // JSX <- not real HTML and has some restrictions(ex. class vs. className)
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!!!')); // HTML
};

export default App;