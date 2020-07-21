import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from './components/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Dashboard from './components/dashboard/Dashboard';
import Results from './components/Results/Results';
import ResultsWizard from './components/wizard/ResultsWizard';
import Header from './components/Header/Header';

const Stack = createStackNavigator();

const renderHeader = ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  let title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  if (scene.route.params.player) {
    title = `${title} - ${scene.route.params.player.name}`;
  }
  return (
    <Header
      title={title}
      options={options}
      navigation={navigation}
      previous={previous}
      params={scene.route.params}
    />
  );
};

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
      options={{headerMode: 'screen', header: renderHeader}}
    />
    <Stack.Screen
      name="Results"
      component={Results}
      options={{headerMode: 'screen', header: renderHeader}}
    />
    <Stack.Screen
      name="ResultsWizard"
      component={ResultsWizard}
      options={{headerMode: 'screen', header: renderHeader}}
    />
  </Stack.Navigator>
);
