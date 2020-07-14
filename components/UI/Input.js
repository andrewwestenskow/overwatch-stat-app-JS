import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default props => <TextInput style={style.input} {...props} />;

const style = StyleSheet.create({
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    margin: 10,
  },
});
