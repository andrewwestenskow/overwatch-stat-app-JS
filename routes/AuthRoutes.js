import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../components/Landing';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import ResultsContainer from '../containers/ResultsContainer';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Landing"
    screenOptions={{headerShown: false}}>
    <Stack.Screen name="Landing" component={Landing} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="ResultsContainer" component={ResultsContainer} />
  </Stack.Navigator>
);
