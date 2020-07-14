import React from 'react';
import {View, Text} from 'react-native';
import SafeView from '../hocs/SafeView';
import containers from '../styles/container';
import Button from './UI/Button';

const Landing = ({navigation}) => (
  <View style={containers.container}>
    <Button title="Sign Up" />
    <Button title="Log In" />
  </View>
);

export default SafeView(Landing);
