import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Maps from '../components/wizard/Maps';
import Heroes from '../components/wizard/Heroes';
import screenWrapper from './ScreenWrapper';
const Stack = createStackNavigator();

//* Renders results wizard

export default ({heroes, maps, reducer}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
      initialRouteName="Maps">
      <Stack.Screen
        component={screenWrapper({maps, reducer}, Maps)}
        name="Maps"
      />
      <Stack.Screen
        component={screenWrapper({heroes, reducer, maps}, Heroes)}
        name="Heroes"
      />
    </Stack.Navigator>
  );
};
