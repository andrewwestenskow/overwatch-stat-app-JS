import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Landing">
    <Stack.Screen
      name="Landing"
      component={Landing}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{header: () => null}}
    />
  </Stack.Navigator>
);
