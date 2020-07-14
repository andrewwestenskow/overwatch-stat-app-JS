import React from 'react';
import {View, Text} from 'react-native';
import SafeView from '../hocs/SafeView';
import containers from '../styles/container';
import typography from '../styles/typography';
import Button from './UI/Button';

const Landing = ({navigation}) => (
  <View style={containers.container}>
    <Text style={typography.heading}>Welcome to Overwatch Match Tracker</Text>
    <Button onPress={() => navigation.navigate('Register')} title="Sign Up" />
    <Button onPress={() => navigation.navigate('Login')} title="Log In" />
  </View>
);

export default SafeView(Landing);
