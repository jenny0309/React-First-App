import React, { Component } from 'react'; // import Fragment if Fragment tag would be used

// import Auxiliary from "../../../hoc/Auxiliary";
import classes from "./Person.css"; // extends css file to use it <- style tags are automatically included in the source code

class Person extends Component {
    render () {
        console.log('[Person.js] rendering...');

        // How to render JSX
        // 1. use div tag
        // 2. it also works if it becomes an array seperated into each tag, instead of enclosing div tag!
        // 3. Auxiliary tag <- empty wrapper using children property
        // 4. React.Fragment tag(or just Fragment tag)
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </div>
        )
    }
};

export default Person;