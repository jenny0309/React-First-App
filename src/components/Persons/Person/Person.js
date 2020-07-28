import React, { Component } from 'react'; // import Fragment if Fragment tag would be used
import PropTypes from 'prop-types';

import Auxiliary from "../../../hoc/Auxiliary";
import withClass from "../../../hoc/withClass";
import classes from "./Person.css"; // extends css file to use it <- style tags are automatically included in the source code
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus(); // last input is selected when toggled!
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render () {
        console.log('[Person.js] rendering...');

        // How to render JSX
        // 1. use div tag
        // 2. it also works if it becomes an array seperated into each tag, instead of enclosing div tag!
        // 3. Auxiliary tag <- empty wrapper using children property
        // 4. React.Fragment tag(or just Fragment tag)
        return (
            <Auxiliary>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2">{this.props.children}</p>
                <input 
                    key="i3"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </Auxiliary>
        )
    }
};

// set types of variables with PropTypes
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);