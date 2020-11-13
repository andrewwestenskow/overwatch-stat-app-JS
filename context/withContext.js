import React from 'react';

export default (WrappedComponent, Provider) => {
  return props => {
    return (
      <Provider>
        <WrappedComponent {...props} />
      </Provider>
    );
  };
};
