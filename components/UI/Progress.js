import React from 'react';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import chartProps from '../../styles/chartProps';

const Progress = props => {
  const {fill, size} = props;
  let defaultProps;

  switch (size) {
    case 'third':
      defaultProps = chartProps.progress.third;
      break;
    default:
      defaultProps = chartProps.progress.third;
      break;
  }
  return <AnimatedCircularProgress {...defaultProps} fill={+fill} />;
};

export default Progress;
