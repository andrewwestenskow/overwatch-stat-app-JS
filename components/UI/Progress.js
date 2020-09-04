import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import chartProps from '../../styles/chartProps';

const Progress = props => {
  const {fill, size, label, image} = props;
  let defaultProps;

  switch (size) {
    case 'third':
      defaultProps = chartProps.progress.third;

      break;
    default:
      defaultProps = chartProps.progress.third;

      break;
  }
  return (
    <View style={internalStyle.progressContainer}>
      <AnimatedCircularProgress {...defaultProps} fill={+fill}>
        {fill =>
          !image ? null : (
            <Image
              style={{
                ...internalStyle.progressImage,
                height: defaultProps.size,
                width: defaultProps.size,
              }}
              resizeMethod="resize"
              source={{uri: image}}
            />
          )
        }
      </AnimatedCircularProgress>
      {label ? (
        <Text style={internalStyle.progressLabel}>
          {label} - {fill}%
        </Text>
      ) : (
        <Text style={internalStyle.progressLabel}>{fill}%</Text>
      )}
    </View>
  );
};

export default Progress;

const internalStyle = StyleSheet.create({
  progressContainer: {
    alignItems: 'center',
  },
  progressLabel: {
    fontSize: 18,
    marginTop: 5,
    fontFamily: 'Koverwatch',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  progressImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
