import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export default props => (
  <TextInput style={style.input} onChangeText={props.onChange} {...props} />
);
const base = {
  fontFamily: 'Roboto',
};
const style = StyleSheet.create({
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    margin: 10,
    ...base,
  },
});
