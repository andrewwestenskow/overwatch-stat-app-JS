import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SafeView from '../../hocs/SafeView';
import containers from '../../styles/container';

const Register = props => {
  return (
    <View style={containers.container}>
      <Text>Register</Text>
    </View>
  );
};
export default SafeView(Register);
