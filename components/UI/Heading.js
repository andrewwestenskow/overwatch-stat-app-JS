import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Heading = props => {
  const {title, subheading} = props;

  return (
    <View>
      <Text style={internalStyles.title}>{title}</Text>
      {subheading && (
        <Text style={internalStyles.subheading}>{subheading}</Text>
      )}
    </View>
  );
};

export default Heading;

const internalStyles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontFamily: 'Koverwatch',
  },
  subheading: {
    textAlign: 'center',
    color: 'rgba(215,211,212, 0.50)',
    fontFamily: 'Koverwatch',
  },
});
