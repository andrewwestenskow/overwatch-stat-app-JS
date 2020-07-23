import React from 'react';

export default (customProps, WrappedComponent) => {
  return defaultProps => {
    return <WrappedComponent {...defaultProps} {...customProps} />;
  };
};
