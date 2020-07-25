import React from "react";

import classes from "./App.css"; // allow to make unique class name on CSS automatically
import Persons from "../components/Persons/Persons";
// import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Cockpit from "../components/Cockpit/Cockpit"

class App extends React.Component {
  // initialisation with constructor
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'key1', name: "Cavin", age: 28 },
      { id: 'key2', name: "Katy", age: 29 },
      { id: 'key3', name: "Shane", age: 26 }
    ],
    otherState: "Some other state",
    showPersons: false,
    showCockpit: true
  }

  static getDevivedStateFromProps(props, state) {
    console.log('[App.js] getDevicedStateFromProps', props);
    return state; // return updated state
  }

  // set the values with the internally defined states
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Katy", age: 29 },
        { name: "Shane", age: 27 }
      ]
    });
  };

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true; // return something to update the component!
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  // set the values from text input of child components
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => { // find index which meets the condition <- set argument inside the method
      return p.id === id;
    });

    // one object(element of array) for the index
    const person = {
      ...this.state.persons[personIndex] // "..." works not only for arrays but also for objects
    };

    // const person = Object.assign({}, this.state.persons[personIndex]); // the same function to the above

    // change the value with onChange
    person.name = event.target.value;

    // copy "persons" array
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // slice() <- copy the full array => to actually update the new array!
    const persons = [...this.state.persons]; // equivalent approach to the above
    persons.splice(personIndex, 1); // remove one item on the position of designated index
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow}); // setState(): adjust state
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    // boolean ? true : false inside JSX is quite cumbersome for debugging => explicit if with JS codes like this!
    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <div className={classes.App}>
        <button onClick={() => {
          this.setState({ showCockpit: false });
        }}>
          Remove Cockpit
        </button>
        {this.state.showCockpit ? <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons} 
          persons={this.state.persons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler} 
        /> : null}
        {persons} {/* show the contents of the variable */}
      </div>
    );
  }
}

// export default Radium(App); // higher order component
export default App;