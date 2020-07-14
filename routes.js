import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from './components/Landing';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Landing">
    <Stack.Screen
      name="Landing"
      component={Landing}
      options={{header: () => null}}
    />
  </Stack.Navigator>
);
