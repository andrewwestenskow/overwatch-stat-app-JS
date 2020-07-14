import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SafeView from '../../hocs/SafeView';
import containers from '../../styles/container';

const Login = props => {
  return (
    <View style={containers.container}>
      <Text>Login</Text>
    </View>
  );
};
export default SafeView(Login);
