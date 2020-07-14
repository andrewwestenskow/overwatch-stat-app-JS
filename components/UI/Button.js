import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      onLongPress={props.onLongPress}
      style={{...styles.button, ...props.buttonStyle}}>
      <Text style={{...styles.text, ...props.textStyle}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    borderRadius: 4,
    backgroundColor: '#dd5f19',
  },
  text: {textAlign: 'center'},
});
