import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null); // use Hooks! <- equivalent to React.createRef()
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    // internal method for functional component
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // HTTP request...
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click(); // ref with Hooks
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []); // alert function is executed when persons are changed <- able to insert multiple elements on the array

    useEffect(() => { // useEffect() can be used multiple times
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    // let classes = ['red', 'bold'].join(' '); // "red bold"
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red); // just like append in Python
    }
    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working</p>

            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons
            </button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

export default React.memo(cockpit);