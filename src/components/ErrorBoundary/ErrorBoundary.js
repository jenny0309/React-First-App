import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    // method to catch the error and return the error message with some information
    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        // return the message only if there's an error
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>;
        } else {
            return this.props.children; // whatever wrapped in the ErrorBoundary class
        }
    }
}

export default ErrorBoundary;