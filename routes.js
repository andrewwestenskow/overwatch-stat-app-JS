import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Results from './components/Results/Results';
import ResultsWizard from './components/wizard/ResultsWizard';

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
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Results"
      component={Results}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="ResultsWizard"
      component={ResultsWizard}
      options={{header: () => null}}
    />
  </Stack.Navigator>
);
