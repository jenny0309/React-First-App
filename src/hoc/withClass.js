import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} /> {/* send all props like this! */}
        </div>
    );
};

export default withClass;