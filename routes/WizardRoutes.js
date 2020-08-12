import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Maps from '../components/wizard/Maps';
import Heroes from '../components/wizard/Heroes';
import screenWrapper from './ScreenWrapper';
const Stack = createStackNavigator();

//* Renders results wizard

export default ({heroes, maps}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="Maps">
      <Stack.Screen component={screenWrapper({maps}, Maps)} name="Maps" />
      <Stack.Screen
        component={screenWrapper({heroes, maps}, Heroes)}
        name="Heroes"
      />
    </Stack.Navigator>
  );
};
